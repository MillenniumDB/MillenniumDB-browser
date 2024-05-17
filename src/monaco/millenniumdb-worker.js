import MQLLanguageService from './mql/mql-language-service';
import SPARQLLanguageService from './sparql/sparql-language-service';

import * as MQL from './mql/mql-language';
import * as SPARQL from './sparql/sparql-language';

export default class MillenniumDBWorker {
  constructor(ctx, createData) {
    this._ctx = ctx;
    this._languageId = createData.languageId;
    switch (this._languageId) {
      case MQL.id: {
        this._languageService = new MQLLanguageService();
        break;
      }
      case SPARQL.id: {
        this._languageService = new SPARQLLanguageService();
        break;
      }
      default:
        throw new Error('Invalid language id: ' + this._languageId);
    }
  }

  doValidation(uri) {
    const document = this._getTextDocument(uri);
    if (document) {
      return Promise.resolve(this._languageService.doValidation(document));
    }
    return Promise.resolve([]);
  }

  _getTextDocument(uri) {
    let models = this._ctx.getMirrorModels();
    for (const model of models) {
      if (model.uri.toString() === uri) {
        return model.getValue();
      }
    }
    return null;
  }
}
