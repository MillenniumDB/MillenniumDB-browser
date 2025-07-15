import { editor, type Uri } from "monaco-editor";
import type { MDBWorker } from "./mdb-worker";

// manages the workers for each MDB language
export class MDBWorkerManager {
  private _workers: Record<string, editor.MonacoWebWorker<MDBWorker>>;
  private _clients: Record<string, Promise<MDBWorker>>;

  constructor() {
    this._workers = {};
    this._clients = {};
  }

  // get a worker given a languageId and resources
  async getLanguageServiceWorker(
    languageId: string,
    ...resources: Uri[]
  ): Promise<MDBWorker> {
    const client = await this._getClient(languageId);
    await this._workers[languageId].withSyncedResources(resources);
    return client;
  }

  // disposes everything
  dispose(): void {
    this._stopWorkers();
  }

  // creates a web worker or uses the one cached given a languageId
  async _getClient(languageId: string): Promise<MDBWorker> {
    if (!(languageId in this._clients)) {
      this._workers[languageId] = await editor.createWebWorker({
        moduleId: "",
        label: languageId,
        createData: {
          languageId,
        },
      });

      this._clients[languageId] = this._workers[languageId].getProxy();
    }

    return await this._clients[languageId];
  }

  // stop all workers
  _stopWorkers(): void {
    for (const languageId in this._workers) {
      this._workers[languageId].dispose();
      delete this._workers[languageId];
    }
  }
}
