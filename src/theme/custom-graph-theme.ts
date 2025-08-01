import type { MantineTheme } from "@mantine/core";

export type GraphTheme = {
  node: {
    colorPalette: string[];
    defaultColor: string;
    fontColor: string;
    selectedBorderColor: string;
  };
  edge: {
    color: string;
    fontColor: string;
    backgroundColor: string;
  };
  backgroundColor: string;
};

export function getGraphTheme(colorScheme: "light" | "dark", mantine: MantineTheme): GraphTheme {
  const defaultColorPalette = [
    mantine.colors.grape[6],
    mantine.colors.green[6],
    mantine.colors.blue[6],
    mantine.colors.orange[6],
    mantine.colors.cyan[6],
    mantine.colors.red[6],
    mantine.colors.indigo[6],
    mantine.colors.yellow[6],
    mantine.colors.teal[6],
    mantine.colors.pink[6],
    mantine.colors.violet[6],
    mantine.colors.lime[6],
  ];

  const edgeColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--mantine-color-default-border')
    .trim();

  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--mantine-primary-color-5')
    .trim();

  if (colorScheme === "dark") {
    return {
      node: {
        colorPalette: defaultColorPalette,
        defaultColor: mantine.colors.gray[6],
        fontColor: mantine.white,
        selectedBorderColor: primaryColor,
      },
      edge: {
        color: edgeColor,
        fontColor: mantine.white,
        backgroundColor: "rgba(31,31,31,0.75)",
      },
      backgroundColor: "#1f1f1f",
    };
  }

  return {
    node: {
      colorPalette: defaultColorPalette,
      defaultColor: mantine.colors.gray[6],
      fontColor: mantine.black,
      selectedBorderColor: primaryColor,
    },
    edge: {
      color: edgeColor,
      fontColor: mantine.black,
      backgroundColor: "rgba(255,255,255,.75)",
    },
    backgroundColor: "#fefefe",
  };
}
