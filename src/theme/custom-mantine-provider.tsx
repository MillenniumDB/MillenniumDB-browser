// https://mantine.dev/colors-generator/?color=C02ADF

import {
  createTheme,
  MantineProvider,
  type CSSVariablesResolver,
  type MantineColorsTuple,
} from "@mantine/core";
import type { ReactNode } from "react";

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

const theme = createTheme({
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
  },
});

const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    "--mdb-string": theme.other.mdbStringLight,
    "--mdb-iri": theme.other.mdbIriLight,
    "--mdb-numeric": theme.other.mdbNumericLight,
    "--mdb-boolean": theme.other.mdbBooleanLight,
    "--mdb-null": theme.other.mdbNullLight,
    "--mdb-type": theme.other.mdbTypeLight,
    "--mdb-iri-prefix": theme.other.mdbPrefixLight,
    "--mdb-iri-suffix": theme.other.mdbSuffixLight,
    "--mdb-node": theme.other.mdbNodeLight,
  },
  dark: {
    "--mdb-string": theme.other.mdbStringDark,
    "--mdb-iri": theme.other.mdbIriDark,
    "--mdb-numeric": theme.other.mdbNumericDark,
    "--mdb-boolean": theme.other.mdbBooleanDark,
    "--mdb-null": theme.other.mdbNullDark,
    "--mdb-type": theme.other.mdbTypeDark,
    "--mdb-iri-prefix": theme.other.mdbPrefixDark,
    "--mdb-iri-suffix": theme.other.mdbSuffixDark,
    "--mdb-node": theme.other.mdbNodeDark,
  },
});

type CustomMantineProviderProps = {
  children: ReactNode;
};

export function CustomMantineProvider({
  children,
}: CustomMantineProviderProps) {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={theme}
      cssVariablesResolver={cssVariablesResolver}
    >
      {children}
    </MantineProvider>
  );
}
