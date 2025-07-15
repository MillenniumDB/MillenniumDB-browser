declare module "@/grammar/gql/GQLLexer" {
  import type { Lexer } from "antlr4";
  export default class GQLLexer extends Lexer {}
}

declare module "@/grammar/gql/GQLParser" {
  import type { Parser } from "antlr4";
  export default class GQLParser extends Parser {}
}

declare module "@/grammar/mql/MQL_Lexer" {
  import type { Lexer } from "antlr4";
  export default class MQL_Lexer extends Lexer {}
}

declare module "@/grammar/mql/MQL_Parser" {
  import type { Parser } from "antlr4";
  export default class MQL_Parser extends Parser {}
}

declare module "@/grammar/sparql/SparqlQueryLexer" {
  import type { Lexer } from "antlr4";
  export default class SparqlQueryLexer extends Lexer {}
}

declare module "@/grammar/sparql/SparqlQueryParser" {
  import type { Parser } from "antlr4";
  export default class SparqlQueryParser extends Parser {}
}
