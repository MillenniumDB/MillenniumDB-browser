// this file handles the initialization of monaco editor

import { loader } from "@monaco-editor/react";

import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";

self.MonacoEnvironment = {
  getWorker() {
    return new editorWorker();
  },
};

loader.config({ monaco }); // use our local monaco instead of fetching the CDN
