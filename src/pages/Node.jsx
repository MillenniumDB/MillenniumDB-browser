import {
  Alert,
  AlertTitle,
  Backdrop,
  Box,
  Chip,
  CircularProgress,
  Container,
  Grow,
  Stack,
  Typography,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
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

function ConnectionsTable({ columns, rows, sortColumn }) {
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
            sortModel: [{ field: sortColumn, sort: 'asc' }],
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

function NonExistingNodeAlert({ error }) {
  return (
    <Grow in>
      <Alert severity="error" variant="standard" sx={{ borderRadius: 0 }}>
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    </Grow>
  );
}

export default function Node() {
  const [loading, setLoading] = useState(true);
  const driverContext = useDriverContext();
  const [description, setDescription] = useState(null);
  const [error, setError] = useState(null);

  const { namedNode } = useParams();

  useEffect(() => {
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

    setDescription(null);
    setError(null);
    setLoading(true);
    describe(namedNode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [namedNode]);

  return (
    <>
      <Helmet title={`Node "${namedNode}" | MillenniumDB`} />

      <Backdrop
        open={loading}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="primary" />
      </Backdrop>

      <Container maxWidth="md" disableGutters>
        <Stack sx={{ p: 4 }} spacing={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Typography variant="h3">{namedNode}</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                flexWrap: 'wrap',
              }}
            >
              {description?.labels.map((label, labelIdx) => (
                <Grow key={labelIdx} in>
                  <Chip size="small" color="secondary" label={label} />
                </Grow>
              ))}
            </Box>
          </Box>

          {!loading &&
            (error ? (
              <NonExistingNodeAlert error={error} />
            ) : (
              <>
                <Grow in>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      Properties
                    </Typography>
                    <PropertiesTable rows={description?.properties} />
                  </Box>
                </Grow>
                <Grow in>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      Outgoing connections
                    </Typography>
                    <ConnectionsTable
                      columns={['type', 'to']}
                      rows={description?.outgoing}
                      sortColumn="type"
                    />
                  </Box>
                </Grow>

                <Grow in>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      Incoming connections
                    </Typography>
                    <ConnectionsTable
                      columns={['type', 'from']}
                      rows={description?.incoming}
                      sortColumn="type"
                    />
                  </Box>
                </Grow>
              </>
            ))}
        </Stack>
      </Container>
    </>
  );
}
