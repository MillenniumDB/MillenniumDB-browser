import antlr4 from 'antlr4';
import MQLLexer from '../../grammar/mql/MQLLexer';

function antlr4TokenToMonacoToken(token) {
  switch (token.type) {
    case MQLLexer.SINGLE_LINE_COMMENT:
      return 'comment';
    case MQLLexer.STRING:
      return 'string';
    case MQLLexer.UNSIGNED_INTEGER:
    case MQLLexer.UNSIGNED_FLOAT:
      return 'number';
    case MQLLexer.VARIABLE:
    case MQLLexer.TYPE_VAR:
    case MQLLexer.ANON_ID:
    case MQLLexer.EDGE_ID:
      return 'variable';
    case MQLLexer.TYPE:
      return 'type';
    case MQLLexer.K_FALSE:
    case MQLLexer.K_TRUE:
      return 'boolean';
    case MQLLexer.LEQ:
    case MQLLexer.GEQ:
    case MQLLexer.EQ:
    case MQLLexer.NEQ:
    case MQLLexer.LT:
    case MQLLexer.GT:
    case MQLLexer.SINGLE_EQ:
    case MQLLexer.PATH_SEQUENCE:
    case MQLLexer.PATH_ALTERNATIVE:
    case MQLLexer.PATH_NEGATION:
    case MQLLexer.STAR:
    case MQLLexer.PERCENT:
    case MQLLexer.QUESTION_MARK:
    case MQLLexer.PLUS:
    case MQLLexer.MINUS:
      return 'operator';
    case MQLLexer.K_ACYCLIC:
    case MQLLexer.K_AND:
    case MQLLexer.K_ANGULAR:
    case MQLLexer.K_ANY:
    case MQLLexer.K_AVG:
    case MQLLexer.K_ALL:
    case MQLLexer.K_AS:
    case MQLLexer.K_ASC:
    case MQLLexer.K_BY:
    case MQLLexer.K_BOOL:
    case MQLLexer.K_COUNT:
    case MQLLexer.K_CREATE:
    case MQLLexer.K_DESCRIBE:
    case MQLLexer.K_DESC:
    case MQLLexer.K_DIMENSIONS:
    case MQLLexer.K_DISTINCT:
    case MQLLexer.K_EDGE:
    case MQLLexer.K_EUCLIDEAN:
    case MQLLexer.K_FROM:
    case MQLLexer.K_INCOMING:
    case MQLLexer.K_INSERT:
    case MQLLexer.K_INTEGER:
    case MQLLexer.K_INTO:
    case MQLLexer.K_IS:
    case MQLLexer.K_FLOAT:
    case MQLLexer.K_GROUP:
    case MQLLexer.K_LABELS:
    case MQLLexer.K_LABEL:
    case MQLLexer.K_LIMIT:
    case MQLLexer.K_MANHATTAN:
    case MQLLexer.K_MATCH:
    case MQLLexer.K_MAX:
    case MQLLexer.K_MIN:
    case MQLLexer.K_OBJECTS:
    case MQLLexer.K_OPTIONAL:
    case MQLLexer.K_ORDER:
    case MQLLexer.K_OR:
    case MQLLexer.K_OUTGOING:
    case MQLLexer.K_PROPERTIES:
    case MQLLexer.K_PROPERTY:
    case MQLLexer.K_NOT:
    case MQLLexer.K_NULL:
    case MQLLexer.K_SHORTEST:
    case MQLLexer.K_SIMPLE:
    case MQLLexer.K_RETURN:
    case MQLLexer.K_SET:
    case MQLLexer.K_SUM:
    case MQLLexer.K_STORE:
    case MQLLexer.K_STRING:
    case MQLLexer.K_TENSOR:
    case MQLLexer.K_TENSOR_DISTANCE:
    case MQLLexer.K_TRAILS:
    case MQLLexer.K_VALUES:
    case MQLLexer.K_WALKS:
    case MQLLexer.K_WHERE:
      return 'keyword';
    default:
      return '';
  }
}

class MQLTokensProviderState {
  clone() {
    return new MQLTokensProviderState();
  }

  equals(other) {
    return true;
  }
}

class MQLTokensProvider {
  getInitialState() {
    return new MQLTokensProviderState();
  }

  tokenize(line, state) {
    const inputStream = new antlr4.InputStream(line);
    const lexer = new MQLLexer(inputStream);

    return {
      endState: new MQLTokensProviderState(),
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

export default MQLTokensProvider;
