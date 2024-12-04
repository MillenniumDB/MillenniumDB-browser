import { useTheme } from '@emotion/react';
import { Box, Pagination } from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
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
  { columns, rows, onObjectClick, onIriClick },
  ref
) {
  const theme = useTheme();

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
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      minWidth: 100,
      sortable: false,
      cellDataType: false,
      cellRenderer: (props) =>
        CustomCellRenderer(props, onObjectClick, onIriClick),
    }),
    [onObjectClick, onIriClick]
  );

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
        columnDefs={columns || undefined}
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
        rowHeight={36}
        enableCellTextSelection
        suppressFieldDotNotation
        columnHoverHighlight
        suppressPaginationPanel
        onPaginationChanged={handleOnPaginationChanged}
      />
      {pageCount > 1 && (
        <CustomPagination
          agGridPageCount={pageCount}
          agGridPage={currentPage}
          agGridHandlePageChange={handlePageChange}
        />
      )}
    </Box>
  );
});
