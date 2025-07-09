import {
  ClientSideRowModelApiModule,
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  ModuleRegistry,
  ValidationModule,
  type ColDef,
  type SizeColumnsToFitGridStrategy,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { CustomAgGridTheme } from "../../theme/custom-ag-grid-theme";
import { Box } from "@mantine/core";
import { useMemo } from "react";

// TODO: Register only the used features
// TODO: Value formatter (copy/download)
let modules = [
  ClientSideRowModelApiModule,
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
];

if (import.meta.env.DEV) {
  modules = [ValidationModule, ...modules];
}

ModuleRegistry.registerModules(modules);

type DataTableProps = {
  columnDefs: ColDef[];
  rowData: unknown[];
};

export function DataTable({ rowData, columnDefs }: DataTableProps) {
  const autoSizeStrategy = useMemo<SizeColumnsToFitGridStrategy>(() => {
    return {
      type: "fitGridWidth",
      defaultMinWidth: 120,
    };
  }, []);

  return (
    <Box h="100%" w="100%">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        autoSizeStrategy={autoSizeStrategy}
        gridOptions={{
          defaultColDef: {
            resizable: true,
            sortable: false,
            filter: false,
            editable: false,
          },
        }}
        theme={CustomAgGridTheme}
        suppressDragLeaveHidesColumns
      />
    </Box>
  );
}
