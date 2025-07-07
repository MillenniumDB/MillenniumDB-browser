import {
  ActionIcon,
  Anchor,
  AppShell,
  Burger,
  Container,
  Group,
  Image,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { Link } from "@tanstack/react-router";
import cx from "clsx";
import AppLogo from "../assets/app-logo.svg";
import classes from "./app-header.module.css";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useCallback, useMemo } from "react";

type AppHeaderProps = {
  opened: boolean;
  toggle: () => void;
};

export function AppHeader(props: AppHeaderProps) {
  const { setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme("dark");

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
          <Burger opened={props.opened} onClick={props.toggle} hiddenFrom="sm" size="sm" />
          <Anchor href="/" component={Link}>
            <Image className={classes.appLogo} src={AppLogo} h={30} w="auto" fit="contain" alt="MillenniumDB" />
          </Anchor>
        </Group>

        <Group gap={4}>
          <Tooltip label={isDarkMode ? "Light mode" : "Dark mode"} openDelay={500}>
            <ActionIcon size="lg" variant="default" onClick={toggleColorScheme}>
              <IconSun size="xs" className={cx(classes.icon, classes.light)} />
              <IconMoon className={cx(classes.icon, classes.dark)} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Container>
    </AppShell.Header>
  );
}
