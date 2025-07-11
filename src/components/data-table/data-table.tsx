import classes from "./data-table.module.css";

import {
  CellStyleModule,
  ClientSideRowModelApiModule,
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  ModuleRegistry,
  RowApiModule,
  ValidationModule,
  type ColDef,
  type GridReadyEvent,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { CustomAgGridTheme } from "../../theme/custom-ag-grid-theme";
import { Box } from "@mantine/core";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";

// TODO: Value formatter (copy/download)
let modules = [
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
  onGridReady?: (event: GridReadyEvent<unknown, unknown>) => void;
  showIndex?: boolean;
  withBorder?: boolean;
};

const DataTable = forwardRef(
  (
    { rowData, columnDefs, onGridReady, showIndex, withBorder }: DataTableProps,
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

    return (
      <Box h="100%" w="100%">
        <AgGridReact
          onGridReady={onGridReady}
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
        />
      </Box>
    );
  },
);

export { DataTable };
