import {
  createTheme,
  DEFAULT_THEME,
  mergeMantineTheme,
  type MantineColorsTuple,
} from "@mantine/core";

// https://mantine.dev/colors-generator/?color=C02ADF
const brightPink: MantineColorsTuple = [
  "#ffebff",
  "#f5d5fb",
  "#e6a8f3",
  "#d779eb",
  "#cb51e4",
  "#c337e0",
  "#c02adf",
  "#a91cc6",
  "#9715b1",
  "#84099c",
];

const themeOverride = createTheme({
  colors: {
    "bright-pink": brightPink,
  },
  primaryColor: "bright-pink",
  other: {
    mdbStringLight: "#A31515",
    mdbStringDark: "#CE9178",

    mdbIriLight: "#267F99",
    mdbIriDark: "#4EC9B0",

    mdbNumericLight: "#098658",
    mdbNumericDark: "#B5CEA8",

    mdbBooleanLight: "#0000FF",
    mdbBooleanDark: "#569CD6",

    mdbNullLight: "#0000FF",
    mdbNullDark: "#569CD6",

    mdbTypeLight: "#267F99",
    mdbTypeDark: "#4EC9B0",

    mdbIriPrefixLight: "#0000FF",
    mdbIriPrefixDark: "#569CD6",

    mdbIriSuffixLight: "#001080",
    mdbIriSuffixDark: "#9CDCFE",

    mdbNodeLight: "#001080",
    mdbNodeDark: "#9CDCFE",

    mdbEdgeLight: "#0000FF",
    mdbEdgeDark: "#569CD6",

    mdbLangtagLight: "#001080",
    mdbLangtagDark: "#569CD6",

    // editor only
    mdbCommentLight: "#008000",
    mdbCommentDark: "#6A9955",

    mdbFunctionLight: "#795E26",
    mdbFunctionDark: "#DCDCAA",

    mdbKeywordLight: "#AF00DB",
    mdbKeywordDark: "#C586C0",

    mdbOperatorLight: "#000000",
    mdbOperatorDark: "#FFFFFF",
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
