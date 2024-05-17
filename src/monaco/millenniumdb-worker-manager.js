import * as monaco from 'monaco-editor-core';

export default class MillenniumDBWorkerManager {
  constructor() {
    this._workers = {};
    this._clients = {};
  }

  async getLanguageServiceWorker(languageId, ...resources) {
    const client = await this._getClient(languageId);
    await this._workers[languageId].withSyncedResources(resources);
    return client;
  }

  dispose() {
    this._stopWorkers();
  }

  _getClient(languageId) {
    if (!(languageId in this._clients)) {
      this._workers[languageId] = monaco.editor.createWebWorker({
        moduleId: languageId,
        label: languageId,
        createData: {
          languageId: languageId,
        },
      });

      this._clients[languageId] = this._workers[languageId].getProxy();
    }

    return this._clients[languageId];
  }

  _stopWorkers() {
    for (const languageId in this._workers) {
      this._workers[languageId].dispose();
      delete this._workers[languageId];
    }
  }
}
