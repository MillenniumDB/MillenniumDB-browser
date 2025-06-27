import antlr4 from 'antlr4';
import SPARQLLexer from '../../grammar/sparql/SPARQLLexer';

function antlr4TokenToMonacoToken(token) {
  switch (token.type) {
    case SPARQLLexer.COMMENT:
      return 'comment';
    case SPARQLLexer.PNAME_NS:
    case SPARQLLexer.PNAME_LN:
    case SPARQLLexer.BLANK_NODE_LABEL:
      return 'type';
    case SPARQLLexer.IRIREF:
    case SPARQLLexer.A:
      return 'uri';
    case SPARQLLexer.LANGTAG:
      return 'langtag';
    case SPARQLLexer.K_FALSE:
    case SPARQLLexer.K_TRUE:
      return 'boolean';
    case SPARQLLexer.VAR1:
    case SPARQLLexer.VAR2:
      return 'variable';
    case SPARQLLexer.STRING_LITERAL1:
    case SPARQLLexer.STRING_LITERAL2:
    case SPARQLLexer.STRING_LITERAL_LONG1:
    case SPARQLLexer.STRING_LITERAL_LONG2:
      return 'string';
    case SPARQLLexer.DECIMAL_NEGATIVE:
    case SPARQLLexer.DECIMAL_POSITIVE:
    case SPARQLLexer.DECIMAL:
    case SPARQLLexer.DOUBLE_NEGATIVE:
    case SPARQLLexer.DOUBLE_POSITIVE:
    case SPARQLLexer.DOUBLE:
    case SPARQLLexer.INTEGER_NEGATIVE:
    case SPARQLLexer.INTEGER_POSITIVE:
    case SPARQLLexer.INTEGER:
      return 'number';
    case SPARQLLexer.FALSE:
    case SPARQLLexer.TRUE:
      return 'boolean';
    case SPARQLLexer.AND:
    case SPARQLLexer.ASTERISK:
    case SPARQLLexer.DIVIDE:
    case SPARQLLexer.EQUAL:
    case SPARQLLexer.GREATER_EQUAL:
    case SPARQLLexer.GREATER:
    case SPARQLLexer.INVERSE:
    case SPARQLLexer.LESS_EQUAL:
    case SPARQLLexer.LESS:
    case SPARQLLexer.MINUS_SIGN:
    case SPARQLLexer.NEGATION:
    case SPARQLLexer.NOT_EQUAL:
    case SPARQLLexer.OR:
    case SPARQLLexer.PIPE:
    case SPARQLLexer.PLUS_SIGN:
    case SPARQLLexer.QUESTION_MARK:
    case SPARQLLexer.REFERENCE:
      return 'operator';
    case SPARQLLexer.ACYCLIC:
    case SPARQLLexer.ALL:
    case SPARQLLexer.ANY:
    case SPARQLLexer.AS:
    case SPARQLLexer.ASC:
    case SPARQLLexer.ASK:
    case SPARQLLexer.BASE:
    case SPARQLLexer.BINDINGS:
    case SPARQLLexer.BY:
    case SPARQLLexer.CONSTRUCT:
    case SPARQLLexer.DESC:
    case SPARQLLexer.DESCRIBE:
    case SPARQLLexer.DISTINCT:
    case SPARQLLexer.FILTER:
    case SPARQLLexer.FROM:
    case SPARQLLexer.GRAPH:
    case SPARQLLexer.GROUP:
    case SPARQLLexer.HAVING:
    case SPARQLLexer.INDEX:
    case SPARQLLexer.LIMIT:
    case SPARQLLexer.MINUS:
    case SPARQLLexer.NAMED:
    case SPARQLLexer.OFFSET:
    case SPARQLLexer.OPTIONAL:
    case SPARQLLexer.ORDEDR:
    case SPARQLLexer.PREFIX:
    case SPARQLLexer.REDUCED:
    case SPARQLLexer.SELECT:
    case SPARQLLexer.SERVICE:
    case SPARQLLexer.SHORTEST:
    case SPARQLLexer.SHOW:
    case SPARQLLexer.SILENT:
    case SPARQLLexer.SIMPLE:
    case SPARQLLexer.UNDEF:
    case SPARQLLexer.UNION:
    case SPARQLLexer.VALUES:
    case SPARQLLexer.WALKS:
    case SPARQLLexer.WHERE:
      return 'keyword';
    case SPARQLLexer.ABS:
    case SPARQLLexer.AVG:
    case SPARQLLexer.BIND:
    case SPARQLLexer.BNODE:
    case SPARQLLexer.BOUND:
    case SPARQLLexer.CEIL:
    case SPARQLLexer.COALESCE:
    case SPARQLLexer.CONCAT:
    case SPARQLLexer.CONTAINS:
    case SPARQLLexer.COUNT:
    case SPARQLLexer.DATATYPE:
    case SPARQLLexer.DAY:
    case SPARQLLexer.ENCODE_FOR_URI:
    case SPARQLLexer.EXISTS:
    case SPARQLLexer.FLOOR:
    case SPARQLLexer.GROUP_CONCAT:
    case SPARQLLexer.HOURS:
    case SPARQLLexer.IF:
    case SPARQLLexer.IN:
    case SPARQLLexer.IRI:
    case SPARQLLexer.ISBLANK:
    case SPARQLLexer.ISIRI:
    case SPARQLLexer.ISLITERAL:
    case SPARQLLexer.ISNUMERIC:
    case SPARQLLexer.ISURI:
    case SPARQLLexer.LANG:
    case SPARQLLexer.LANGMATCHES:
    case SPARQLLexer.LCASE:
    case SPARQLLexer.MAX:
    case SPARQLLexer.MD5:
    case SPARQLLexer.MIN:
    case SPARQLLexer.MINUTES:
    case SPARQLLexer.MONTH:
    case SPARQLLexer.NOT:
    case SPARQLLexer.NOW:
    case SPARQLLexer.RAND:
    case SPARQLLexer.REGEX:
    case SPARQLLexer.REPLACE:
    case SPARQLLexer.ROUND:
    case SPARQLLexer.SAMETERM:
    case SPARQLLexer.SAMPLE:
    case SPARQLLexer.SECONDS:
    case SPARQLLexer.SEPARATOR:
    case SPARQLLexer.SHA1:
    case SPARQLLexer.SHA256:
    case SPARQLLexer.SHA384:
    case SPARQLLexer.SHA512:
    case SPARQLLexer.STR:
    case SPARQLLexer.STRAFTER:
    case SPARQLLexer.STRBEFORE:
    case SPARQLLexer.STRDT:
    case SPARQLLexer.STRENDS:
    case SPARQLLexer.STRLANG:
    case SPARQLLexer.STRLEN:
    case SPARQLLexer.STRSTARTS:
    case SPARQLLexer.STRUUID:
    case SPARQLLexer.SUBSTR:
    case SPARQLLexer.SUM:
    case SPARQLLexer.TIMEZONE:
    case SPARQLLexer.TZ:
    case SPARQLLexer.UCASE:
    case SPARQLLexer.URI:
    case SPARQLLexer.UUID:
    case SPARQLLexer.YEAR:
      return 'function';
    default:
      return '';
  }
}

class SPARQLTokensProviderState {
  clone() {
    return new SPARQLTokensProviderState();
  }

  equals(other) {
    return true;
  }
}

class SPARQLTokensProvider {
  getInitialState() {
    return new SPARQLTokensProviderState();
  }

  tokenize(line, state) {
    const inputStream = new antlr4.InputStream(line);
    const lexer = new SPARQLLexer(inputStream);

    return {
      endState: new SPARQLTokensProviderState(),
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

export default SPARQLTokensProvider;
