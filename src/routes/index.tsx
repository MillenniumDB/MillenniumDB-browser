import classes from "./index.module.css";

import { DataTable } from "@/components/data-table/data-table";
import { MDBCellRenderer } from "@/components/data-table/mdb-cell-renderer";
import type { DetailsEntry } from "@/components/data-table/row-details-modal";
import { RowDetailsModal } from "@/components/data-table/row-details-modal";
import { Editor } from "@/components/editor/editor";
import { useMDB } from "@/providers/mdb-provider";
import { Split } from "@gfazioli/mantine-split-pane";
import { Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { createFileRoute } from "@tanstack/react-router";
import { type ColDef, type RowDoubleClickedEvent } from "ag-grid-community";
import type { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import { MillenniumDBError, Result, Session } from "@millenniumdb/driver";
import { type editor } from "monaco-editor";
import { useEffect, useRef, useState } from "react";

const FLUSH_DELAY_MS = 100;

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { driver } = useMDB();

  const [opened, { open, close }] = useDisclosure(false);
  const [detailsData, setDetailsData] = useState<DetailsEntry[]>([]);

  const [rowData, setRowData] = useState<unknown[]>([]);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([]);
  const [isGridReady, setIsGridReady] = useState<boolean>(false);
  const [isEditorReady, setIsEditorReady] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const editorRef = useRef<{ editor: editor.IStandaloneCodeEditor }>(null);
  const gridRef = useRef<AgGridReact>(null);

  const sessionRef = useRef<Session | null>(null);
  const resultRef = useRef<Result | null>(null);
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
      variables.map((varName, idx) => ({
        colId: idx.toString(),
        cellRenderer: (props: CustomCellRendererProps) => (
          <MDBCellRenderer {...props} />
        ),
        field: varName,
        headerName: varName,
        cellDataType: false,
      })),
    );
  };

  const handleRun = () => {
    if (isRunning) return;

    clear();

    setIsRunning(true);

    try {
      const session = driver.session();
      const query = editorRef.current?.editor.getValue();
      const result = session.run(query!);

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

      sessionRef.current = session;
      resultRef.current = result;
    } catch (error_) {
      console.error(error_);

      const error = error_ as Error;
      notifications.show({
        color: "red",
        title: "Execution Error",
        message: error.stack,
        withCloseButton: true,
        withBorder: true,
      });

      setIsRunning(false);
    }
  };

  const handleStop = () => {
    if (!isRunning) return;

    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }

    if (resultRef.current) {
      driver.cancel(resultRef.current);
      resultRef.current = null;
    }

    if (recordsRef.current.length) {
      flush();
    }

    notifications.show({
      color: "blue",
      title: "Query stopped",
      message: null,
      withCloseButton: true,
      withBorder: true,
    });

    setIsRunning(false);
  };

  const handleMount = () => {
    setIsEditorReady(true);
  };

  const handleRowDoubleClicked = (event: RowDoubleClickedEvent) => {
    const { data } = event;
    setDetailsData(
      columnDefs.map((cd) => ({ field: cd.field!, value: data[cd.field!] })),
    );
    open();
  };

  const handleRowDetailsModalClose = () => {
    setDetailsData([]);
    close();
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
    <>
      <RowDetailsModal
        detailsData={detailsData}
        opened={opened}
        close={handleRowDetailsModalClose}
      />
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
                onMount={handleMount}
                isRunning={isRunning}
                isRunDisabled={!isGridReady || !isEditorReady}
              />
            </Box>
          </Split.Pane>

          <Split.Resizer style={{ zIndex: 0 }} />

          <Split.Pane grow className={classes.pane} style={{ zIndex: 0 }}>
            <Box className={classes.innerPane}>
              <DataTable
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                onGridReady={onGridReady}
                onRowDoubleClicked={handleRowDoubleClicked}
                withBorder={false}
                disableExport={isRunning || !columnDefs.length}
                showIndex
              />
            </Box>
          </Split.Pane>
        </Split>
      </Box>
    </>
  );
}
