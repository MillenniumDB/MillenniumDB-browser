// src/hooks/useGraphColorPalette.ts
import { useMantineTheme } from "@mantine/core";

export function useGraphColorPalette() {
  const theme = useMantineTheme();
  return [
    theme.colors.grape[6],
    theme.colors.green[6],
    theme.colors.blue[6],
    theme.colors.orange[6],
    theme.colors.cyan[6],
    theme.colors.red[6],
    theme.colors.indigo[6],
    theme.colors.yellow[6],
    theme.colors.teal[6],
    theme.colors.pink[6],
    theme.colors.violet[6],
    theme.colors.lime[6],
  ];
}
