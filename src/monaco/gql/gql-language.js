import GQLCompletionProvider from './gql-completion-provider';
import GQLTokensProvider from './gql-tokens-provider';

export const id = 'gql';

export const configuration = {
  comments: {
    lineComment: '//',
  },

  brackets: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
  ],

  autoClosingPairs: [
    { open: '"', close: '"', notIn: ['string'] },
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
  ],
};

export const tokensProvider = new GQLTokensProvider();

export const completionProvider = GQLCompletionProvider;
