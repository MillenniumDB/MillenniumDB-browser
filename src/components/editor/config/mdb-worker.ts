import type { worker, Uri } from "monaco-editor";
import { MDBLanguageService } from "./mdb-language-service";
import type { ParsingError } from "./query-error-listener";

export type MDBWorkerCreateData = {
  languageId: string;
};

// MDB worker instance
export class MDBWorker {
  private _ctx: worker.IWorkerContext;
  private _languageService: MDBLanguageService;

  constructor(ctx: worker.IWorkerContext, createData: MDBWorkerCreateData) {
    const { languageId } = createData;

    this._ctx = ctx;
    this._languageService = new MDBLanguageService(languageId);
  }

  doValidation(uri: Uri): Promise<ParsingError[]> {
    const document = this._getTextDocument(uri);
    if (document) {
      return Promise.resolve(this._languageService.doValidation(document));
    }
    return Promise.resolve([]);
  }

  _getTextDocument(uri: Uri): string | null {
    const models = this._ctx.getMirrorModels();
    for (const model of models) {
      if (model.uri.path === uri.path) {
        return model.getValue();
      }
    }
    return null;
  }
}
