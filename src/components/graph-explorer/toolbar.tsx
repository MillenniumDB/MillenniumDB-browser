import classes from "./toolbar.module.css";

import { ActionIcon, Paper, Tooltip } from "@mantine/core";
import { type IconProps } from "@tabler/icons-react";
import type { ElementType } from "react";

export type CursorMode = "default" | "select";

export type ToolbarItem = {
  onClick: () => void;
  icon: ElementType<IconProps>;
  label: string;
  mode: CursorMode;
};

export type ToolbarProps = {
  toolbarItems: ToolbarItem[];
  activeMode?: CursorMode;
};

export function Toolbar({ toolbarItems, activeMode }: ToolbarProps) {
  return (
    <Paper className={classes.root} withBorder shadow="xl">
      {toolbarItems.map(({ onClick, icon: Icon, label, mode }, idx) => {
        const isActive = mode === activeMode;
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
      })}
    </Paper>
  );
}
