import {
  Box,
  Chip,
  Divider,
  Drawer,
  Skeleton,
  Toolbar,
  Typography,
} from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { types } from 'millenniumdb-driver';
import React, { useCallback, useEffect, useState } from 'react';
import { useDriverContext } from '../context/DriverContext';
import { graphObjectToTypeString } from '../utils/GraphObjectUtils';
import AGTable from './AGTable';

const GraphObjectDetailsSection = ({ title, children }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" component="p" sx={{ pb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

const GraphObjectDetails = React.memo(({ selectedNode, setSelectedNode }) => {
  const driverContext = useDriverContext();

  const [labels, setLabels] = useState([]);
  const [properties, setProperties] = useState([]);
  const [outgoing, setOutgoing] = useState([]);
  const [incoming, setIncoming] = useState([]);
  const [loading, setLoading] = useState(false);

  const describe = useCallback(
    async (selectedNode) => {
      if (
        typeof selectedNode.object === 'object' &&
        selectedNode.object.constructor === types.GraphNode
      ) {
      }
      // TODO: Handle datatype clicks

      // TODO: Handle error
      setLoading(true);
      const session = driverContext.getSession();
      const query = `DESCRIBE ${selectedNode.id}`;
      const result = session.run(query);
      const records = await result.records();
      const describeResult = records[0].toObject();

      setLabels(describeResult.labels);
      setProperties(
        Object.keys(describeResult.properties).map((key) => ({
          key,
          value: describeResult.properties[key],
        }))
      );
      setOutgoing(
        describeResult.outgoing.map(({ type, to }) => ({ type, to }))
      );
      setIncoming(
        describeResult.incoming.map(({ type, from }) => ({ type, from }))
      );
      setLoading(false);
    },
    [driverContext]
  );

  useEffect(() => {
    let active = true;

    setLabels([]);
    setProperties([]);
    setOutgoing([]);
    setIncoming([]);

    if (active && selectedNode?.id) {
      describe(selectedNode);
    }

    return () => {
      active = false;
    };
  }, [selectedNode, describe]);

  return (
    <Drawer
      transitionDuration={100}
      open={selectedNode !== null}
      variant="persistent"
      sx={(theme) => ({
        width: 400,
        [`& .MuiDrawer-paper`]: {
          width: 'inherit',
          boxSizing: 'border-box',
        },
        [`${theme.breakpoints.down('md')}`]: {
          width: '100vw',
        },
        overflow: 'hidden',
      })}
    >
      <Toolbar sx={{ mb: '88px' }} />
      <Divider />
      <Box sx={{ overflow: 'scroll' }}>
        <Box
          sx={{
            p: 2,
          }}
        >
          <Typography variant="h5" component="h5">
            {loading ? <Skeleton /> : selectedNode?.id || ''}
          </Typography>
          <Typography variant="body2" component="p" color="text.secondary">
            {loading ? (
              <Skeleton />
            ) : selectedNode?.object ? (
              graphObjectToTypeString(selectedNode.object)
            ) : (
              ''
            )}
          </Typography>

          {labels.length ? (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pt: 1 }}>
              {labels.map((label, labelIdx) => (
                <Chip
                  key={labelIdx}
                  size="small"
                  color="primary"
                  label={label}
                />
              ))}
            </Box>
          ) : null}
        </Box>
        <Divider />
        <GraphObjectDetailsSection title="Properties">
          <Box sx={{ height: 400 }}>
            {loading ? (
              <Skeleton variant="rectangular" height="inherit" />
            ) : (
              <AGTable
                columns={['key', 'value']}
                rows={properties}
                targetBlank={false}
              />
            )}
          </Box>
        </GraphObjectDetailsSection>
        <Divider />

        <GraphObjectDetailsSection title="Outgoing">
          <Box sx={{ height: 400 }}>
            {loading ? (
              <Skeleton variant="rectangular" height="inherit" />
            ) : (
              <AGTable
                columns={['type', 'to']}
                rows={outgoing}
                targetBlank={false}
              />
            )}
          </Box>
        </GraphObjectDetailsSection>
        <Divider />

        <GraphObjectDetailsSection title="Incoming">
          <Box sx={{ height: 400 }}>
            {loading ? (
              <Skeleton variant="rectangular" height="inherit" />
            ) : (
              <AGTable
                columns={['type', 'from']}
                rows={incoming}
                targetBlank={false}
              />
            )}
          </Box>
        </GraphObjectDetailsSection>
      </Box>
    </Drawer>
  );
});

export default GraphObjectDetails;
