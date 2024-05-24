import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from 'react-router-dom';
import CustomMUIDatagridNoRowsOverlay from '../components/CustomMUIDatagridNoRowsOverlay';
import CustomMUIDatagridRenderCell from '../components/CustomMUIDatagridRenderCell';
import CustomMUIDatagridToolbar from '../components/CustomMUIDatagridToolbar';
import CustomMUIDatagridValueFormatter from '../components/CustomMUIDatagridValueFormatter';
import CustomMUIPagination from '../components/CustomMUIPagination';
import { useThemeContext } from '../context/ThemeContext';

// HeaderHeight + FooterHeight + (NumRows * RowHeight)
const TABLE_HEIGHT_PX = 78 + 52 + 8 * 36;

function PropertiesTable({ rows, loading }) {
  const themeContext = useThemeContext();

  return (
    <Box sx={{ height: TABLE_HEIGHT_PX }}>
      <DataGrid
        loading={loading}
        slots={{
          toolbar: () => CustomMUIDatagridToolbar({ loading }),
          pagination: CustomMUIPagination,
          noRowsOverlay: CustomMUIDatagridNoRowsOverlay,
          loadingOverlay: LinearProgress,
        }}
        autoPageSize
        density="compact"
        disableColumnSorting
        disableRowSelectionOnClick
        disableColumnMenu
        initialState={{
          sorting: {
            sortModel: [{ field: 'key', sort: 'asc' }],
          },
        }}
        columns={[
          {
            field: 'key',
            cellClassName: 'properties-table-key',
            valueFormatter: (value) =>
              CustomMUIDatagridValueFormatter(value, false),
            flex: 1,
            minWidth: 100,
          },
          {
            field: 'value',
            renderCell: (params) => CustomMUIDatagridRenderCell(params),
            valueFormatter: (value) =>
              CustomMUIDatagridValueFormatter(value, false),
            flex: 3,
            minWidth: 100,
          },
        ]}
        rows={rows || []}
        sx={{
          borderRadius: 0,
          '& .MuiDataGrid-virtualScroller': {
            borderRadius: '0 !important',
          },
          '& .MuiDataGrid-columnHeader--sortable': {
            cursor: 'default !important',
          },
          '& .properties-table-key': {
            backgroundColor: themeContext.darkMode ? '#21212180' : '#ededed80',
          },
        }}
      />
    </Box>
  );
}

function ConnectionsTable({ columns, rows }) {
  return (
    <Box sx={{ height: TABLE_HEIGHT_PX }}>
      <DataGrid
        slots={{
          toolbar: () => CustomMUIDatagridToolbar({ loading: false }),
          pagination: CustomMUIPagination,
          noRowsOverlay: CustomMUIDatagridNoRowsOverlay,
          loadingOverlay: LinearProgress,
        }}
        autoPageSize
        density="compact"
        disableColumnSorting
        disableRowSelectionOnClick
        disableColumnMenu
        initialState={{
          sorting: {
            sortModel: [{ field: 'type', sort: 'asc' }],
          },
        }}
        columns={columns.map((column) => ({
          field: column,
          renderCell: (params) => CustomMUIDatagridRenderCell(params, false),
          valueFormatter: (value) => CustomMUIDatagridValueFormatter(value),
          flex: 1,
          minWidth: 100,
        }))}
        rows={rows || []}
        sx={{
          borderRadius: 0,
          '& .MuiDataGrid-virtualScroller': {
            borderRadius: '0 !important',
          },
          '& .MuiDataGrid-columnHeader--sortable': {
            cursor: 'default !important',
          },
        }}
      />
    </Box>
  );
}

export default function Node() {
  const [description, setDescription] = useState(null);

  const data = useLoaderData();
  const { namedNode } = useParams();

  useEffect(() => {
    setDescription({
      labels: data.labels,
      properties: Object.entries(data.properties).map(
        ([key, value], propertyIdx) => ({
          id: propertyIdx,
          key,
          value,
        })
      ),
      outgoing: data.outgoing.map(({ to, type }, outgoingIdx) => ({
        id: outgoingIdx,
        to,
        type,
      })),
      incoming: data.incoming.map(({ from, type }, incomingIdx) => ({
        id: incomingIdx,
        from,
        type,
      })),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [namedNode]);

  return (
    <>
      <Helmet title={`Node "${namedNode}" | MillenniumDB`} />

      <Container maxWidth="md" disableGutters>
        <Stack sx={{ p: 4 }}>
          <Typography variant="h3">{namedNode}</Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, py: 1 }}>
            {description?.labels.map((label, labelIdx) => (
              <Chip
                key={labelIdx}
                size="small"
                color="secondary"
                label={label}
              />
            ))}
          </Box>

          <Box sx={{ py: 2 }}>
            <Typography variant="h5" gutterBottom>
              {'Properties'}
            </Typography>
            <PropertiesTable rows={description?.properties} />
          </Box>

          <Box sx={{ py: 2 }}>
            <Typography variant="h5" gutterBottom>
              {'Outgoing Connections'}
            </Typography>
            <ConnectionsTable
              columns={['type', 'to']}
              rows={description?.outgoing}
            />
          </Box>

          <Box sx={{ py: 2 }}>
            <Typography variant="h5" gutterBottom>
              {'Incoming Connections'}
            </Typography>
            <ConnectionsTable
              columns={['type', 'from']}
              rows={description?.incoming}
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
