import {
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  IconButton,
  Skeleton,
  Toolbar,
  Typography,
} from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { types } from 'millenniumdb-driver';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDriverContext } from '../context/DriverContext';
import {
  graphObjectToTypeString,
  graphObjectToReactForceGraphNode,
} from '../utils/GraphObjectUtils';
import AGTable from './AGTable';
import CloseIcon from '@mui/icons-material/Close';
import { enqueueSnackbar } from 'notistack';

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

const GraphObjectDetails = React.memo(
  ({ selectedNode, setSelectedNode, addNodes, addLinks }) => {
    const driverContext = useDriverContext();

    const scrollableAreaRef = useRef(null);

    const [labels, setLabels] = useState([]);
    const [properties, setProperties] = useState([]);
    const [outgoing, setOutgoing] = useState([]);
    const [incoming, setIncoming] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isLiteral, setIsLiteral] = useState(false);

    const addConnection = ({ from, to, type, edge }) => {
      const source = graphObjectToReactForceGraphNode(from);
      const target = graphObjectToReactForceGraphNode(to);
      const edgeNode = graphObjectToReactForceGraphNode(edge);
      edgeNode.isEdge = true;
      addNodes([source, target, edgeNode]);
      addLinks([
        {
          id: `${source.id}->${edgeNode.id}`,
          source: source.id,
          target: edgeNode.id,
        },
        {
          id: `${edgeNode.id}->${target.id}`,
          source: edgeNode.id,
          target: target.id,
        },
      ]);
    };

    const handleShowInGraphView = useCallback(() => {
      addNodes([selectedNode]);
    }, [addNodes, selectedNode]);

    const describe = useCallback(
      async (selectedNode) => {
        const { value } = selectedNode;

        setIsLiteral(
          !typeof value === 'object' ||
            ![
              types.GraphNode,
              types.GraphAnon,
              types.GraphEdge,
              types.IRI,
            ].includes(value.constructor)
        );

        if (typeof value === 'object') {
          if (value.constructor === types.GraphNode) {
            setLoading(true);
            const session = driverContext.driver.session();
            try {
              const query = `DESCRIBE ${value.id}`;
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
                describeResult.outgoing.map(({ type, edge, to }) => ({
                  type,
                  to,
                  edge,
                }))
              );
              setIncoming(
                describeResult.incoming.map(({ type, edge, from }) => ({
                  type,
                  from,
                  edge,
                }))
              );
            } catch (error) {
              enqueueSnackbar({
                message: error.message,
                variant: 'error',
              });
            } finally {
              session.close();
              setLoading(false);
            }
          }
        }
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

    useEffect(() => {
      const drawer = scrollableAreaRef.current;
      if (drawer) {
        drawer.scrollTo(0, 0);
      }
    }, [scrollableAreaRef, selectedNode]);

    return (
      <Drawer
        transitionDuration={100}
        open={selectedNode !== null}
        variant="persistent"
        sx={(theme) => ({
          width: 500,
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
        <Box sx={{ p: 1 }}>
          <IconButton
            onClick={() => setSelectedNode(null)}
            size="small"
            sx={{ float: 'right' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box ref={scrollableAreaRef} sx={{ overflow: 'scroll' }}>
          <Box
            sx={{
              p: 2,
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ wordWrap: 'break-word' }}
            >
              {selectedNode?.label || ''}
            </Typography>
            <Typography variant="body2" component="p" color="text.secondary">
              {selectedNode?.value !== undefined &&
                graphObjectToTypeString(selectedNode.value)}
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

            <Box
              sx={{
                pt: 2,
                px: 2,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Button
                variant="outlined"
                size="small"
                onClick={handleShowInGraphView}
              >
                Show in GraphView
              </Button>
            </Box>
          </Box>
          {!isLiteral && (
            <>
              <Divider />

              <GraphObjectDetailsSection title="Properties">
                <Box sx={{ height: 400 }}>
                  {loading ? (
                    <Skeleton variant="rectangular" height="inherit" />
                  ) : (
                    <AGTable
                      columns={[
                        { field: 'key', headerName: 'key' },
                        { field: 'value', headerName: 'value' },
                      ]}
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
                      columns={[
                        { field: 'type', headerName: 'type' },
                        { field: 'to', headerName: 'to' },
                        { field: 'edge', headerName: 'edge' },
                      ]}
                      rows={outgoing}
                      targetBlank={true}
                      onRowClicked={(row) =>
                        addConnection({
                          from: selectedNode.value,
                          to: row.data.to,
                          type: row.data.type,
                          edge: row.data.edge,
                        })
                      }
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
                      columns={[
                        { field: 'type', headerName: 'type' },
                        { field: 'from', headerName: 'from' },
                        { field: 'edge', headerName: 'edge' },
                      ]}
                      rows={incoming}
                      targetBlank={true}
                      onRowClicked={(row) =>
                        addConnection({
                          from: row.data.from,
                          to: selectedNode.value,
                          type: row.data.type,
                          edge: row.data.edge,
                        })
                      }
                    />
                  )}
                </Box>
              </GraphObjectDetailsSection>
            </>
          )}
        </Box>
      </Drawer>
    );
  }
);

export default GraphObjectDetails;
