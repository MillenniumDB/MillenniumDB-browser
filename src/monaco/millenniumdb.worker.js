/* eslint-disable no-restricted-globals */
import * as worker from 'monaco-editor-core/esm/vs/editor/editor.worker';
import MillenniumDBWorker from './millenniumdb-worker';

self.onmessage = () => {
  worker.initialize(
    (ctx, createData) => new MillenniumDBWorker(ctx, createData)
  );
};
