const keywords = [
  'ACYCLIC',
  'AND',
  'ANGULAR',
  'ANY',
  'AVG',
  'ALL',
  'ASC',
  'BY',
  'BOOL',
  'COUNT',
  'DESCRIBE',
  'DESC',
  'DISTINCT',
  'EDGE',
  'EUCLIDEAN',
  'INCOMING',
  'INSERT',
  'INTEGER',
  'IS',
  'FLOAT',
  'GROUP',
  'LABELS',
  'LABEL',
  'LIMIT',
  'MANHATTAN',
  'MATCH',
  'MAX',
  'MIN',
  'OPTIONAL',
  'ORDER',
  'OR',
  'OUTGOING',
  'PROJECT_SIMILARITY',
  'PROPERTIES',
  'PROPERTY',
  'NOT',
  'NULL',
  'SHORTEST',
  'SIMPLE',
  'RETURN',
  'SET',
  'SIMILARITY_SEARCH',
  'SUM',
  'STRING',
  'TRAILS',
  'WALKS',
  'WHERE',
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
