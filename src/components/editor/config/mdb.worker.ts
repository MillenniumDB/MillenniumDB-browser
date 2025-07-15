import type { worker } from "monaco-editor";
import { initialize } from "monaco-editor/esm/vs/editor/editor.worker";
import { MDBWorker, type MDBWorkerCreateData } from "./mdb-worker";

self.onmessage = () => {
  initialize((ctx: worker.IWorkerContext, createData: unknown) => {
    return new MDBWorker(ctx, createData as MDBWorkerCreateData);
  });
};
