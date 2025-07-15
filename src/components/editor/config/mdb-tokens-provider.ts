import { languages } from "monaco-editor";
import { CharStream, Lexer, Token } from "antlr4";
import MQL_Lexer from "@/grammar/mql/MQL_Lexer";
import GQLLexer from "@/grammar/gql/GQLLexer";
import SparqlQueryLexer from "@/grammar/sparql/SparqlQueryLexer";
import { GQLTokenToScopes, MQLTokenToScopes, SPARQLTokenToScopes, type TokenToScopes } from "./mdb-token-to-scopes";

class MDBState implements languages.IState {
  clone(): MDBState {
    return this;
  }

  equals(): boolean {
    return true;
  }
}

export class MDBTokensProvider implements languages.TokensProvider {
  private _lexerFactory: typeof Lexer;
  private _tokenToScopes: TokenToScopes;

  constructor(languageId: string) {
    switch (languageId) {
      case "gql": {
        this._lexerFactory = GQLLexer;
        this._tokenToScopes = GQLTokenToScopes;

        break;
      }
      case "mql": {
        this._lexerFactory = MQL_Lexer;
        this._tokenToScopes = MQLTokenToScopes;
        break;
      }
      case "sparql": {
        this._lexerFactory = SparqlQueryLexer;
        this._tokenToScopes = SPARQLTokenToScopes;
        break;
      }
      default:
        throw new Error(`Unhandled languageId: ${languageId}`);
    }
  }

  getInitialState(): MDBState {
    return new MDBState();
  }

  tokenize(line: string): languages.ILineTokens {
    const charStream = new CharStream(line);
    const lexer = new this._lexerFactory(charStream);

    return {
      endState: new MDBState(),
      tokens: lexer
        .getAllTokens()
        .filter((token: Token) => token !== null && token.type !== Token.EOF)
        .sort((a: Token, b: Token) => a.column - b.column)
        .map((token: Token) => ({
          scopes: this._tokenToScopes(token),
          startIndex: token.column,
        })),
    };
  }
}
