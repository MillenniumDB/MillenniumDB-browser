import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from 'react-router-dom';

import AGTable from '../components/AGTable';

const TABLE_HEIGHT_PX = 500;

function PropertiesTable({ rows }) {
  return (
    <Box sx={{ height: TABLE_HEIGHT_PX }}>
      <AGTable columns={['key', 'value']} rows={rows} targetBlank={false} />
    </Box>
  );
}

function ConnectionsTable({ columns, rows }) {
  return (
    <Box sx={{ height: TABLE_HEIGHT_PX }}>
      <AGTable columns={columns} rows={rows} targetBlank={false} />
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
