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
      }))
    );
  };

  const updateRowData = (records: Record[]) => {
    setRowData(records.map((record) => record.toObject()));
  };

  useEffect(() => {
    async function f() {
      const d = driver("http://localhost:1234");
      const s = d.session();
      const r = s.run("SELECT ?s ?p ?o ?w WHERE { ?s ?p ?o . } LIMIT 999");

      updateColumnDefs(await r.variables());

      updateRowData(await r.records()); // TODO: efficient & buffered
    }

    clear();
    f();
  }, []);

  return (
    <Box className={classes.root} p="sm">
      <Split orientation="horizontal" h="100%" spacing="sm" size="md" variant="dotted">
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
