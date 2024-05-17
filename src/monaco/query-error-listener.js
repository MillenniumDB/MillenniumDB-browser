import antlr4 from 'antlr4';

export default class QueryErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this._errors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    const { start, stop } = offendingSymbol || {};
    this._errors.push({
      startLineNumber: line,
      endLineNumber: line,
      startColumn: column,
      endColumn: column + (stop - start) + 2,
      message: msg,
      // WebWorkers cannot import monaco right now, so we use 3 === monaco.MarkerSeverity.Error
      severity: 3,
    });
  }

  getErrors() {
    return this._errors;
  }
}
