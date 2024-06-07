import { Box } from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { useThemeContext } from '../context/ThemeContext';
import CustomCellRenderer from './CustomCellRenderer';

export default forwardRef(function AGTable({ columns, rows }, ref) {
  const themeContext = useThemeContext();
  useImperativeHandle(ref, () => ({ setColumns, addRow, clearRows, addRows }));

  const gridRef = useRef(null);

  const setColumns = useCallback((newColumns) => {
    gridRef.current.api.setGridOption(
      'columnDefs',
      newColumns.map((col) => ({
        headerName: col,
        field: col,
        minWidth: 200,
        flex: 1,
        cellRenderer: CustomCellRenderer,
        sortable: false,
      }))
    );
  }, []);

  const addRows = useCallback((newRows) => {
    gridRef.current.api.applyTransactionAsync({
      add: newRows,
    });
  }, []);

  const addRow = useCallback((newRow) => {
    gridRef.current.api.applyTransactionAsync({
      add: [newRow],
    });
  }, []);

  const clearRows = useCallback(() => {
    const rowData = [];
    gridRef.current.api.forEachNode((node) => {
      rowData.push(node.data);
    });
    gridRef.current.api.applyTransaction({
      remove: rowData,
    });
  }, []);

  return (
    <Box
      className={
        themeContext.darkMode ? 'ag-theme-material-dark' : 'ag-theme-material'
      }
      sx={{
        flex: 1,
        height: '100%',
      }}
    >
      <AgGridReact
        ref={gridRef}
        columnDefs={
          columns
            ? columns.map((col) => ({
                headerName: col,
                field: col,
                minWidth: 100,
                flex: 1,
                cellRenderer: CustomCellRenderer,
                sortable: false,
              }))
            : undefined
        }
        rowData={rows || undefined}
        suppressLoadingOverlay
        asyncTransactionWaitMillis={100}
        pagination={true}
        paginationAutoPageSize={true}
        rowHeight={40}
      />
    </Box>
  );
});
