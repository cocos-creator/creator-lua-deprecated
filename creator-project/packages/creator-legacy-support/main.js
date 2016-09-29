
/* jslint node: true, sub: true, esversion: 6 */
/* globals Editor */

"use strict";

const Fs = require('fs');
const Path = require('path');

const Electron = require('electron');

const TIMEOUT = -1;
const DEBUG_WORKER = false;

const Project = require('./core/Project');

let _buildState = 'sleep';

function _runWorker(url, message, project) {
    let worker;
    worker = Editor.App.spawnWorker(url, () => {
        worker.send(message, project.dumpState(), DEBUG_WORKER, (err) => {
            if (err) {
                Editor.error(err);
            }

            if (worker) {
                worker.close();
            }
            worker = null;
        }, TIMEOUT);
    }, DEBUG_WORKER);
}

function _checkProject(reason) {
    let state = Editor.Profile.load('creator-legacy-support.01', 'project');
    let project = new Project(state);

    if (project.validate()) {
        return project;
    } else {
        if (reason === 'ui') {
            Editor.Dialog.messageBox({
              type: 'warning',
              buttons: [Editor.T('MESSAGE.ok')],
              title: 'Warning - Legacy Support',
              message: 'Please setup Target Project first',
              noLink: true,
            });
        } else {
            Editor.warn('[Legacy Support] Please setup Target Project first');
        }
    }

    return null;
}

function _build(reason) {
    if (_buildState !== 'sleep' && _buildState !== 'finish') {
        Editor.warn('[Legacy Support] Building in progress');
        return;
    }

    let project = _checkProject(reason);
    if (!project) return;
    if (reason === 'scene:saved' && !project.autoBuild) return;

    Editor.Ipc.sendToAll('creator-legacy-support:state-changed', 'start', 0);

    let workerUrl = 'packages://creator-legacy-support/core/BuildWorker';
    _runWorker(workerUrl, 'creator-legacy-support:run-build-worker', project);
}

function _copyLibrary(reason) {
    let project = _checkProject(reason);
    if (!project) return;

    let message = [
        'Files in target project will be overwrite:',
        '',
        'src/main.lua',
        'src/JeffreyJSON.lua',
        'src/creator/*',
        'src/cocos/*'
    ].join("\n");

    let res = Editor.Dialog.messageBox({
      type: 'warning',
      buttons: ['Copy', Editor.T('MESSAGE.cancel')],
      title: 'Warning - Legacy Support',
      message: message,
      noLink: true,
    });

    if (res == 0) {
        // 0: Copy
        Editor.Ipc.sendToAll('creator-legacy-support:state-changed', 'start', 0);

        let workerUrl = 'packages://creator-legacy-support/core/CopyLibraryWorker';
        _runWorker(workerUrl, 'creator-legacy-support:run-copy-library-worker', project);
    }
}

module.exports = {
    load() {
    },

    unload() {
    },

    messages: {
        'setup-target-project'() {
            Editor.Panel.open('creator-legacy-support.01');
        },

        'build'(event, reason) {
            _build(reason);
        },

        'copy-library'(event, reason) {
            _copyLibrary(reason);
        },

        'scene:saved'(event) {
            _build('scene:saved');
        },

        'creator-legacy-support:state-changed'(event, state, progress) {
            _buildState = state;
            Editor.Ipc.sendToWins('creator-legacy-support:state-changed', state, progress);
        }
    }
};

