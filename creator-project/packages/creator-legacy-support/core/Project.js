
/* jslint node: true, sub: true, esversion: 6 */
/* globals Editor */

"use strict";

const printlog = Editor ? Editor.log : console.log;
function tostring(v) {
    return v === null ? '' : v.toString();
}

module.exports = class Project {
    constructor(state) {
        this.path = state ? state.path : '';
        this.startSceneUuid = state ? state.startSceneUuid : '';
        this.selectAllScenes = state ? state.selectAllScenes : true;
        this.autoBuild = state ? state.autoBuild : true;
        this.scenes = [];
        this._scenesUuid = (state && Array.isArray(state.scenesUuid)) ? state.scenesUuid : [];
    }

    printlog() {
        printlog('-- dump project');
        printlog('  path: ' + tostring(this.path));
        printlog('  startSceneUuid: ' + tostring(this.startSceneUuid));
        printlog('  selectAllScenes: ' + (this.selectAllScenes ? 'YES' : 'NO'));
        printlog('  autoBuild: ' + (this.autoBuild ? 'YES' : 'NO'));
        printlog('  scenes:');
        this.scenes.forEach((scene, index) => {
            printlog('    ' + (index + 1).toString() + ': ' + scene.url + (scene.checked ? ' [*]' : ' [ ]'));
        });
    }

    setScenes(scenes) {
        this.scenes.splice(0);
        scenes.forEach((scene) => {
            this.scenes.push({
                uuid: scene.uuid,
                url: scene.url,
                checked: this.selectAllScenes || this._scenesUuid.indexOf(scene.uuid) !== -1
            });
        });

        let startSceneUuid = this.startSceneUuid;
        let found = this.scenes.find((item) => {
            return item.uuid == startSceneUuid;
        });

        if (!startSceneUuid || !found) {
            if (this.scenes.length) {
                this.startSceneUuid = this.scenes[0].uuid;
            } else {
                this.startSceneUuid = '';
            }
        }
    }

    dumpState(state) {
        if (!state) {
            state = {};
        }
        state.setup = true;
        state.path = this.path;
        state.startSceneUuid = this.startSceneUuid;
        state.selectAllScenes = this.selectAllScenes;
        state.autoBuild = this.autoBuild;
        state.scenesUuid = [];
        this.scenes.forEach((scene) => {
            if (this.selectAllScenes || scene.checked) {
                state.scenesUuid.push(scene.uuid);
            }
        });
        return state;
    }

    getSelectedScenes() {
        let scenes = [];
        this.scenes.forEach((scene) => {
            if (this.selectAllScenes || scene.checked) {
                scenes.push(scene);
            }
        });
        return scenes;
    }
};

