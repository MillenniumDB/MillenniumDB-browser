import { DataGrid } from '@mui/x-data-grid';
import CustomMUIDatagridNoRowsOverlay from './CustomMUIDatagridNoRowsOverlay';
import CustomMUIDatagridRenderCell from './CustomMUIDatagridRenderCell';
import CustomMUIDatagridToolbar from './CustomMUIDatagridToolbar';
import CustomMUIDatagridValueFormatter from './CustomMUIDatagridValueFormatter';
import CustomMUIPagination from './CustomMUIPagination';
import { gridClasses } from '@mui/x-data-grid';

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
        [`& .${gridClasses.virtualScroller}`]: {
          borderRadius: '0 !important',
        },
        [`& .${gridClasses['columnHeader--sortable']}`]: {
          cursor: 'default !important',
        },
      }}
      rows={rows}
      columns={columns.map((column) => ({
        ...column,
        renderCell: (params) => CustomMUIDatagridRenderCell(params),
        valueFormatter: (value) => CustomMUIDatagridValueFormatter(value),
        flex: 1,
        minWidth: 100,
      }))}
    />
  );
}
