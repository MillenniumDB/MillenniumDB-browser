import classes from "./editor-header.module.css";

import {
  Tabs,
  Group,
  Box,
  CloseButton,
  UnstyledButton,
  Tooltip
} from "@mantine/core";
import { useEffect, useRef, type MouseEvent } from "react";
import {
  IconDeviceFloppy,
  IconPlayerPlayFilled,
  IconPlayerStopFilled,
  IconPlus,
  IconStar,
} from "@tabler/icons-react";
import { EditorHeaderIconAction } from "./editor-header-icon-action";
import clsx from "clsx";

export type FileDef = {
  id: string;
  name: string;
  content: string;
};

type EditorTabsProps = {
  activeFile: FileDef;
  files: FileDef[];
  isRunning: boolean;
  isRunDisabled: boolean;
  onFileChange: (fileId: string) => void;
  onFileAdd: () => void;
  onFileClose: (fileId: string) => void;
  onRun: () => void;
  onStop: () => void;
};

export default function EditorHeader({
  activeFile,
  files,
  isRunDisabled,
  onFileChange,
  onFileAdd,
  onFileClose,
  isRunning,
  onRun,
  onStop,
}: EditorTabsProps) {
  const tabsListRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (fileId: string | null) => {
    if (fileId) {
      onFileChange(fileId);
    }
  };

  const handleAddTab = () => {
    onFileAdd();
  };

  const handleCloseTab = (e: MouseEvent, fileId: string) => {
    e.stopPropagation(); // prevent tab change
    onFileClose(fileId);
  };

  useEffect(() => {
    const el = tabsListRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY !== 0) {
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <Group className={classes.root}>
      <Box className={classes.runContainer}>
        <Tooltip
          label={isRunDisabled ? null : isRunning ? "Stop query" : "Run query"}
        >
          <UnstyledButton
            disabled={isRunDisabled}
            onClick={() => (isRunning ? onStop() : onRun())}
            className={clsx(
              classes.runButton,
              isRunning && classes.stop,
              isRunDisabled && classes.disabled,
            )}
          >
            {isRunning ? (
              <IconPlayerStopFilled size={14} />
            ) : (
              <IconPlayerPlayFilled size={14} />
            )}
            {isRunning ? "Stop" : "Run"}
          </UnstyledButton>
        </Tooltip>
      </Box>

      <Tabs
        className={classes.tabs}
        value={activeFile.id}
        onChange={handleTabChange}
        variant="default"
      >
        <Tabs.List ref={tabsListRef} className={classes.tabsList}>
          {files.map((file) => (
            <Tabs.Tab
              className={classes.tab}
              key={file.id}
              value={file.id}
              rightSection={
                files.length > 1 && (
                  <CloseButton
                    className={classes.closeButton}
                    component="span" // prevents nested button
                    variant="subtle"
                    size="xs"
                    onClick={(e) => handleCloseTab(e, file.id)}
                  />
                )
              }
            >
              {file.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      <Box className={classes.actionsContainer}>
        <EditorHeaderIconAction
          label="New query"
          onClick={handleAddTab}
          icon={IconPlus}
        />
        <EditorHeaderIconAction
          label="Save query"
          onClick={() => alert("TODO:")}
          icon={IconDeviceFloppy}
        />
        <EditorHeaderIconAction
          label="My queries"
          onClick={() => alert("TODO:")}
          icon={IconStar}
        />
      </Box>
    </Group>
  );
}
