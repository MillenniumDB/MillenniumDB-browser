const keywords = [
  // literal
  'false',
  'true',
  // function
  'ASC',
  'AVG',
  'COSINE_DISTANCE',
  'COSINE_SIMILARITY',
  'COUNT',
  'DESC',
  'EUCLIDEAN_DISTANCE',
  'MAX',
  'MIN',
  'REGEX',
  // procedure (not in grammar)
  'HNSW_TOP_K',
  'HNSW_SCAN',
  'TEXT_SEARCH',
  // keyword
  'ACYCLIC',
  'ALL',
  'AND',
  'ANY',
  'AS',
  'BOOL',
  'BY',
  'CALL',
  'CREATE',
  'DELETE',
  'DESCRIBE',
  'DIMENSIONS',
  'DISTINCT',
  'EDGE',
  'FLOAT',
  'FROM',
  'GROUP',
  'GROUPS',
  'IDENTITY',
  'INCOMING',
  'INDEX',
  'INSERT',
  'INTEGER',
  'INTO',
  'IS',
  'LABEL',
  'LABELS',
  'LET',
  'LIMIT',
  'MATCH',
  'NOT',
  'NULL',
  'OBJECTS',
  'OFFSET',
  'OPTIONAL',
  'OR',
  'ORDER',
  'OUTGOING',
  'PREFIX',
  'PROPERTIES',
  'PROPERTY',
  'RETURN',
  'SHORTEST',
  'SHOW',
  'SIMPLE',
  'STRING',
  'SUM',
  'TEXT_SEARCH',
  'TRAILS',
  'VALUES',
  'WALKS',
  'WHERE',
  'WITH',
  'YIELD',
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

const MQLCompletionProvider = {
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

export default MQLCompletionProvider;
