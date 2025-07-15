import type { CSSVariablesResolver } from "@mantine/core";

export const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
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
    "--mdb-edge": theme.other.mdbEdgeLight,
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
    "--mdb-edge": theme.other.mdbEdgeDark,
  },
});
