
/* jslint node: true, sub: true, esversion: 6, browser: true */
/* globals Editor */

"use strict";

const Fs = require('fire-fs');
const Path = require('path');

const printlog = Editor ? Editor.log : console.log;

const DB_ASSETS_PREFIX = 'db://assets/';
const DB_ASSETS_PREFIX_LENGTH = DB_ASSETS_PREFIX.length;

const DB_INTERNAL_PREFIX = 'db://internal/';
const DB_INTERNAL_PREFIX_LENGTH = DB_INTERNAL_PREFIX.length;

const DB_INTERNAL_PREFAB_PREFIX = 'db://internal/prefab';

const FIRE_SUFFIX = '.fire';
const FIRE_SUFFIX_LENGTH = FIRE_SUFFIX.length;

const RAW_INTERNAL_PREFIX = 'raw-internal';
const RAW_ASSETS_PREFIX = 'raw-assets';

const {WorkerBase, registerWorker} = require('./WorkerBase');

const Project = require('./Project');
const LuaValueDump = require('./LuaValueDump');

function _stripUrlPrefix(url) {
    if (url.startsWith(DB_ASSETS_PREFIX)) {
        url = url.substring(DB_ASSETS_PREFIX_LENGTH);
    }
    return url;
}

function _stripSceneUrl(url) {
    url = _stripUrlPrefix(url);
    if (url.endsWith(FIRE_SUFFIX)) {
        url = url.substring(0, url.length - FIRE_SUFFIX_LENGTH);
    }
    return url;
}

function _isInternalPrefab(url) {
    return url.startsWith(DB_INTERNAL_PREFAB_PREFIX);
}

function _isInternalRawfile(url) {
    return url.startsWith(DB_INTERNAL_PREFIX);
}

function _loadProps(uuid) {
    let path = Path.join(Editor.remote.importPath, uuid.substring(0, 2), uuid) + '.json';
    let props = JSON.parse(Fs.readFileSync(path));
    _convertId(props);
    return props;
}

function _convertId(props) {
    if (Array.isArray(props)) {
        props.forEach((item) => {
            _convertId(item);
        });
    } else if (props !== null && typeof props === 'object') {
        Object.keys(props).forEach((key) => {
            if (key === '__id__') {
                props[key]++;
            } else {
                _convertId(props[key]);
            }
        });
    }
}

class BuildWorker extends WorkerBase {
    run(state, callback) {
        Editor.Ipc.sendToAll('creator-legacy-support:state-changed', 'start', 0);

        Editor.require('app://asset-db');

        this._usedUuids = {};
        this._db = Editor.assetdb.remote;

        this._callback = callback;

        Editor.assetdb.queryAssets('db://assets/**/*', 'scene', (err, scenes) => {
            this.project = new Project(state);
            this.project.setScenes(scenes);

            this._execTime('after queryAssets()');

            if (this._debug) {
                this.project.printlog();
            }

            this.results = {
                assets: {},
                files: {},
                prefabs: {},
                scenes: {}
            };

            this._updateProgress(5);

            this._convertScenes();
            this._convertResources();
        });
    }

    _finish() {
        let basedir = Path.join(this.project.path, 'src', 'imports');

        this._dumplua('assets', Path.join(basedir, 'assets.lua'), this.results.assets);
        this._dumplua('prefabs', Path.join(basedir, 'prefabs.lua'), this.results.prefabs);
        this._dumplua('files', Path.join(basedir, 'files.lua'), this.results.files);
        this._dumplua('scenes', Path.join(basedir, 'scenes.lua'), this.results.scenes);

        Editor.Ipc.sendToAll('creator-legacy-support:state-changed', 'finish', 100);
        printlog('[creator-legacy-support] build completed');

        this._usedUuids = null;
        this._db = null;

        this._callback();
    }

    _convertScenes() {
        if (this._debug) {
            printlog('[creator-legacy-support] converting scenes');
        }

        let selectedScenes = this.project.getSelectedScenes();
        let step = 55 / selectedScenes.length;

        selectedScenes.forEach((scene, index) => {
            this._execTime('before convert scene ' + (index + 1).toString());
            this._parseUuid(scene.uuid);
            this._execTime('after convert scene ' + (index + 1).toString());
            let url = _stripSceneUrl(scene.url);
            this.results.scenes[url] = scene.uuid;
            if (scene.uuid === this.project.startSceneUuid) {
                this.results.scenes.__startSceneUrl = url;
            }

            this._updateProgress(step);
        });
    }

    _convertResources() {
        if (this._debug) {
            printlog('[creator-legacy-support] converting resources');
        }

        this._db.queryMetas('db://assets/resources/**/', null, (err, metas) => {
            let step = 10 / metas.length;
            metas.forEach((meta) => {
                this._parseMeta(meta);
                this._updateProgress(step);
            });

            this._copyRawfiles();
        });
    }

    _copyRawfiles() {
        let destdir = Path.join(this.project.path, 'res');
        Fs.ensureDirSync(Path.dirname(destdir));

        let dest;
        let db = this._db;

        let files = this.results.files;
        let uuids = Object.keys(files);
        let step = 30 / uuids.length;
        uuids.forEach((uuid) => {
            dest = Path.join(destdir, files[uuid]);
            Fs.ensureDirSync(Path.dirname(dest));
            Fs.copySync(db.uuidToFspath(uuid), dest);
            this._updateProgress(step);
        });

        this._finish();
    }

    _parseUuid(uuid) {
        if (this._usedUuids[uuid]) return;

        let meta = this._db.loadMetaByUuid(uuid);
        this._parseMeta(meta);
    }

    _parseMeta(meta) {
        let uuid = meta.uuid;
        if (this._usedUuids[uuid]) return;
        this._usedUuids[uuid] = true;

        let url = this._db.uuidToUrl(uuid);
        if (meta.useRawfile()) {
            if (_isInternalRawfile(url)) {
                url = Path.join(RAW_INTERNAL_PREFIX, url.substring(DB_INTERNAL_PREFIX_LENGTH));
            } else {
                url = Path.join(RAW_ASSETS_PREFIX, _stripUrlPrefix(url));
            }
            this.results.files[uuid] = url;
        } else {
            let props = _loadProps(uuid);
            if (!_isInternalPrefab(url)) {
                if (Array.isArray(props)) {
                    this.results.assets[uuid] = {
                        __type__: '__js_array__',
                        __js_array__: props
                    };
                } else {
                    this.results.assets[uuid] = props;
                }
            }
            this._parseProps(props);
        }
    }

    _parseProps(props) {
        if (Array.isArray(props)) {
            props.forEach((item) => {
                this._parseProps(item);
            });
            return;
        }

        let db = this._db;

        switch (props.__type__) {
        case 'cc.Sprite':
            this._parseUuid(props._spriteFrame.__uuid__);
            break;

        case 'cc.SpriteFrame':
            let content = props['content'];
            if (content) {
                if (content['texture'] && content['texture'] !== '') {
                    this._parseUuid(content['texture']);
                }
                if (content['atlas'] && content['atlas'] !== '') {
                    this._parseUuid(content['atlas']);
                }
            }
            break;

        case 'cc.SpriteAtlas':
            if (props['_spriteFrames']) {
                let frames = props['_spriteFrames'];
                Object.keys(frames).forEach((name) => {
                    this._parseUuid(frames[name].__uuid__);
                });
            }
            break;

        case 'cc.TiledMap':
            if (props['_tmxFile']) {
                this._parseUuid(props['_tmxFile'].__uuid__);
            }
            break;

        case 'cc.TiledMapAsset':
            if (Array.isArray(props['textures'])) {
                props['textures'].forEach((item) => {
                    this._parseUuid(item.__uuid__);
                });
            }
            break;

        case 'cc.ParticleSystem':
            if (props['_file']) {
                this._parseUuid(props['_file'].__uuid__);
            }
            break;

        case 'cc.Animation':
            if (Array.isArray(props['_clips'])) {
                props['_clips'].forEach((clip) => {
                    this._parseUuid(clip.__uuid__);
                });
            }
            break;

        case 'cc.Button':
            if (props['pressedSprite']) {
                this._parseUuid(props['pressedSprite'].__uuid__);
            }
            if (props['hoverSprite']) {
                this._parseUuid(props['hoverSprite'].__uuid__);
            }
            if (props['_N$normalSprite']) {
                this._parseUuid(props['_N$normalSprite'].__uuid__);
            }
            if (props['_N$disabledSprite']) {
                this._parseUuid(props['_N$disabledSprite'].__uuid__);
            }
            break;

        case 'cc.EditBox':
            if (props['_N$backgroundImage']) {
                this._parseUuid(props['_N$backgroundImage'].__uuid__);
            }
            break;

        case 'cc.PrefabInfo':
            if (props['asset']) {
                let uuid = props['asset'].__uuid__;
                this._parseUuid(uuid);
                let url = _stripUrlPrefix(this._db.uuidToUrl(uuid));
                if (!_isInternalPrefab(url)) {
                    this.results.prefabs[url] = uuid;
                }
            }
            break;
        }
    }

    _dumplua(varname, path, value) {
        let dump = new LuaValueDump();
        let contents = ["\n", 'local ' + varname + ' = '];
        contents.push(dump.dump(value));
        contents.push("\n");
        contents.push("\n");
        contents.push('return ' + varname);
        contents.push("\n");
        contents.push("\n");
        Fs.ensureDirSync(Path.dirname(path));
        Fs.writeFileSync(path, contents.join(''));
    }
}

registerWorker(BuildWorker, 'run-build-worker');

