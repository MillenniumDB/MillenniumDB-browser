import classes from "./context-menu.module.css";

import { Box, Menu } from "@mantine/core";
import { useState, useRef, useEffect, type ReactNode } from "react";

export type ContextMenuProps = {
  menuItems: ReactNode;
  opened: boolean;
  x: number;
  y: number;
  onClose: () => void;
};

export function ContextMenu({
  menuItems,
  opened,
  x,
  y,
  onClose,
}: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // re-measure when menuItems change
  useEffect(() => {
    if (menuRef.current) {
      const { width, height } = menuRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, [menuItems]);

  const adjustedX = Math.min(x, window.innerWidth - dimensions.width);
  const adjustedY = Math.min(y, window.innerHeight - dimensions.height);

  return (
    <>
      {opened && (
        <Box
          className={classes.overlay}
          onClick={onClose}
          onContextMenu={(e) => {
            e.preventDefault();
            onClose();
          }}
        />
      )}
      <Menu
        classNames={{
          dropdown: classes.dropdown,
        }}
        onClose={onClose}
        opened
        styles={{
          dropdown: {
            // use adjusted coordinates to prevent overflowing the window
            left: `${adjustedX}px`,
            top: `${adjustedY}px`,
            // Ensure the menu is visible during measurement
            visibility: opened ? "visible" : "hidden",
          },
        }}
      >
        <Menu.Dropdown ref={menuRef}>{menuItems}</Menu.Dropdown>
      </Menu>
    </>
  );
}
