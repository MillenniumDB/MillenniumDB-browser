import classes from "./data-table.module.css";

import {
  CellStyleModule,
  ClientSideRowModelApiModule,
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  CsvExportModule,
  ModuleRegistry,
  RowApiModule,
  ValidationModule,
  type ColDef,
  type GridReadyEvent,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { CustomAgGridTheme } from "@/theme/custom-ag-grid-theme";
import { ActionIcon, Box, Tooltip } from "@mantine/core";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { IconDownload } from "@tabler/icons-react";
import {
  DateTime,
  Decimal,
  GraphAnon,
  GraphEdge,
  GraphNode,
  GraphPath,
  IRI,
  SimpleDate,
  StringDatatype,
  StringLang,
  Time,
} from "millenniumdb-driver";

let modules = [
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
  onGridReady?: (event: GridReadyEvent<unknown, unknown>) => void;
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
      console.log(columnDefs);
      gridRef.current?.api.exportDataAsCsv({
        columnKeys: columnDefs.map((colDef) => colDef.colId!),
        fileName: `mdb-${Date.now()}`,
        suppressQuotes: true,
        processCellCallback(params) {
          const { value } = params;
          if (value === null || value === undefined) {
            return "NULL";
          }

          // nodes
          if (value instanceof GraphNode) {
            return value.id;
          } else if (value instanceof GraphAnon) {
            return value.id;
          }

          // edge
          if (value instanceof GraphEdge) {
            return value.id;
          }

          // iri
          if (value instanceof IRI) {
            const { iri } = value;
            return `<${iri}>`;
          }

          // rdf literal
          if (value instanceof StringDatatype) {
            return value.toString();
          } else if (value instanceof StringLang) {
            return value.toString();
          }

          // date
          if (
            value instanceof SimpleDate ||
            value instanceof DateTime ||
            value instanceof Time
          ) {
            return value.toString();
          } else if (value instanceof Decimal) {
            return value.toString();
          }

          // path
          if (value instanceof GraphPath) {
            let res = `(${value.start})`;
            if (!value.length) {
              return res;
            }

            for (const segment of value.segments) {
              const typeStr = segment.type.id;
              switch (segment.direction) {
                case "left":
                  res += `<-[:${typeStr}]-`;
                  break;
                case "right":
                  res += `-[:${typeStr}]->`;
                  break;
                default: // case "undirected":
                  res += `-[:${typeStr}]-`;
                  break;
              }
              res += `(${segment.to})`;
            }

            return res;
          }

          // builtin
          const type = typeof value;
          if (type === "string") {
            return `"${value}"`;
          } else if (type === "boolean") {
            return value.toString();
          } else if (type === "bigint" || type === "number") {
            return value.toString();
          }

          // array
          if (Array.isArray(value)) {
            return `[${value}]`;
          }

          // fallback
          const object = value as object;
          return JSON.stringify(object);
        },
      });
    };

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
