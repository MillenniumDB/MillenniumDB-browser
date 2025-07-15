import { MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { theme } from "./custom-mantine-theme";
import { cssVariablesResolver } from "./custom-mantine-css-variables-resolver";

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
