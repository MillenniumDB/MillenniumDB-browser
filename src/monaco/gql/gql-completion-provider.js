const keywords = [
  'ACYCLIC',
  'AND',
  'ANGULAR',
  'ANY',
  'AVG',
  'ALL',
  'AS',
  'ASC',
  'BY',
  'BOOL',
  'COUNT',
  'CREATE',
  'DESCRIBE',
  'DESC',
  'DIMENSIONS',
  'DISTINCT',
  'EDGE',
  'EUCLIDEAN',
  'FROM',
  'INCOMING',
  'INSERT',
  'INTEGER',
  'INTO',
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
  'OBJECTS',
  'OPTIONAL',
  'ORDER',
  'OR',
  'OUTGOING',
  'PROPERTIES',
  'PROPERTY',
  'NOT',
  'NULL',
  'SHORTEST',
  'SIMPLE',
  'RETURN',
  'SET',
  'SUM',
  'STORE',
  'STRING',
  'TENSOR',
  'TENSOR_DISTANCE',
  'TRAILS',
  'VALUES',
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

const GQLCompletionProvider = {
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

export default GQLCompletionProvider;
