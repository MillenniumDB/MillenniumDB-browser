// this file handles the initialization of monaco editor
// DO NOT CHANGE IMPORT ORDER

import * as monaco from "monaco-editor";

import EditorWorkerModule from "monaco-editor/esm/vs/editor/editor.worker?worker";
import MDBWorkerModule from "./mdb.worker?worker";

import { MDBWorkerManager } from "./mdb-worker-manager";
import { MDBDiagnosticsAdapter } from "./mdb-diagnostics-adapter";

import { loader } from "@monaco-editor/react";

import {
  CustomMonacoDarkTheme,
  CustomMonacoLightTheme,
} from "@/theme/custom-monaco-theme";

loader.config({ monaco }); // use our local monaco instead of fetching the CDN

self.MonacoEnvironment = {
  getWorker(_workerId, label) {
    switch (label) {
      case "gql":
      case "mql":
      case "sparql":
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

monaco.languages.register({ id: "gql" });
monaco.languages.onLanguage("gql", () => {});

monaco.languages.register({ id: "mql" });
monaco.languages.onLanguage("mql", () => {});

monaco.languages.register({ id: "sparql" });
monaco.languages.onLanguage("sparql", () => {});

monaco.editor.defineTheme("mdb-light", CustomMonacoLightTheme);
monaco.editor.defineTheme("mdb-dark", CustomMonacoDarkTheme);
