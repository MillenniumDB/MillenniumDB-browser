// this file handles the initialization of monaco editor
// DO NOT CHANGE IMPORT ORDER

import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

import EditorWorkerModule from "monaco-editor/esm/vs/editor/editor.worker?worker";
import MDBWorkerModule from "./mdb.worker?worker";

import { MDBWorkerManager } from "./mdb-worker-manager";
import { MDBDiagnosticsAdapter } from "./mdb-diagnostics-adapter";

import { loader } from "@monaco-editor/react";

import {
  CustomMonacoDarkTheme,
  CustomMonacoLightTheme,
} from "@/theme/custom-monaco-theme";
import { MDBTokensProvider } from "./mdb-tokens-provider";
import {
  GQLLanguageConfiguration,
  MQLLanguageConfiguration,
  SPARQLLanguageConfiguration,
} from "./mdb-language-configuration";
import { MDBCompletionProvider } from "./mdb-keyword-completion-provider";

self.MonacoEnvironment = {
  getWorker(_workerId, label) {
    switch (label) {
      case "mdb-gql":
      case "mdb-mql":
      case "mdb-sparql":
        return new MDBWorkerModule();
      default:
        return new EditorWorkerModule();
    }
  },
};

const workerManager = new MDBWorkerManager();
const workerAccessor = (languageId: string, ...uris: monaco.Uri[]) =>
  workerManager.getLanguageServiceWorker(languageId, ...uris);
new MDBDiagnosticsAdapter(workerAccessor);

monaco.languages.register({ id: "mdb-gql" });
monaco.languages.onLanguage("mdb-gql", () => {
  monaco.languages.setTokensProvider(
    "mdb-gql",
    new MDBTokensProvider("mdb-gql"),
  );
  monaco.languages.setLanguageConfiguration(
    "mdb-gql",
    GQLLanguageConfiguration,
  );
  monaco.languages.registerCompletionItemProvider(
    "mdb-gql",
    new MDBCompletionProvider("mdb-gql"),
  );
});

monaco.languages.register({ id: "mdb-mql" });
monaco.languages.onLanguage("mdb-mql", () => {
  monaco.languages.setTokensProvider(
    "mdb-mql",
    new MDBTokensProvider("mdb-mql"),
  );
  monaco.languages.setLanguageConfiguration(
    "mdb-mql",
    MQLLanguageConfiguration,
  );
  monaco.languages.registerCompletionItemProvider(
    "mdb-mql",
    new MDBCompletionProvider("mdb-mql"),
  );
});

monaco.languages.register({ id: "mdb-sparql" });
monaco.languages.onLanguage("mdb-sparql", () => {
  monaco.languages.setTokensProvider(
    "mdb-sparql",
    new MDBTokensProvider("mdb-sparql"),
  );
  monaco.languages.setLanguageConfiguration(
    "mdb-sparql",
    SPARQLLanguageConfiguration,
  );
  monaco.languages.registerCompletionItemProvider(
    "mdb-sparql",
    new MDBCompletionProvider("mdb-sparql"),
  );
});

monaco.editor.defineTheme("mdb-light", CustomMonacoLightTheme);
monaco.editor.defineTheme("mdb-dark", CustomMonacoDarkTheme);

loader.config({ monaco }); // use our local monaco instead of fetching the CDN
