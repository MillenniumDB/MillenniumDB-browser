import classes from "./editor-header.module.css";

import {
  Tabs,
  Group,
  Box,
  UnstyledButton,
  Tooltip,
  ActionIcon,
} from "@mantine/core";
import { useEffect, useRef } from "react";
import {
  IconCircleFilled,
  IconPlayerPlayFilled,
  IconPlayerStopFilled,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import { EditorHeaderIconAction } from "./editor-header-icon-action";
import clsx from "clsx";
import type { FileDef } from "@/hooks/use-file-manager";
import { SaveMenu } from "./save-menu";
import { MyQueries } from "./my-queries";

type EditorTabsProps = {
  activeFileId?: string;
  files: Record<string, FileDef>;
  persistedFiles: Record<string, FileDef>;
  openFileIds: string[];
  isRunning: boolean;
  isRunDisabled: boolean;
  onFileChange: (fileId: string) => void;
  onFileCreate: () => void;
  onFileClose: (fileId: string) => void;
  onRun: () => void;
  onStop: () => void;
  hasChanges: (id: string) => boolean;
  onSave: (id: string, name?: string) => void;
  onSelectQuery: (id: string) => void;
};

export default function EditorHeader({
  files,
  persistedFiles,
  openFileIds,
  activeFileId,
  isRunDisabled,
  onFileChange,
  onFileCreate,
  onFileClose,
  isRunning,
  onSave,
  onRun,
  onStop,
  onSelectQuery,
  hasChanges,
}: EditorTabsProps) {
  const tabsListRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (fileId: string | null) => {
    if (fileId) {
      onFileChange(fileId);
    }
  };

  const handleAddTab = () => {
    onFileCreate();
  };

  const handleCloseTab = (fileId: string) => {
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
          label={
            activeFileId === undefined
              ? "No query to run"
              : isRunning
                ? "Stop query"
                : "Run query"
          }
        >
          <UnstyledButton
            disabled={isRunDisabled || activeFileId === undefined}
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
        value={activeFileId}
        onChange={handleTabChange}
        variant="default"
      >
        <Tabs.List ref={tabsListRef} className={classes.tabsList}>
          {openFileIds.map((id) => (
            <Tabs.Tab
              className={classes.tab}
              key={id}
              value={id}
              // use a box wrapper to capture the click events correctly
              rightSection={
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCloseTab(id);
                  }}
                >
                  <ActionIcon
                    data-has-changes={hasChanges(id)}
                    className={classes.closeButton}
                    component="div" // prevents nested button warning
                    variant="subtle"
                    color="default"
                    size="xs"
                  >
                    <IconCircleFilled className={classes.circle} size={12} />
                    <IconX className={classes.x} />
                  </ActionIcon>
                </Box>
              }
            >
              {`${files[id]?.name || "untitled"}${hasChanges(id) ? "*" : ""}`}
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
        <SaveMenu files={files} activeFileId={activeFileId} onSave={onSave} />
        <MyQueries
          persistedFiles={persistedFiles}
          onSelectQuery={onSelectQuery}
        />
      </Box>
    </Group>
  );
}
