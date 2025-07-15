import { editor, MarkerSeverity } from "monaco-editor";
import type { IDisposable, Uri } from "monaco-editor";
import type { MDBWorker } from "./mdb-worker";

// handles the logic with models and validators
export class MDBDiagnosticsAdapter {
  static VALIDATION_TIMEOUT_MS = 100;

  private _workerAccessor: (
    languageId: string,
    ...uris: Uri[]
  ) => Promise<MDBWorker>;
  private _disposables: IDisposable[];
  private _listener: Record<string, IDisposable>;

  constructor(
    workerAccessor: (languageId: string, ...uris: Uri[]) => Promise<MDBWorker>,
  ) {
    this._workerAccessor = workerAccessor;
    this._disposables = [];
    this._listener = {};

    // binds validator to a new model with certain timeout
    const onModelAdd = (model: editor.IModel) => {
      let handle: ReturnType<typeof setTimeout>;
      this._listener[model.uri.toString()] = model.onDidChangeContent(() => {
        clearTimeout(handle);
        handle = setTimeout(
          () => this._doValidate(model.uri),
          MDBDiagnosticsAdapter.VALIDATION_TIMEOUT_MS,
        );
      });

      this._doValidate(model.uri);
    };

    // removes validator from a removed model
    const onModelRemoved = (model: editor.IModel) => {
      editor.setModelMarkers(model, "owner", []);

      const uriStr: string = model.uri.toString();
      const listener = this._listener[uriStr];
      if (listener) {
        listener.dispose();
        delete this._listener[uriStr];
      }
    };

    // validates immediately after language change
    const onModelLanguageChange = ({
      model,
    }: {
      model: editor.IModel;
      oldLanguage: string;
    }) => {
      this._doValidate(model.uri);
    };

    this._disposables.push(editor.onDidCreateModel(onModelAdd));
    this._disposables.push(editor.onWillDisposeModel(onModelRemoved));
    this._disposables.push(
      editor.onDidChangeModelLanguage(onModelLanguageChange),
    );
    this._disposables.push({
      dispose: () => {
        for (const key in this._listener) {
          this._listener[key].dispose();
        }
      },
    });

    editor.getModels().forEach(onModelAdd);
  }

  // dispose everything
  dispose(): void {
    this._disposables.forEach((d) => d && d.dispose());
    this._disposables = [];
  }

  // do validation using the model's languageId
  async _doValidate(resource: Uri): Promise<void> {
    const model = editor.getModel(resource);
    if (!model) return;

    const worker = await this._workerAccessor(model.getLanguageId(), resource);
    const parsingErrors = await worker.doValidation(resource);

    const markers: editor.IMarkerData[] = parsingErrors.map((err) => ({
      startLineNumber: err.line,
      endLineNumber: err.line,
      startColumn: err.column + 1,
      endColumn: err.column + (err.stop - err.start) + 2,
      severity: MarkerSeverity.Error,
      message: err.msg,
    }));

    editor.setModelMarkers(model, "root", markers);
  }
}
