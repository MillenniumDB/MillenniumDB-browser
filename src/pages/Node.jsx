import { Box, Container, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDriverContext } from '../context/DriverContext';
import CustomMUIDatagridNoRowsOverlay from '../components/CustomMUIDatagridNoRowsOverlay';
import CustomMUIDatagridRenderCell from '../components/CustomMUIDatagridRenderCell';
import CustomMUIDatagridToolbar from '../components/CustomMUIDatagridToolbar';
import CustomMUIDatagridValueFormatter from '../components/CustomMUIDatagridValueFormatter';
import CustomMUIPagination from '../components/CustomMUIPagination';
import LinearProgress from '@mui/material/LinearProgress';

// HeaderHeight + FooterHeight + (NumRows * RowHeight)
const TABLE_HEIGHT_PX = 78 + 52 + 8 * 36;

function CustomTable({ columns, rows, sortColumn, loading }) {
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
            sortModel: [{ field: sortColumn, sort: 'asc' }],
          },
        }}
        columns={columns.map((column) => ({
          field: column,
          renderCell: (params) => CustomMUIDatagridRenderCell(params, false),
          valueFormatter: (value) => CustomMUIDatagridValueFormatter(value),
          noRowsOverlay: CustomMUIDatagridNoRowsOverlay,
          flex: 1,
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
  const [loading, setLoading] = useState(true);
  const driverContext = useDriverContext();
  const [description, setDescription] = useState({
    labels: [],
    properties: [],
    outgoing: [],
    incoming: [],
  });

  const { namedNode } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    const describe = async (namedNode) => {
      setDescription(null);
      setLoading(true);
      const session = driverContext.getSession();
      const result = session.run(`DESCRIBE ${namedNode}`);
      const records = await result.records();
      const record = records[0].toObject();
      setTimeout(() => {
        setDescription({
          labels: record.labels.map((label, labelIdx) => ({
            id: labelIdx,
            label,
          })),
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
        setLoading(false);
      }, 2000);
    };

    describe(namedNode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [namedNode]);

  return (
    <Container maxWidth="lg" disableGutters>
      <Stack sx={{ py: 4 }} spacing={4}>
        <Typography variant="h3">{namedNode}</Typography>
        <Box>
          <Typography variant="h5" gutterBottom>
            Labels
          </Typography>
          <CustomTable
            loading={loading}
            columns={['label']}
            rows={description?.labels}
            sortColumn="label"
          />
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom>
            Properties
          </Typography>
          <CustomTable
            loading={loading}
            columns={['key', 'value']}
            rows={description?.properties}
            sortColumn="key"
          />
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom>
            Outgoing connections
          </Typography>
          <CustomTable
            loading={loading}
            columns={['type', 'to']}
            rows={description?.outgoing}
            sortColumn="type"
          />
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom>
            Incoming connections
          </Typography>
          <CustomTable
            loading={loading}
            columns={['type', 'from']}
            rows={description?.incoming}
            sortColumn="type"
          />
        </Box>
      </Stack>
    </Container>
  );
}
