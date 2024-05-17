import SPARQLTokensProvider from './sparql-tokens-provider';

export const id = 'sparql';

export const configuration = {
  comments: {
    lineComment: '#',
  },

  brackets: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
  ],

  autoClosingPairs: [
    { open: "'", close: "'", notIn: ['string'] },
    { open: '"', close: '"', notIn: ['string'] },
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
  ],
};

export const tokensProvider = new SPARQLTokensProvider();