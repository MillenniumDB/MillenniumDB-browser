// https://mantine.dev/colors-generator/?color=C02ADF

import { createTheme, MantineProvider, type MantineColorsTuple } from "@mantine/core";
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
});

type CustomMantineProviderProps = {
  children: ReactNode;
};

export function CustomMantineProvider({ children }: CustomMantineProviderProps) {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      {children}
    </MantineProvider>
  );
}
