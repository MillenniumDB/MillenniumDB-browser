declare module "monaco-editor/esm/vs/editor/editor.worker" {
  import { worker } from "monaco-editor";

  export function initialize(
    callback: (ctx: worker.IWorkerContext, createData: unknown) => unknown,
  ): void;
}
