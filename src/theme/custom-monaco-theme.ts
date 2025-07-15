import { type editor } from "monaco-editor";
import { theme } from "./custom-mantine-theme";

const CustomMonacoLightTheme: editor.IStandaloneThemeData = {
  base: "vs",
  inherit: true,
  colors: {
    "editor.background": "#fefefe",
  },
  rules: [
    {
      token: "comment",
      foreground: theme.other.mdbCommentLight,
      fontStyle: "italic",
    },
    {
      token: "variable",
      foreground: "#000000",
      fontStyle: "bold",
    },
    {
      token: "keyword",
      foreground: theme.other.mdbKeywordLight,
      fontStyle: "bold",
    },
    {
      token: "iri",
      foreground: theme.other.mdbIriLight,
    },
    {
      token: "iri-prefix",
      foreground: theme.other.mdbIriPrefixLight,
    },
    {
      token: "langtag",
      foreground: theme.other.mdbLangtagLight,
    },
    {
      token: "type",
      foreground: theme.other.mdbTypeLight,
    },
    {
      token: "string",
      foreground: theme.other.mdbStringLight,
    },
    {
      token: "number",
      foreground: theme.other.mdbNumericLight,
    },
    {
      token: "boolean",
      foreground: theme.other.mdbBooleanLight,
    },
    {
      token: "function",
      foreground: theme.other.mdbFunctionLight,
    },
    {
      token: "operator",
      foreground: theme.other.mdbOperatorLight,
    },
    {
      token: "null",
      foreground: theme.other.mdbNullLight,
    },
  ],
};

const CustomMonacoDarkTheme: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  colors: {
    "editor.background": "#1f1f1f",
  },
  rules: [
    {
      token: "comment",
      foreground: theme.other.mdbCommentDark,
      fontStyle: "italic",
    },
    {
      token: "variable",
      foreground: "#ffffff",
      fontStyle: "bold",
    },
    {
      token: "keyword",
      foreground: theme.other.mdbKeywordDark,
      fontStyle: "bold",
    },
    {
      token: "iri",
      foreground: theme.other.mdbIriDark,
    },
    {
      token: "iri-prefix",
      foreground: theme.other.mdbIriPrefixDark,
    },
    {
      token: "langtag",
      foreground: theme.other.mdbLangtagDark,
    },
    {
      token: "type",
      foreground: theme.other.mdbTypeDark,
    },
    {
      token: "string",
      foreground: theme.other.mdbStringDark,
    },
    {
      token: "number",
      foreground: theme.other.mdbNumericDark,
    },
    {
      token: "boolean",
      foreground: theme.other.mdbBooleanDark,
    },
    {
      token: "function",
      foreground: theme.other.mdbFunctionDark,
    },
    {
      token: "operator",
      foreground: theme.other.mdbOperatorDark,
      fontStyle: "bold",
    },
    {
      token: "null",
      foreground: theme.other.mdbNullDark,
    },
  ],
};

export { CustomMonacoLightTheme, CustomMonacoDarkTheme };
