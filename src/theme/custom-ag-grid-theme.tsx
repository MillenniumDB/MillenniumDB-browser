import { themeQuartz, type ThemeDefaultParams } from "ag-grid-community";

const THEME: Partial<ThemeDefaultParams> = {
  accentColor: "var(--mantine-primary-color-5)",
  backgroundColor: "var(--mantine-color-body)",
  foregroundColor: "var(--mantine-color-bright)",

  headerBackgroundColor: "var(--mantine-color-body)",
  headerTextColor: "var(--mantine-color-bright)",

  headerColumnResizeHandleColor: "var(--mantine-color-default-border)",

  headerFontWeight: "bold",

  oddRowBackgroundColor: {
    ref: "backgroundColor",
    mix: 0.975,
    onto: "foregroundColor",
  },

  fontFamily: "var(--mantine-font-family-monospace)",
};

export const CustomAgGridTheme = themeQuartz.withParams(THEME);
