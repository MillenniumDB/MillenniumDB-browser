import classes from "./data-table.module.css";

import { CustomAgGridTheme } from "@/theme/custom-ag-grid-theme";
import { ActionIcon, Box, Tooltip } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import {
  CellStyleModule,
  ClientSideRowModelApiModule,
  ClientSideRowModelModule,
  ColumnApiModule,
  ColumnAutoSizeModule,
  CsvExportModule,
  ModuleRegistry,
  RowApiModule,
  ValidationModule,
  type ColDef,
  type GridReadyEvent,
  type RowDoubleClickedEvent,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { MDBProcessCsv } from "./mdb-process-csv";

let modules = [
  ColumnApiModule,
  CsvExportModule,
  CellStyleModule,
  ClientSideRowModelApiModule,
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  RowApiModule,
];

if (import.meta.env.DEV) {
  modules = [ValidationModule, ...modules];
}

ModuleRegistry.registerModules(modules);

type DataTableProps = {
  columnDefs: ColDef[];
  rowData: unknown[];
  onGridReady?: (event: GridReadyEvent) => void;
  onRowDoubleClicked?: (event: RowDoubleClickedEvent) => void;
  showIndex?: boolean;
  withBorder?: boolean;
  disableExport?: boolean;
};

const DataTable = forwardRef(
  (
    {
      rowData,
      columnDefs,
      onGridReady,
      showIndex,
      withBorder,
      disableExport,
      onRowDoubleClicked,
    }: DataTableProps,
    ref,
  ) => {
    const gridRef = useRef<AgGridReact>(null);

    // expose internal ref to parent
    useImperativeHandle(ref, () => gridRef.current!, []);

    const computedColumnDefs = useMemo<ColDef[]>(() => {
      if (!columnDefs.length) return [];

      if (!showIndex) {
        return columnDefs;
      }

      const indexColDef: ColDef = {
        colId: "__index",
        headerName: "#",
        valueGetter: "node.rowIndex + 1",
        flex: 0,
        width: 64,
        cellClass: classes.indexCell,
        headerClass: classes.indexHeader,
      };

      return [indexColDef, ...columnDefs];
    }, [columnDefs, showIndex]);

    const handleDownload = () => {
      gridRef.current?.api.exportDataAsCsv({
        columnKeys: columnDefs.map((colDef) => colDef.colId!),
        fileName: `mdb-${Date.now()}`,
        suppressQuotes: true,
        processCellCallback: MDBProcessCsv,
      });
    };

    return (
      <Box h="100%" w="100%">
        <AgGridReact
          onGridReady={onGridReady}
          onRowDoubleClicked={onRowDoubleClicked}
          ref={gridRef}
          rowData={rowData}
          columnDefs={computedColumnDefs}
          gridOptions={{
            defaultColDef: {
              flex: 1,
              resizable: true,
              sortable: false,
              filter: false,
              editable: false,
            },
          }}
          theme={CustomAgGridTheme.withParams({
            wrapperBorder: withBorder,
          })}
          suppressDragLeaveHidesColumns
          suppressFieldDotNotation // prevents issues with columns with dot
        />
        <ActionIcon.Group className={classes.floatingActionGroup}>
          <Tooltip label="Export CSV">
            <ActionIcon
              variant="default"
              size="lg"
              onClick={handleDownload}
              disabled={disableExport}
            >
              <IconDownload size={20} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </ActionIcon.Group>
      </Box>
    );
  },
);

export { DataTable };
