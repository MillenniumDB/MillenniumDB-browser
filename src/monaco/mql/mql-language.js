import MQLCompletionProvider from './mql-completion-provider';
import MQLTokensProvider from './mql-tokens-provider';

export const id = 'mql';

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

export const tokensProvider = new MQLTokensProvider();

export const completionProvider = MQLCompletionProvider;
