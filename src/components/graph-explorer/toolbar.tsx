import type { CursorMode } from "@/routes/graph-explorer";
import classes from "./toolbar.module.css";

import { ActionIcon, Divider, FileButton, Paper, Tooltip } from "@mantine/core";
import { type IconProps } from "@tabler/icons-react";
import type { ElementType, ReactNode } from "react";

export type CursorToolbarItem = {
  onClick: () => void;
  icon: ElementType<IconProps>;
  label: string;
  cursorMode: CursorMode;
};

export type SingleActionToolbarItem = {
  onClick: () => void;
  icon: ElementType<IconProps>;
  label: string;
};

export type ToolbarProps = {
  cursorToolbarItems: CursorToolbarItem[];
  activeCursorMode: CursorMode;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
};

export function Toolbar({
  cursorToolbarItems,
  activeCursorMode,
  leftSection,
  rightSection,
}: ToolbarProps) {
  return (
    <Paper className={classes.root} withBorder shadow="xl">
      {leftSection}
      {cursorToolbarItems.map(
        ({ onClick, icon: Icon, label, cursorMode }, idx) => {
          const isActive = cursorMode === activeCursorMode;
          return (
            <Tooltip key={idx} label={label}>
              <ActionIcon
                variant={isActive ? "filled" : "default"}
                size="md"
                aria-label={label}
                onClick={onClick}
              >
                <Icon size={20} stroke={1.5} />
              </ActionIcon>
            </Tooltip>
          );
        },
      )}
      {rightSection}
    </Paper>
  );
}
