import { useTheme } from '@emotion/react';
import { Box, Pagination } from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
  useMemo,
} from 'react';
import CustomCellRenderer from './CustomCellRenderer';

const CustomPagination = ({
  agGridPageCount,
  agGridPage,
  agGridHandlePageChange,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: '0 0 auto',
        userSelect: 'none',
        py: 1,
        border: 1,
        borderTop: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:
          theme.palette.mode === 'dark'
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
        siblingCount={0}
      />
    </Box>
  );
};

export default React.forwardRef(function AGTable(
  { columns, rows, targetBlank },
  ref
) {
  const theme = useTheme();

  useImperativeHandle(ref, () => ({ setColumns, addRow, clearRows, addRows }));

  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  const gridRef = useRef(null);

  const setColumns = useCallback((newColumns) => {
    gridRef.current.api.setGridOption(
      'columnDefs',
      newColumns.map((col) => ({
        headerName: col,
        field: col,
        cellRenderer: (props) => CustomCellRenderer(props, targetBlank),
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      minWidth: 100,
      sortable: false,
    }),
    []
  );

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

  const handleOnPaginationChanged = () => {
    setPageCount(gridRef.current.api.paginationGetTotalPages());
    setCurrentPage(gridRef.current.api.paginationGetCurrentPage());
  };

  const handlePageChange = (pageNumber) => {
    gridRef.current.api.paginationGoToPage(pageNumber);
  };

  return (
    <Box
      className={
        theme.palette.mode === 'dark'
          ? 'ag-theme-material-dark'
          : 'ag-theme-material'
      }
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AgGridReact
        ref={gridRef}
        containerStyle={{ flex: 1 }}
        headerHeight={36}
        defaultColDef={defaultColDef}
        columnDefs={
          columns
            ? columns.map((col) => ({
                headerName: col,
                field: col,
                cellRenderer: (props) => CustomCellRenderer(props, targetBlank),
                tooltipValueGetter: (params) => 'hola',
              }))
            : undefined
        }
        rowData={rows || undefined}
        suppressLoadingOverlay
        asyncTransactionWaitMillis={100}
        pagination={true}
        paginationAutoPageSize={true}
        rowHeight={36}
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
