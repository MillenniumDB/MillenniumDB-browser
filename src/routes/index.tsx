import classes from "./index.module.css";

import { Split } from "@gfazioli/mantine-split-pane";
import { Box } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { createFileRoute } from "@tanstack/react-router";
import { type ColDef } from "ag-grid-community";
import type { AgGridReact } from "ag-grid-react";
import { driver, MillenniumDBError, Session } from "millenniumdb-driver";
import { useEffect, useRef, useState } from "react";
import { DataTable } from "../components/data-table/data-table";
import { MDBCellRenderer } from "../components/data-table/mdb-cell-renderer";
import { Editor } from "../components/editor/editor";
import { type editor } from "monaco-editor";

const FLUSH_DELAY_MS = 100;

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [rowData, setRowData] = useState<unknown[]>([]);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([]);
  const [isGridReady, setIsGridReady] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const editorRef = useRef<{ editor: editor.IStandaloneCodeEditor }>(null);
  const gridRef = useRef<AgGridReact>(null);

  const sessionRef = useRef<Session | null>(null);
  const recordsRef = useRef<object[]>([]);

  const onGridReady = () => {
    setIsGridReady(true);
  };

  // clear results
  const clear = () => {
    setRowData([]);
    setColumnDefs([]);
  };

  // flush buffer into grid
  const flush = () => {
    if (recordsRef.current.length === 0) return;
    const records = recordsRef.current;
    recordsRef.current = [];
    gridRef.current?.api?.applyTransactionAsync({
      add: records,
    });
  };

  const updateColumnDefs = (variables: string[]) => {
    setColumnDefs(
      variables.map((varName) => ({
        cellRenderer: MDBCellRenderer,
        field: varName,
        headerName: varName,
      })),
    );
  };

  const handleRun = () => {
    if (!isGridReady) return;

    clear();

    setIsRunning(true);

    const driver_ = driver("http://localhost:1234");
    sessionRef.current = driver_.session();
    const query = editorRef.current?.editor.getValue();
    const result = sessionRef.current.run(query!);

    result.subscribe({
      onVariables: (variables) => {
        updateColumnDefs(variables);
      },
      onRecord(record) {
        recordsRef.current.push(record.toObject());
      },
      onSuccess(summary) {
        flush();

        const { executionDurationMs, resultCount, update } = summary;

        if (update) {
          notifications.show({
            color: "green",
            title: "Update Finished",
            message: `Execution took ${executionDurationMs.toFixed(3)} ms`,
            withCloseButton: true,
            withBorder: true,
          });
        } else {
          notifications.show({
            color: "green",
            title: "Query Finished",
            message: `Found ${resultCount} result(s) in ${executionDurationMs.toFixed(3)} ms`,
            withCloseButton: true,
            withBorder: true,
          });
        }
        console.info(summary);
        sessionRef.current?.close();
        setIsRunning(false);
      },
      onError(error: MillenniumDBError) {
        flush();

        notifications.show({
          color: "red",
          title: "MillenniumDB Error",
          message: error.toString(),
          withCloseButton: true,
          withBorder: true,
        });
        console.error(error);
        sessionRef.current?.close();
        setIsRunning(false);
      },
    });
  };

  const handleStop = () => {
    if (!isRunning) return;

    sessionRef.current?.close();
    setIsRunning(false);
    notifications.show({
      color: "blue",
      title: "Query stopped",
      message: null,
      withCloseButton: true,
      withBorder: true,
    });
  };

  // close session on unmount
  useEffect(() => {
    return () => {
      sessionRef.current?.close();
    };
  }, []);

  // set an interval that flushes buffer
  useEffect(() => {
    const interval = setInterval(() => {
      flush();
    }, FLUSH_DELAY_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={classes.root}>
      <Split
        orientation="horizontal"
        h="100%"
        size="sm"
        color="var(--mantine-color-default-border)"
        hoverColor="var(--mantine-primary-color-light-color)"
        radius={0}
        spacing={0}
        variant="default"
      >
        <Split.Pane className={classes.pane} style={{ zIndex: 1 }}>
          <Box className={classes.innerPane}>
            <Editor
              ref={editorRef}
              onRun={handleRun}
              onStop={handleStop}
              isRunning={isRunning}
            />
          </Box>
        </Split.Pane>

        <Split.Resizer style={{ zIndex: 0 }} />

        <Split.Pane grow className={classes.pane} style={{ zIndex: 0 }}>
          <Box className={classes.innerPane}>
            <DataTable
              ref={gridRef}
              columnDefs={columnDefs}
              rowData={rowData}
              onGridReady={onGridReady}
              withBorder={false}
              showIndex
            />
          </Box>
        </Split.Pane>
      </Split>
    </Box>
  );
}
