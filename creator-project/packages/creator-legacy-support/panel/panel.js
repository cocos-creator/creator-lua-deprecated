/* jslint node: true, sub: true, esversion: 6, browser: true */
/* globals Editor */

'use strict';

const Fs = require('fs');
const Path = require('path');
const Electron = require('electron');

const Project = require(Editor.url('packages://creator-legacy-support/core/Project.js'));

const styleUrl = Editor.url('packages://creator-legacy-support/panel/style.css');
const style = Fs.readFileSync(styleUrl);

const templateUrl = Editor.url('packages://creator-legacy-support/panel/template.html');
const template = Fs.readFileSync(templateUrl);

Editor.Panel.extend({
    style: style,
    template: template,

    ready() {
        let profilesProject = this.profiles.project;
        let project = new Project(profilesProject);

        let vm = this._vm = new window.Vue({
            el: this.shadowRoot,
            data: {
                project: project,
                task: '',
                buildState: 'sleep',
                buildProgress: 0
            },

            watch: {
                project: {
                    handler(val) {
                        if (!profilesProject.save) return;
                        project.dumpState(profilesProject);
                        profilesProject.save();
                    },
                    deep: true
                }
            },

            methods: {
                _onChooseDistPathClick(event) {
                    event.stopPropagation();
                    let res = Editor.Dialog.openFile({
                        defaultPath: this.project.path,
                        properties: ['openDirectory']
                    });
                    if (res && res[0]) {
                        this.project.path = res[0];
                    }
                },

                _onShowInFinderClick(event) {
                    event.stopPropagation();
                    if (!Fs.existsSync(this.project.path)) {
                        Editor.warn('%s not exists!', this.project.path);
                        return;
                    }
                    Electron.shell.showItemInFolder(this.project.path);
                    Electron.shell.beep();
                },

                _onSelectAllCheckedChanged(event) {
                    event.stopPropagation();
                    if (event.detail.value) {
                        this.project.scenes.forEach((scene) => {
                            scene.checked = true;
                        });
                    }
                },

                _onBuildClick(event) {
                    event.stopPropagation();
                    Editor.Ipc.sendToMain('creator-legacy-support:build', 'ui');
                },

                _onSetupClick(event) {
                    event.stopPropagation();
                    Editor.Panel.close('creator-legacy-support');
                }
            }
        });

        Editor.assetdb.queryAssets('db://assets/**/*', 'scene', (err, scenes) => {
            vm.project.setScenes(scenes);
        });
    },

    _stateChanged: function(state, progress) {
        this._vm.buildProgress = progress;
        this._vm.buildState = state;
    },

    messages: {
        'creator-legacy-support:state-changed'(event, state, progess) {
            this._stateChanged(state, progess);
        }
    }
});

