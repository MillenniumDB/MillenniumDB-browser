// helper hook for box selection in the force graph

import { Box } from "@mantine/core";
import { useState } from "react";

export type SelectionBounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

export type OnBoxSelectionStart = (
  { x, y }: { x: number; y: number },
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => void;

export type OnBoxSelectionMove = (
  selectionBounds: SelectionBounds,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => void;

export type OnBoxSelectionEnd = (
  selectionBounds: SelectionBounds,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => void;

export type BoxSelectionProps = {
  onBoxSelectionStart: OnBoxSelectionStart;
  onBoxSelectionMove: OnBoxSelectionMove;
  onBoxSelectionEnd: OnBoxSelectionEnd;
};

export function BoxSelection({
  onBoxSelectionStart,
  onBoxSelectionMove,
  onBoxSelectionEnd,
}: BoxSelectionProps) {
  const [selection, setSelection] = useState({
    active: false,
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
  });

  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.button !== 0) return; // must be left click

    const coords = {
      x: e.clientX,
      y: e.clientY,
    };

    onBoxSelectionStart?.(coords, e);

    setSelection({
      active: true,
      start: coords,
      end: coords,
    });
  };

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!selection.active) return;

    const { start } = selection;

    // Get bounds of selection
    const minX = Math.min(start.x, e.clientX);
    const maxX = Math.max(start.x, e.clientX);
    const minY = Math.min(start.y, e.clientY);
    const maxY = Math.max(start.y, e.clientY);
    onBoxSelectionMove?.({ minX, maxX, minY, maxY }, e);

    setSelection((prev) => ({
      ...prev,
      end: { x: e.clientX, y: e.clientY },
    }));
  };

  const onMouseUp: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const { start, end } = selection;

    // Get bounds of selection
    const minX = Math.min(start.x, end.x);
    const maxX = Math.max(start.x, end.x);
    const minY = Math.min(start.y, end.y);
    const maxY = Math.max(start.y, end.y);
    onBoxSelectionEnd?.({ minX, maxX, minY, maxY }, e);

    setSelection((prev) => ({ ...prev, active: false }));
  };

  return (
    <>
      {/* Overlay */}
      <Box
        style={{
          zIndex: "calc(var(--mantine-z-index-modal) - 1)",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          cursor: "crosshair",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {/* Selection box */}
        {selection.active && (
          <Box
            style={{
              position: "absolute",
              left: Math.min(selection.start.x, selection.end.x),
              top: Math.min(selection.start.y, selection.end.y),
              width: Math.abs(selection.end.x - selection.start.x),
              height: Math.abs(selection.end.y - selection.start.y),
              backgroundColor: "var(--mantine-primary-color-light)",
              border: "1px solid var(--mantine-primary-color-filled)",
              pointerEvents: "none",
              transform: "translate(0, 0)",
            }}
          />
        )}
      </Box>
    </>
  );
}
