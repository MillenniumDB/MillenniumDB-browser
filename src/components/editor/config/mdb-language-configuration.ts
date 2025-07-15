import { languages } from "monaco-editor";

const GQLLanguageConfiguration: languages.LanguageConfiguration = {
  comments: {
    lineComment: "//",
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ],

  autoClosingPairs: [
    { open: '"', close: '"', notIn: ["string"] },
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
  ],
};

const MQLLanguageConfiguration: languages.LanguageConfiguration = {
  comments: {
    lineComment: "//",
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ],

  autoClosingPairs: [
    { open: '"', close: '"', notIn: ["string"] },
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
  ],
};

const SPARQLLanguageConfiguration: languages.LanguageConfiguration = {
  comments: {
    lineComment: "#",
  },

  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ],

  autoClosingPairs: [
    { open: "'", close: "'", notIn: ["string"] },
    { open: '"', close: '"', notIn: ["string"] },
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
  ],
};

export {
  GQLLanguageConfiguration,
  MQLLanguageConfiguration,
  SPARQLLanguageConfiguration,
};
