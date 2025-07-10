import classes from "./index.module.css";

import { Split } from "@gfazioli/mantine-split-pane";
import { Box } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { createFileRoute } from "@tanstack/react-router";
import { type ColDef } from "ag-grid-community";
import type { AgGridReact } from "ag-grid-react";
import { driver, Session } from "millenniumdb-driver";
import { useEffect, useRef, useState } from "react";
import { DataTable } from "../components/data-table/data-table";
import { MDBCellRenderer } from "../components/data-table/mdb-cell-renderer";

const FLUSH_DELAY_MS = 100;

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([]);
  const [rowData, setRowData] = useState<unknown[]>([]);
  const [isGridReady, setIsGridReady] = useState<boolean>(false);

  const gridRef = useRef<AgGridReact | null>(null);
  const sessionRef = useRef<Session | null>(null);
  const recordsRef = useRef<object[]>([]);

  const onGridReady = () => {
    setIsGridReady(true);
  };

  // stop query and clear results
  const clear = () => {
    sessionRef.current?.close();
    setColumnDefs([]);
    setRowData([]);
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

  const executeQuery = async () => {
    const driver_ = driver("http://localhost:1234");
    const session = driver_.session();
    const result = session.run("MATCH (?from)-[?edge :?type]->(?to), (?node) RETURN * LIMIT 500000");

    sessionRef.current = session;

    result.subscribe({
      onVariables: (variables) => {
        updateColumnDefs(variables);
      },
      onRecord(record) {
        recordsRef.current.push(record.toObject());
      },
      onSuccess(summary) {
        const { executionDurationMs, resultCount, update } = summary;

        if (update) {
          notifications.show({
            color: "green",
            title: "Update Finished",
            message: `Execution took ${executionDurationMs.toFixed(3)} ms`,
            withCloseButton: true,
          });
        } else {
          notifications.show({
            color: "green",
            title: "Query Finished",
            message: `Found ${resultCount} result(s) in ${executionDurationMs.toFixed(3)} ms`,
            withCloseButton: true,
          });
        }
        console.info(summary);
        sessionRef.current?.close();
      },
      onError(error) {
        notifications.show({
          color: "red",
          title: "MillenniumDB Error",
          message: error.toString(),
          withCloseButton: true,
        });
        console.error(error);
        sessionRef.current?.close();
      },
    });
  };

  useEffect(() => {
    if (isGridReady) {
      executeQuery();
    }

    return () => {
      sessionRef.current?.close();
    };
  }, [isGridReady]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (recordsRef.current.length === 0) return;

      const records = recordsRef.current;
      recordsRef.current = [];
      gridRef.current?.api?.applyTransactionAsync({
        add: records,
      });
    }, FLUSH_DELAY_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={classes.root}>
      <Split
        orientation="horizontal"
        h="100%"
        size="sm"
        p="sm"
        spacing="sm"
        hoverColor="var(--mantine-primary-color-light-color)"
        variant="default"
      >
        <Split.Pane className={classes.pane}>
          <Box className={classes.innerPane}>TODO: Editor</Box>
        </Split.Pane>

        <Split.Resizer />

        <Split.Pane grow className={classes.pane}>
          <Box className={classes.innerPane}>
            <DataTable
              ref={gridRef}
              columnDefs={columnDefs}
              rowData={rowData}
              onGridReady={onGridReady}
              showIndex
            />
          </Box>
        </Split.Pane>
      </Split>
    </Box>
  );
}
