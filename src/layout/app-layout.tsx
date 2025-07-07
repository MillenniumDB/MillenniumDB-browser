import { AppShell } from "@mantine/core";
import { Outlet } from "@tanstack/react-router";
import { useDisclosure } from "@mantine/hooks";

import { AppHeader } from "./app-header";
import { AppNavbar } from "./app-navbar";

export const HEADER_HEIGHT = 58;
export const NAVBAR_WIDTH = 300;

export function AppLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: HEADER_HEIGHT }}
      navbar={{ width: NAVBAR_WIDTH, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppHeader opened={opened} toggle={toggle} />

      <AppNavbar />

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
