import { AppShell } from "@mantine/core";
import { Outlet, useLocation } from "@tanstack/react-router";
import { useDisclosure } from "@mantine/hooks";

import { AppHeader } from "./app-header";
import { AppNavbar } from "./app-navbar";
import { useEffect } from "react";

export const HEADER_HEIGHT = 48;
export const NAVBAR_WIDTH = 180;

export function AppLayout() {
  const [opened, { toggle, close }] = useDisclosure();

  const location = useLocation();

  useEffect(() => {
    close();
  }, [location.pathname, close]);

  return (
    <AppShell
      header={{ height: HEADER_HEIGHT }}
      navbar={{ width: NAVBAR_WIDTH, breakpoint: "xs", collapsed: { mobile: !opened } }}
    >
      <AppHeader opened={opened} toggle={toggle} />

      <AppNavbar />

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
