import { ErrorListener, Token, type Recognizer } from "antlr4";

export type ParsingError = {
  line: number;
  column: number;
  start: number;
  stop: number;
  msg: string;
};

export class QueryErrorListener<TSymbol> extends ErrorListener<TSymbol> {
  private _parsingErrors: ParsingError[] = [];

  get parsingErrors(): ParsingError[] {
    return this._parsingErrors;
  }

  syntaxError(
    _recognizer: Recognizer<TSymbol>,
    offendingSymbol: TSymbol,
    line: number,
    column: number,
    msg: string,
  ): void {
    const { start, stop } = offendingSymbol as Token;
    this._parsingErrors.push({
      line,
      column,
      start,
      stop,
      msg,
    });
  }
}
