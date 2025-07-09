import {
  AllCommunityModule,
  ModuleRegistry,
  type ColDef,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { CustomAgGridTheme } from "../../theme/custom-ag-grid-theme";
import { Box } from "@mantine/core";

// TODO: Register only the used features
ModuleRegistry.registerModules([AllCommunityModule]);

type DataTableProps = {
  columnDefs: ColDef[];
  rowData: unknown[];
};

export function DataTable(props: DataTableProps) {
  return (
    <Box h="100%" w="100%">
      <AgGridReact
        rowData={props.rowData}
        columnDefs={props.columnDefs}
        gridOptions={{
          defaultColDef: {
            flex: 1,
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
