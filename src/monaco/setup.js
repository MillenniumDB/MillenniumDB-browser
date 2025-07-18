/* eslint-disable no-restricted-globals */
import * as monaco from 'monaco-editor-core';
import EditorWorkerModule from 'monaco-editor-core/esm/vs/editor/editor.worker?worker';
import { MillenniumDBDark, MillenniumDBLight } from './millenniumdb-themes';
import MillenniumDBWorkerManager from './millenniumdb-worker-manager';
import MillenniumDBWorkerModule from './millenniumdb.worker?worker';
import MillenniumDBDiagnosticsAdapter from './millenniumdb-diagnostics-adapter';

import * as MQL from './mql/mql-language';
import * as SPARQL from './sparql/sparql-language';
import * as GQL from './gql/gql-language';

export function setupLanguages() {
  self.MonacoEnvironment = {
    getWorker: (workerId, label) => {
      switch (label) {
        case MQL.id:
        case SPARQL.id:
        case GQL.id:
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
    monaco.languages.registerCompletionItemProvider(
      MQL.id,
      MQL.completionProvider
    );
  });

  monaco.languages.register({ id: SPARQL.id });
  monaco.languages.onLanguage(SPARQL.id, () => {
    monaco.languages.setLanguageConfiguration(SPARQL.id, SPARQL.configuration);
    monaco.languages.setTokensProvider(SPARQL.id, SPARQL.tokensProvider);
    monaco.languages.registerCompletionItemProvider(
      SPARQL.id,
      SPARQL.completionProvider
    );
  });

  monaco.languages.register({ id: GQL.id });
  monaco.languages.onLanguage(GQL.id, () => {
    monaco.languages.setLanguageConfiguration(GQL.id, GQL.configuration);
    monaco.languages.setTokensProvider(GQL.id, GQL.tokensProvider);
    monaco.languages.registerCompletionItemProvider(
      GQL.id,
      GQL.completionProvider
    );
  });
}
