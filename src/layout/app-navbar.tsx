import classes from "./app-navbar.module.css";

import { AppShell, ScrollArea, Stack } from "@mantine/core";
import { IconBracketsAngle, IconChartDots3Filled, type IconProps } from "@tabler/icons-react";
import { Link, useLocation } from "@tanstack/react-router";
import { type ElementType } from "react";
import clsx from "clsx";

type CustomNavLinkProps = {
  href: string;
  label: string;
  icon: ElementType<IconProps>;
};

function CustomNavLink({ href, label, icon: Icon }: CustomNavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link className={clsx(classes.link, isActive && classes.active)} to={href}>
      <Icon className={classes.linkIcon} />
      <span>{label}</span>
    </Link>
  );
}

const navLinks = [
  { href: "/", icon: IconBracketsAngle, label: "Query" },
  { href: "/graph-explorer", icon: IconChartDots3Filled, label: "Graph Explorer" },
];

export function AppNavbar() {
  return (
    <AppShell.Navbar>
      {/* <AppShell.Section></AppShell.Section> */}
      <AppShell.Section grow component={ScrollArea}>
        <Stack p="xs" gap={2}>
          {navLinks.map((props) => (
            <CustomNavLink key={props.href} {...props} />
          ))}
        </Stack>
      </AppShell.Section>
      {/* <AppShell.Section>Navbar footer</AppShell.Section> */}
    </AppShell.Navbar>
  );
}
