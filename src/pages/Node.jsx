import { Box, Chip, Link, Container, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from 'react-router-dom';

import AGTable from '../components/AGTable';
import { types } from 'millenniumdb-driver';
import { graphObjectToTypeString } from '../utils/GraphObjectUtils';

const TABLE_HEIGHT_PX = 500;

function PropertiesTable({ rows }) {
  return (
    <Box sx={{ height: TABLE_HEIGHT_PX }}>
      <AGTable
        columns={[
          { field: 'key', headerName: 'key' },
          { field: 'value', headerName: 'value' },
        ]}
        rows={rows}
      />
    </Box>
  );
}

function ConnectionsTable({ columns, rows }) {
  return (
    <Box sx={{ height: TABLE_HEIGHT_PX }}>
      <AGTable
        columns={columns}
        rows={rows}
        openInNewTab={false}
      />
    </Box>
  );
}

export default function Node() {
  const [description, setDescription] = useState(null);
  const [isEdge, setIsEdge] = useState(false);

  const data = useLoaderData();
  const { objectId } = useParams();

  useEffect(() => {
    const isEdgeCurrent = data.object.constructor === types.GraphEdge;
    setIsEdge(isEdgeCurrent);

    const newDescription = {
      properties: Object.entries(data.properties).map(
        ([key, value], propertyIdx) => ({
          id: propertyIdx,
          key,
          value,
        })
      ),
      object: data.object,
    };
    if (!isEdgeCurrent) {
      newDescription.labels = data.labels;
      newDescription.outgoing = data.outgoing.map(
        ({ type, to, edge }, outgoingIdx) => ({
          id: outgoingIdx,
          type,
          to,
          edge,
        })
      );
      newDescription.incoming = data.incoming.map(
        ({ type, from, edge }, incomingIdx) => ({
          id: incomingIdx,
          type,
          from,
          edge,
        })
      );
    } else {
      newDescription.label = data.type.toString();
      newDescription.edgeNodes = { from: data.from, to: data.to };
    }
    setDescription(newDescription);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objectId, isEdge]);

  return (
    <>
      <Helmet title={`Node ${objectId} | MillenniumDB`} />

      <Container maxWidth="md" disableGutters>
        <Stack sx={{ p: 4 }}>
          <Typography variant="h3">{objectId}</Typography>
          <Typography variant="body2" component="p" color="text.secondary">
            {graphObjectToTypeString(description?.object)}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pt: 1 }}>
            {!isEdge ? (
              description?.labels.map((label, labelIdx) => (
                <Chip key={labelIdx} size="small" color="primary" label={label} />
              ))
            ) : (
              <Chip size="small" color="secondary" label={description?.label} />
            )}
          </Box>

          {isEdge &&
            <Box
              sx={{
                '& > *': {
                  verticalAlign: 'middle',
                },
                pt: 6
              }}
            >
              <Typography variant="h5" gutterBottom>
                {'Connection'}
              </Typography>
              <Link href={`/object/${description?.edgeNodes.from.toString()}`}>
                <Chip size="small" color="primary" label={description?.edgeNodes.from.toString()} />
              </Link>
              <ArrowForwardIcon fontSize="small" />
              <Link href={`/object/${description?.edgeNodes.to.toString()}`}>
                <Chip size="small" color="primary" label={description?.edgeNodes.to.toString()} />
              </Link>
            </Box>
          }

          <Box sx={{ pt: 6 }}>
            <Typography variant="h5" gutterBottom>
              {'Properties'}
            </Typography>
            <PropertiesTable rows={description?.properties} />
          </Box>

          {!isEdge &&
            <>
              <Box sx={{ pt: 6 }}>
                <Typography variant="h5" gutterBottom>
                  {'Outgoing Connections'}
                </Typography>
                <ConnectionsTable
                  columns={[
                    { field: 'type', headerName: 'type' },
                    { field: 'to', headerName: 'to' },
                    { field: 'edge', headerName: 'edge' },
                  ]}
                  rows={description?.outgoing}
                />
              </Box>

              <Box sx={{ pt: 6 }}>
                <Typography variant="h5" gutterBottom>
                  {'Incoming Connections'}
                </Typography>
                <ConnectionsTable
                  columns={[
                    { field: 'type', headerName: 'type' },
                    { field: 'from', headerName: 'from' },
                    { field: 'edge', headerName: 'edge' },
                  ]}
                  rows={description?.incoming}
                />
              </Box>
            </>
          }
        </Stack>
      </Container>
    </>
  );
}
