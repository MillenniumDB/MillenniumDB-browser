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
      autosizeOptions={{
        includeHeaders: true,
        includeOutliers: true,
        expand: true,
      }}
      showCellVerticalBorder
      showColumnVerticalBorder
      disableColumnMenu
      disableColumnSorting
      disableRowSelectionOnClick
      disableMultipleRowSelection
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
        [`& .${gridClasses.columnHeader}`]: {
          cursor: 'default !important',
        },
      }}
      rows={rows}
      columns={columns.map((column) => ({
        ...column,
        renderCell: (params) => CustomMUIDatagridRenderCell(params),
        valueFormatter: (value) => CustomMUIDatagridValueFormatter(value),
        minWidth: 100,
        width: 200,
      }))}
    />
  );
}
