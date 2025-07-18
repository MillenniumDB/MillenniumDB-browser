const keywords = [
  // literal
  'false',
  'true',
  // function
  'AND',
  'OR',
  // keyword
  'ACYCLIC',
  'ALL',
  'ANY',
  'AS',
  'ASC',
  'ASK',
  'BASE',
  'BINDINGS',
  'BY',
  'CONSTRUCT',
  'DESC',
  'DESCRIBE',
  'DISTINCT',
  'FILTER',
  'FROM',
  'GRAPH',
  'GROUP',
  'HAVING',
  'INDEX',
  'LIMIT',
  'MINUS',
  'NAMED',
  'OFFSET',
  'OPTIONAL',
  'ORDEDR',
  'PREFIX',
  'REDUCED',
  'SELECT',
  'SERVICE',
  'SHORTEST',
  'SHOW',
  'SILENT',
  'SIMPLE',
  'UNDEF',
  'UNION',
  'VALUES',
  'WALKS',
  'WHERE',
  // function
  'ABS',
  'AVG',
  'BIND',
  'BNODE',
  'BOUND',
  'CEIL',
  'COALESCE',
  'CONCAT',
  'CONTAINS',
  'COUNT',
  'DATATYPE',
  'DAY',
  'ENCODE_FOR_URI',
  'EXISTS',
  'FLOOR',
  'GROUP_CONCAT',
  'HOURS',
  'IF',
  'IN',
  'IRI',
  'ISBLANK',
  'ISIRI',
  'ISLITERAL',
  'ISNUMERIC',
  'ISURI',
  'LANG',
  'LANGMATCHES',
  'LCASE',
  'MAX',
  'MD5',
  'MIN',
  'MINUTES',
  'MONTH',
  'NOT',
  'NOW',
  'RAND',
  'REGEX',
  'REPLACE',
  'ROUND',
  'SAMETERM',
  'SAMPLE',
  'SECONDS',
  'SEPARATOR',
  'SHA1',
  'SHA256',
  'SHA384',
  'SHA512',
  'STR',
  'STRAFTER',
  'STRBEFORE',
  'STRDT',
  'STRENDS',
  'STRLANG',
  'STRLEN',
  'STRSTARTS',
  'STRUUID',
  'SUBSTR',
  'SUM',
  'TIMEZONE',
  'TZ',
  'UCASE',
  'URI',
  'UUID',
  'YEAR',
];

function createSuggestions(range) {
  return keywords.map((kw) => ({
    label: kw,
    // Cannot import monaco here right now, so we use 17 === monaco.languages.CompletionItemKind.Keyword
    kind: 17,
    insertText: kw,
    range,
  }));
}

const SPARQLCompletionProvider = {
  provideCompletionItems: (model, position) => {
    const word = model.getWordUntilPosition(position);
    const range = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn,
    };
    return {
      suggestions: createSuggestions(range),
    };
  },
};

export default SPARQLCompletionProvider;
