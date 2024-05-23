import { DataGrid } from '@mui/x-data-grid';
import CustomMUIDatagridNoRowsOverlay from './CustomMUIDatagridNoRowsOverlay';
import CustomMUIDatagridRenderCell from './CustomMUIDatagridRenderCell';
import CustomMUIDatagridToolbar from './CustomMUIDatagridToolbar';
import CustomMUIDatagridValueFormatter from './CustomMUIDatagridValueFormatter';
import CustomMUIPagination from './CustomMUIPagination';

export default function Results({ columns, rows, running }) {
  return (
    <DataGrid
      disableColumnMenu
      disableColumnSorting
      disableRowSelectionOnClick
      disableColumnFilter
      autoPageSize
      slots={{
        toolbar: () => CustomMUIDatagridToolbar({ loading: running }),
        pagination: CustomMUIPagination,
        noRowsOverlay: CustomMUIDatagridNoRowsOverlay,
      }}
      slotProps={{
        toolbar: { running },
      }}
      sx={{
        borderRadius: 0,
        '& .MuiDataGrid-virtualScroller': {
          borderRadius: '0 !important',
        },
        '& .MuiDataGrid-columnHeader--sortable': {
          cursor: 'default !important',
        },
      }}
      rows={rows}
      columns={columns.map((column) => ({
        ...column,
        renderCell: (params) => CustomMUIDatagridRenderCell(params),
        valueFormatter: (value) => CustomMUIDatagridValueFormatter(value),
        flex: 1,
      }))}
    />
  );
}
