import classes from "./app-header.module.css";

import {
  ActionIcon,
  Anchor,
  AppShell,
  Burger,
  Code,
  Container,
  Group,
  Image,
  Skeleton,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { Link } from "@tanstack/react-router";
import AppLogo from "../assets/app-logo.svg";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useCallback, useMemo } from "react";
import { useMDB } from "../providers/mdb-provider";
import clsx from "clsx";

type AppHeaderProps = {
  opened: boolean;
  toggle: () => void;
};

export function AppHeader({ opened, toggle }: AppHeaderProps) {
  const { catalog } = useMDB();

  const { setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme();

  const isDarkMode = useMemo(() => {
    return computedColorScheme === "dark";
  }, [computedColorScheme]);

  const toggleColorScheme = useCallback(() => {
    setColorScheme(isDarkMode ? "light" : "dark");
  }, [isDarkMode, setColorScheme]);

  return (
    <AppShell.Header>
      <Container className={classes.inner} size="xl">
        <Group gap={8}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Anchor href="/" component={Link}>
            <Image
              src={AppLogo}
              h={30}
              w="auto"
              fit="contain"
              alt="MillenniumDB"
            />
          </Anchor>

          {catalog ? (
            <Code>{`${catalog.getModelString()}_v${catalog.getVersion()}`}</Code>
          ) : (
            <Skeleton height={16} width={40} />
          )}
        </Group>

        <Group gap={4}>
          <Tooltip
            label={isDarkMode ? "Light mode" : "Dark mode"}
            openDelay={500}
          >
            <ActionIcon size="lg" variant="default" onClick={toggleColorScheme}>
              <IconSun className={clsx(classes.icon, classes.light)} />
              <IconMoon className={clsx(classes.icon, classes.dark)} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Container>
    </AppShell.Header>
  );
}
