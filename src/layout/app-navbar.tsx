import { AppShell, ScrollArea, Skeleton } from "@mantine/core";

export function AppNavbar() {
  return (
    <AppShell.Navbar p="md">
      <AppShell.Section>Navbar header</AppShell.Section>
      <AppShell.Section grow my="md" component={ScrollArea}>
        60 links in a scrollable section
        {Array(60)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Section>
      <AppShell.Section>Navbar footer – always at the bottom</AppShell.Section>
    </AppShell.Navbar>
  );
}
