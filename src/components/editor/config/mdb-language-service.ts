// import antlr4 from "antlr4";
import { type Lexer, type Parser, CharStream, CommonTokenStream } from "antlr4";

import { QueryErrorListener, type ParsingError } from "./query-error-listener";

import GQLLexer from "@/grammar/gql/GQLLexer";
import GQLParser from "@/grammar/gql/GQLParser";
import MQL_Lexer from "@/grammar/mql/MQL_Lexer";
import MQL_Parser from "@/grammar/mql/MQL_Parser";
import SparqlQueryLexer from "@/grammar/sparql/SparqlQueryLexer";
import SparqlQueryParser from "@/grammar/sparql/SparqlQueryParser";

// sets up the language serivce given a languageId
export class MDBLanguageService {
  private _lexerFactory: typeof Lexer;
  private _parserFactory: typeof Parser;
  private _rootAccessor: string;

  constructor(languageId: string) {
    // bind factories and accessors
    switch (languageId) {
      case "gql": {
        this._lexerFactory = GQLLexer;
        this._parserFactory = GQLParser;
        this._rootAccessor = "root";
        break;
      }
      case "mql": {
        this._lexerFactory = MQL_Lexer;
        this._parserFactory = MQL_Parser;
        this._rootAccessor = "root";
        break;
      }
      case "sparql": {
        this._lexerFactory = SparqlQueryLexer;
        this._parserFactory = SparqlQueryParser;
        this._rootAccessor = "query";
        break;
      }
      default:
        throw new Error(`Unhandled languageId: ${languageId}`);
    }
  }

  // validate the document from the parser's root
  doValidation(document: string): ParsingError[] {
    const queryErrorListener = new QueryErrorListener();
    const charStream = new CharStream(document);
    const lexer = new this._lexerFactory(charStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(queryErrorListener);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new this._parserFactory(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(queryErrorListener);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (parser as any)[this._rootAccessor]();
    return queryErrorListener.parsingErrors;
  }
}
