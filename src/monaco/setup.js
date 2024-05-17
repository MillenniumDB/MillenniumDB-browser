/* eslint-disable no-restricted-globals */
import * as monaco from 'monaco-editor-core';
import EditorWorkerModule from 'monaco-editor-core/esm/vs/editor/editor.worker?worker';
import { MillenniumDBDark, MillenniumDBLight } from './millenniumdb-themes';
import MillenniumDBWorkerManager from './millenniumdb-worker-manager';
import MillenniumDBWorkerModule from './millenniumdb.worker?worker';
import MillenniumDBDiagnosticsAdapter from './millenniumdb-diagnostics-adapter';

import * as MQL from './mql/mql-language';
import * as SPARQL from './sparql/sparql-language';

export function setupLanguages() {
  self.MonacoEnvironment = {
    getWorker: (workerId, label) => {
      switch (label) {
        case MQL.id:
        case SPARQL.id:
          return MillenniumDBWorkerModule();
        default:
          return EditorWorkerModule();
      }
    },
  };

  monaco.editor.defineTheme('millenniumdb-dark', MillenniumDBDark);
  monaco.editor.defineTheme('millenniumdb-light', MillenniumDBLight);

  const client = new MillenniumDBWorkerManager();
  const workerAccessor = (languageId, ...uris) =>
    client.getLanguageServiceWorker(languageId, ...uris);
  new MillenniumDBDiagnosticsAdapter(workerAccessor);

  monaco.languages.register({ id: MQL.id });
  monaco.languages.onLanguage(MQL.id, () => {
    monaco.languages.setLanguageConfiguration(MQL.id, MQL.configuration);
    monaco.languages.setTokensProvider(MQL.id, MQL.tokensProvider);
  });

  monaco.languages.register({ id: SPARQL.id });
  monaco.languages.onLanguage(SPARQL.id, () => {
    monaco.languages.setLanguageConfiguration(SPARQL.id, SPARQL.configuration);
    monaco.languages.setTokensProvider(SPARQL.id, SPARQL.tokensProvider);
  });
}
