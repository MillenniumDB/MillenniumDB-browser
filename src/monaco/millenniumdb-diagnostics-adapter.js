import * as monaco from 'monaco-editor-core';
import { id as MQLLanguageId } from './mql/mql-language';
import { id as SPARQLLanguageId } from './sparql/sparql-language';
import { id as GQLLanguageId } from './gql/gql-language';

export default class MillenniumDBDiagnosticsAdapter {
  static VALIDATION_TIMEOUT_MS = 200;

  constructor(workerAccessor) {
    this._workerAccessor = workerAccessor;
    this._listener = {};
    this._disposables = [];

    const onModelAdd = (model) => {
      const languageId = model.getLanguageId();
      if (languageId !== MQLLanguageId && languageId !== SPARQLLanguageId && languageId != GQLLanguageId) {
        return;
      }

      let handle;
      this._listener[model.uri.toString()] = model.onDidChangeContent(() => {
        clearTimeout(handle);
        handle = setTimeout(
          () => this._doValidate(model.uri),
          MillenniumDBDiagnosticsAdapter.VALIDATION_TIMEOUT_MS
        );
      });

      this._doValidate(model.uri);
    };

    const onModelRemoved = (model) => {
      monaco.editor.setModelMarkers(model, 'owner', []);

      let uriStr = model.uri.toString();
      let listener = this._listener[uriStr];
      if (listener) {
        listener.dispose();
        delete this._listener[uriStr];
      }
    };

    this._disposables.push(monaco.editor.onDidCreateModel(onModelAdd));
    this._disposables.push(monaco.editor.onWillDisposeModel(onModelRemoved));
    this._disposables.push(
      monaco.editor.onDidChangeModelLanguage((event) => {
        onModelRemoved(event.model);
        onModelAdd(event.model);
      })
    );
    this._disposables.push({
      dispose: () => {
        for (const key in this._listener) {
          this._listener[key].dispose();
        }
      },
    });

    monaco.editor.getModels().forEach(onModelAdd);
  }

  dispose() {
    this._disposables.forEach((d) => d && d.dispose());
    this._disposables = [];
  }

  async _doValidate(resource) {
    const model = monaco.editor.getModel(resource);
    const worker = await this._workerAccessor(model.getLanguageId(), resource);
    const errors = await worker.doValidation(resource.toString());
    monaco.editor.setModelMarkers(model, 'owner', errors);
  }
}
