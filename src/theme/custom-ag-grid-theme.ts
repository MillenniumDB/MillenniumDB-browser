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

  cellFontFamily: "var(--mantine-font-family-monospace)",
  headerFontFamily: "var(--mantine-font-family-monospace)",
  fontSize: 12,
  spacing: 4,

  wrapperBorderRadius: "var(--mantine-radius-sm)",
};

export const CustomAgGridTheme = themeQuartz.withParams(THEME);
