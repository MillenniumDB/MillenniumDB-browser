import { Box, Pagination } from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useState } from 'react';
import CustomCellRenderer from './CustomCellRenderer';

function CustomPagination({
  agGridPageCount,
  agGridPage,
  agGridHandlePageChange,
}) {
  const themeContext = useThemeContext();

  return (
    <Box
      sx={{
        userSelect: 'none',
        py: 1,
        border: 1,
        borderTop: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: themeContext.darkMode
          ? 'rgba(255, 255, 255, 0.12)'
          : 'rgba(0, 0, 0, 0.12)',
      }}
    >
      <Pagination
        size="medium"
        color="primary"
        page={agGridPage + 1}
        count={agGridPageCount}
        onChange={(_event, value) => agGridHandlePageChange(value - 1)}
      />
    </Box>
  );
}

export default forwardRef(function AGTable(
  { columns, rows, targetBlank },
  ref
) {
  const themeContext = useThemeContext();
  useImperativeHandle(ref, () => ({ setColumns, clearRows, addRows }));

  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  const gridRef = useRef(null);

  const setColumns = useCallback((newColumns) => {
    gridRef.current.api.setGridOption(
      'columnDefs',
      newColumns.map((col) => ({
        headerName: col,
        field: col,
        minWidth: 200,
        flex: 1,
        cellRenderer: (props) => CustomCellRenderer(props, targetBlank),
        sortable: false,
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addRows = useCallback((newRows) => {
    gridRef.current.api.applyTransactionAsync({
      add: newRows,
    });
  }, []);

  const clearRows = useCallback(() => {
    const rowIds = [];
    gridRef.current.api.forEachNode((node) => {
      const { __rowId } = node.data;
      rowIds.push({ __rowId });
    });
    gridRef.current.api.applyTransactionAsync({
      remove: rowIds,
    });
  }, []);

  const handleOnPaginationChanged = () => {
    setPageCount(gridRef.current.api.paginationGetTotalPages());
    setCurrentPage(gridRef.current.api.paginationGetCurrentPage());
  };

  const handlePageChange = (pageNumber) => {
    gridRef.current.api.paginationGoToPage(pageNumber);
  };

  const handleGetRowId = useCallback((params) => params.data.__rowId, []);

  return (
    <Box
      className={
        themeContext.darkMode ? 'ag-theme-material-dark' : 'ag-theme-material'
      }
      sx={{
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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
                cellRenderer: (props) => CustomCellRenderer(props, targetBlank),
                sortable: false,
              }))
            : undefined
        }
        getRowId={handleGetRowId}
        rowData={
          rows
            ? rows.map((row, rowIdx) => ({ ...row, __rowId: rowIdx }))
            : undefined
        }
        suppressLoadingOverlay
        asyncTransactionWaitMillis={100}
        pagination={true}
        paginationAutoPageSize={true}
        rowHeight={40}
        enableCellTextSelection
        suppressFieldDotNotation
        columnHoverHighlight
        suppressPaginationPanel
        onPaginationChanged={handleOnPaginationChanged}
      />
      <CustomPagination
        agGridPageCount={pageCount}
        agGridPage={currentPage}
        agGridHandlePageChange={handlePageChange}
      />
    </Box>
  );
});
