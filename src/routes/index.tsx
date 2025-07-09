import classes from "./index.module.css";

import { Box } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { DataTable } from "../components/data-table/data-table";
import { driver, type Record } from "millenniumdb-driver";
import { useEffect, useState } from "react";
import { type ColDef } from "ag-grid-community";
import { MDBCellRenderer } from "../components/data-table/mdb-cell-renderer";
import { Split } from "@gfazioli/mantine-split-pane";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([]);
  const [rowData, setRowData] = useState<unknown[]>([]);

  const clear = () => {
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

  const updateRowData = (records: Record[]) => {
    setRowData(records.map((record) => record.toObject()));
  };

  useEffect(() => {
    async function executeQuery() {
      const d = driver("http://localhost:1234");
      const s = d.session();
      const r = s.run("SELECT ?s ?p ?o ?w WHERE { ?s ?p ?o . } LIMIT 999");

      updateColumnDefs(await r.variables());

      updateRowData(await r.records()); // TODO: efficient & buffered
    }

    clear();
    executeQuery();
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
            <DataTable columnDefs={columnDefs} rowData={rowData} />
          </Box>
        </Split.Pane>
      </Split>
    </Box>
  );
}
