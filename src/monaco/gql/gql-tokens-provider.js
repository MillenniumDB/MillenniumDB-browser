import antlr4 from 'antlr4';
import GQLLexer from '../../grammar/gql/GQLLexer';

function antlr4TokenToMonacoToken(token) {
  switch (token.type) {
    case GQLLexer.COMMENT:
    case GQLLexer.Comment:
    case GQLLexer.SIMPLE_COMMENT:
    case GQLLexer.SIMPLE_COMMENT_INTRODUCER:
    case GQLLexer.SIMPLE_COMMENT_CHARACTER:
    case GQLLexer.BRACKETED_COMMENT:
    case GQLLexer.BRACKETED_COMMENT_INTRODUCER:
    case GQLLexer.BRACKETED_COMMENT_TERMINATOR:
    case GQLLexer.BRACKETED_COMMENT_CONTENTS:
      return "comment";
    case GQLLexer.VARIABLE:
    case GQLLexer.REGULAR_IDENTIFIER:
      return "variable";
    case GQLLexer.AMPERSAND:
    case GQLLexer.ASTERISK:
    case GQLLexer.CIRCUMFLEX:
    case GQLLexer.COLON:
    case GQLLexer.COMMA:
    case GQLLexer.DOLLAR_SIGN:
    case GQLLexer.EQUALS_OPERATOR:
    case GQLLexer.EXCLAMATION_MARK:
    case GQLLexer.MINUS_SIGN:
    case GQLLexer.PERCENT:
    case GQLLexer.PERIOD:
    case GQLLexer.PLUS_SIGN:
    case GQLLexer.QUESTION_MARK:
    case GQLLexer.REVERSE_SOLIDUS:
    case GQLLexer.SOLIDUS:
    case GQLLexer.TILDE:
    case GQLLexer.VERTICAL_BAR:
    case GQLLexer.ABS:
      return "operator";
    case GQLLexer.RIGHT_ANGLE_BRACKET:
    case GQLLexer.LEFT_BRACE:
    case GQLLexer.LEFT_BRACKET:
    case GQLLexer.LEFT_PAREN:
    case GQLLexer.LEFT_ANGLE_BRACKET:
    case GQLLexer.RIGHT_BRACE:
    case GQLLexer.RIGHT_BRACKET:
    case GQLLexer.RIGHT_PAREN:
    case GQLLexer.SEMICOLON:
    case GQLLexer.UNDERSCORE:
      return "function";
    case GQLLexer.UNSIGNED_DECIMAL_INTEGER:
    case GQLLexer.UNSIGNED_HEXADECIMAL_INTEGER:
    case GQLLexer.UNSIGNED_OCTAL_INTEGER:
    case GQLLexer.UNSIGNED_BINARY_INTEGER:
    case GQLLexer.UNSIGNED_DECIMAL_IN_SCIENTIFIC_NOTATION:
    case GQLLexer.UNSIGNED_DECIMAL_IN_COMMON_NOTATION:
      return "number";
    case GQLLexer.ACYCLIC:
    case GQLLexer.AND:
    case GQLLexer.ANY:
    case GQLLexer.AVG:
    case GQLLexer.ALL:
    case GQLLexer.ASC:
    case GQLLexer.AS:
    case GQLLexer.BY:
    case GQLLexer.BOOL:
    case GQLLexer.COUNT:
    case GQLLexer.DESCRIBE:
    case GQLLexer.DESC:
    case GQLLexer.DISTINCT:
    case GQLLexer.EDGE:
    case GQLLexer.INCOMING:
    case GQLLexer.INSERT:
    case GQLLexer.IS:
    case GQLLexer.IN:
    case GQLLexer.FILTER:
    case GQLLexer.FLOAT:
    case GQLLexer.FOR:
    case GQLLexer.GROUP:
    case GQLLexer.LABELS:
    case GQLLexer.LABEL:
    case GQLLexer.LET:
    case GQLLexer.LIMIT:
    case GQLLexer.MAX:
    case GQLLexer.MATCH:
    case GQLLexer.MIN:
    case GQLLexer.OFFSET:
    case GQLLexer.OPTIONAL:
    case GQLLexer.ORDER:
    case GQLLexer.OR:
    case GQLLexer.OUTGOING:
    case GQLLexer.PATH_LENGTH:
    case GQLLexer.PROPERTIES:
    case GQLLexer.PROPERTY:
    case GQLLexer.NOT:
    case GQLLexer.NULL:
    case GQLLexer.NULLS_LAST:
    case GQLLexer.NULLS_FIRST:
    case GQLLexer.SHORTEST:
    case GQLLexer.SIMPLE:
    case GQLLexer.RETURN:
    case GQLLexer.SET:
    case GQLLexer.SUM:
    case GQLLexer.SKIP:
    case GQLLexer.STRING:
    case GQLLexer.TRAIL:
    case GQLLexer.WHERE:
      return "keyword";
    case GQLLexer.STRING:
    case GQLLexer.DOUBLE_QUOTED_STRING_LITERAL:
    case GQLLexer.SINGLE_QUOTED_STRING_LITERAL:
    case GQLLexer.ACCENT_QUOTED_STRING_LITERAL:
    case GQLLexer.REGULAR_IDENTIFIER:
      return "string";
    default:
      return '';
  }
}

class GQLTokensProviderState {
  clone() {
    return new GQLTokensProviderState();
  }

  equals(other) {
    return true;
  }
}

class GQLTokensProvider {
  getInitialState() {
    return new GQLTokensProviderState();
  }

  tokenize(line, state) {
    const inputStream = new antlr4.InputStream(line);
    const lexer = new GQLLexer(inputStream);

    return {
      endState: new GQLTokensProviderState(),
      tokens: lexer
        .getAllTokens()
        .filter((token) => token !== null && token.type !== -1)
        .map((token) => ({
          scopes: antlr4TokenToMonacoToken(token),
          startIndex: token.column,
        }))
        .sort((a, b) => a.startIndex - b.startIndex),
    };
  }
}

export default GQLTokensProvider;
