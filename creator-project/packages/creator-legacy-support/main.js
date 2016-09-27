
/* jslint node: true, sub: true, esversion: 6 */
/* globals Editor */

"use strict";

const Fs = require('fs');
const Path = require('path');

const Electron = require('electron');

const TIMEOUT = -1;
const DEBUG_WORKER = false;

let _buildState = 'sleep';

function _build(reason) {
    if (_buildState !== 'sleep' && _buildState !== 'finish') {
        Editor.warn('[Lua/C++ Support] Building in progress');
        return;
    }

    let state = Editor.Profile.load('creator-legacy-support', 'project');
    if (!state || !state.setup) return;
    if (reason === 'scene:saved' && !state.autoBuild) return;

    if (state.path === '' || typeof state.path !== 'string') {
        if (reason === 'ui') {
            Editor.Dialog.messageBox({
              type: 'warning',
              buttons: [Editor.T('MESSAGE.ok')],
              title: Editor.T('MESSAGE.warning'),
              message: 'Please setup Lua/C++ Target Project first',
              noLink: true,
            });
        } else {
            Editor.warn('[Lua/C++ Support] Please setup Lua/C++ Target Project first');
        }

        return;
    }

    let worker;
    let errorEvent = 'creator-legacy-support:convert-abort';
    let errorListener = (event, err) => {
        if (worker) {
            worker = null;
        }
        Editor.error(err);
    };
    Electron.ipcMain.once(errorEvent, errorListener);

    let workerUrl = Editor.url('packages://creator-legacy-support/core/builder-worker');
    worker = Editor.App.spawnWorker(workerUrl, (browser) => {
        var aborted;
        browser.once('closed', () => {
            if (!aborted) {
                Electron.ipcMain.removeListener(errorEvent, errorListener);
            }
        });

        worker.send('creator-legacy-support:run-builder', state, DEBUG_WORKER, (err) => {
            if (err) {
                Editor.error(err);
            }

            worker.close();
            worker = null;
        }, TIMEOUT);
    }, DEBUG_WORKER);
}

module.exports = {
    load() {
    },

    unload() {
    },

    messages: {
        'setup-target-project'() {
            Editor.Panel.open('creator-legacy-support');
        },

        'build'(reason) {
            _build(reason);
        },

        'scene:saved'(event) {
            _build('scene:saved');
        },

        'creator-legacy-support:state-changed'(event, state, progess) {
            _buildState = state;
        }
    }
};

