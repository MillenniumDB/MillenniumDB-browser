import {
  Alert,
  AlertTitle,
  Backdrop,
  Box,
  Chip,
  CircularProgress,
  Container,
  Grow,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { DataGrid } from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import CustomMUIDatagridNoRowsOverlay from '../components/CustomMUIDatagridNoRowsOverlay';
import CustomMUIDatagridRenderCell from '../components/CustomMUIDatagridRenderCell';
import CustomMUIDatagridToolbar from '../components/CustomMUIDatagridToolbar';
import CustomMUIDatagridValueFormatter from '../components/CustomMUIDatagridValueFormatter';
import CustomMUIPagination from '../components/CustomMUIPagination';
import { useDriverContext } from '../context/DriverContext';
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

function ErrorAlert({ error }) {
  return (
    <Alert severity="error" variant="standard" sx={{ borderRadius: 0 }}>
      <AlertTitle>Error</AlertTitle>
      {error}
    </Alert>
  );
}

export default function Node() {
  const [loading, setLoading] = useState(true);
  const driverContext = useDriverContext();
  const [description, setDescription] = useState(null);
  const [error, setError] = useState(null);

  const { namedNode } = useParams();

  const describe = async (namedNode) => {
    try {
      const session = driverContext.getSession();
      const result = session.run(`DESCRIBE ${namedNode}`);

      const records = await result.records();
      if (records.length > 0) {
        const record = records[0].toObject();
        setDescription({
          labels: record.labels,
          properties: Object.entries(record.properties).map(
            ([key, value], propertyIdx) => ({
              id: propertyIdx,
              key,
              value,
            })
          ),
          outgoing: record.outgoing.map(({ to, type }, outgoingIdx) => ({
            id: outgoingIdx,
            to,
            type,
          })),
          incoming: record.incoming.map(({ from, type }, incomingIdx) => ({
            id: incomingIdx,
            from,
            type,
          })),
        });
      } else {
        setError(`The node "${namedNode}" does not exist in the database.`);
      }
    } catch (error) {
      setError(error.toString());
    }
    setLoading(false);
  };

  useEffect(() => {
    setDescription(null);
    setError(null);
    setLoading(true);
  }, [namedNode]);

  useEffect(() => {
    if (loading) {
      describe(namedNode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <>
      <Helmet title={`Node "${namedNode}" | MillenniumDB`} />

      <Container maxWidth="md" disableGutters>
        <Stack sx={{ p: 4 }}>
          {error ? (
            <ErrorAlert error={error} />
          ) : (
            <>
              <Grow in>
                <Typography variant="h3">
                  {loading ? <Skeleton /> : namedNode}
                </Typography>
              </Grow>

              <Grow in>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, py: 1 }}>
                  {loading
                    ? [...Array(3)].map((_, idx) => (
                        <Skeleton key={idx} width={64}>
                          <Chip />
                        </Skeleton>
                      ))
                    : description?.labels.map((label, labelIdx) => (
                        <Chip
                          key={labelIdx}
                          size="small"
                          color="secondary"
                          label={label}
                        />
                      ))}
                </Box>
              </Grow>

              <Grow in>
                <Box sx={{ py: 2 }}>
                  <Typography variant="h5" gutterBottom>
                    {loading ? <Skeleton /> : 'Properties'}
                  </Typography>
                  {loading ? (
                    <Skeleton variant="rectangular" height={TABLE_HEIGHT_PX} />
                  ) : (
                    <PropertiesTable rows={description?.properties} />
                  )}
                </Box>
              </Grow>

              <Grow in>
                <Box sx={{ py: 2 }}>
                  <Typography variant="h5" gutterBottom>
                    {loading ? <Skeleton /> : 'Outgoing Connections'}
                  </Typography>
                  {loading ? (
                    <Skeleton variant="rectangular" height={TABLE_HEIGHT_PX} />
                  ) : (
                    <ConnectionsTable
                      columns={['type', 'to']}
                      rows={description?.outgoing}
                    />
                  )}
                </Box>
              </Grow>

              <Grow in>
                <Box sx={{ py: 2 }}>
                  <Typography variant="h5" gutterBottom>
                    {loading ? <Skeleton /> : 'Incoming Connections'}
                  </Typography>
                  {loading ? (
                    <Skeleton variant="rectangular" height={TABLE_HEIGHT_PX} />
                  ) : (
                    <ConnectionsTable
                      columns={['type', 'from']}
                      rows={description?.incoming}
                    />
                  )}
                </Box>
              </Grow>
            </>
          )}
        </Stack>
      </Container>
    </>
  );
}
