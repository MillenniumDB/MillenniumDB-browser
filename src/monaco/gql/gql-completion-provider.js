const keywords = [
  'ACYCLIC',
  'AND',
  'ANY',
  'AVG',
  'ALL',
  'AS',
  'ASC',
  'BY',
  'BOOL',
  'COUNT',
  'CREATE',
  'DESC',
  'DISTINCT',
  'EDGE',
  'FROM',
  'INSERT',
  'INTEGER',
  'IS',
  'FILTER',
  'FLOAT',
  'GROUP',
  'LABELS',
  'LABEL',
  'LIMIT',
  'MATCH',
  'MAX',
  'MIN',
  'OFFSET',
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
  'TRAIL',
  'WALK',
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
