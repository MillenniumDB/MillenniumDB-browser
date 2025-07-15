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
      foreground: "#6A9955",
      fontStyle: "italic",
    },
    {
      token: "variable",
      foreground: "#D4D4D4",
      fontStyle: "bold",
    },
    {
      token: "keyword",
      foreground: "#C586C0",
      fontStyle: "bold",
    },
    {
      token: "uri",
      foreground: "#4EC9B0",
    },
    {
      token: "langtag",
      foreground: "#4EC9B0",
    },
    {
      token: "type",
      foreground: "#569CD6",
    },
    {
      token: "string",
      foreground: "#CE9178",
    },
    {
      token: "number",
      foreground: "#B5CEA8",
    },
    {
      token: "boolean",
      foreground: "#B5CEA8",
    },
    {
      token: "function",
      foreground: "#DCDCAA",
    },
    {
      token: "operator",
      foreground: "#4EC9B0",
      fontStyle: "bold",
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
      foreground: "#008000",
      fontStyle: "italic",
    },
    {
      token: "variable",
      foreground: "#000000",
      fontStyle: "bold",
    },
    {
      token: "keyword",
      foreground: "#AF00DB",
      fontStyle: "bold",
    },
    {
      token: "uri",
      foreground: "#267F99",
    },
    {
      token: "langtag",
      foreground: "#267F99",
    },
    {
      token: "type",
      foreground: "#0000FF",
    },
    {
      token: "string",
      foreground: "#A31515",
    },
    {
      token: "number",
      foreground: "#098658",
    },
    {
      token: "boolean",
      foreground: "#098658",
    },
    {
      token: "function",
      foreground: "#795E26",
    },
    {
      token: "operator",
      foreground: "#267F99",
      fontStyle: "bold",
    },
  ],
};

export { CustomMonacoLightTheme, CustomMonacoDarkTheme };
