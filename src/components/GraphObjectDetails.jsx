import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
  Link
} from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { types } from 'millenniumdb-driver';
import { enqueueSnackbar } from 'notistack';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDriverContext } from '../context/DriverContext';
import {
  graphObjectToReactForceGraphNode,
  graphObjectToString,
  graphObjectToTypeString,
} from '../utils/GraphObjectUtils';
import AGTable from './AGTable';

const Actions = ({ rowAction }) => {
  return (
    <>
      <Button variant="text" size="small" onClick={rowAction}>
        Show
      </Button>
    </>
  );
};

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

const RDFGraphObjectDetails = React.memo(
  ({ selectedNode, setSelectedNode, addNodes, addConnection }) => {
    const driverContext = useDriverContext();

    const scrollableAreaRef = useRef(null);

    const [outgoing, setOutgoing] = useState([]);
    const [incoming, setIncoming] = useState([]);
    const [loading, setLoading] = useState(false);

    // TODO: fix addConnection for RDF in GraphView

    // const addConnection = useCallback(
    //   ({ subject, predicate, object }) => {
    //     const subjectNode = graphObjectToReactForceGraphNode(subject);
    //     const predicateNode = graphObjectToReactForceGraphNode(predicate);
    //     const objectNode = graphObjectToReactForceGraphNode(object);
    //     predicateNode.isEdge = true;
    //     predicateNode.id = `${subjectNode.id}-${predicateNode.id}-${objectNode.id}`;
    //     addNodes([subjectNode, predicateNode, objectNode]);
    //     addLinks([
    //       {
    //         id: `${subjectNode.id}-${predicateNode.id}->${objectNode.id}-1`,
    //         source: subjectNode.id,
    //         target: predicateNode.id,
    //       },
    //       {
    //         id: `${subjectNode.id}-${predicateNode.id}->${objectNode.id}-2`,
    //         source: predicateNode.id,
    //         target: objectNode.id,
    //       },
    //     ]);
    //   },
    //   [addNodes, addLinks]
    // );

    const addOutgoing = useCallback(
      (predicate, object) => {
        if (selectedNode?.value) {
          addConnection({ subject: selectedNode.value, predicate, object });
        }
      },
      [selectedNode, addConnection]
    );

    const addIncoming = useCallback(
      (predicate, subject) => {
        if (selectedNode?.value) {
          addConnection({ subject, predicate, object: selectedNode.value });
        }
      },
      [selectedNode, addConnection]
    );

    const handleShowInGraphView = useCallback(() => {
      addNodes([selectedNode]);
    }, [addNodes, selectedNode]);

    const describe = useCallback(
      async (selectedNode) => {
        const { value } = selectedNode;

        const session = driverContext.driver.session();
        try {
          if (typeof value === 'object') {
            if (value.constructor === types.IRI) {
              setLoading(true);
              const queryOutgoing = `SELECT ?predicate ?object WHERE { <${value.toString()}> ?predicate ?object . }`;
              const resultOutgoing = session.run(queryOutgoing);
              const recordsOutgoing = await resultOutgoing.records();
              setOutgoing(recordsOutgoing.map((record) => record.toObject()));

              const queryIncoming = `SELECT ?subject ?predicate WHERE { ?subject ?predicate <${value.toString()}> . }`;
              const resultIncoming = session.run(queryIncoming);
              const recordsIncoming = await resultIncoming.records();
              setIncoming(recordsIncoming.map((record) => record.toObject()));
            }
          }
        } catch (error) {
          enqueueSnackbar({
            message: error,
            variant: 'error',
          });
        } finally {
          session.close();
          setLoading(false);
        }
      },
      [driverContext]
    );

    useEffect(() => {
      let active = true;

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
              {selectedNode?.label || null}
            </Typography>
            <Typography variant="body2" component="p" color="text.secondary">
              {selectedNode?.value !== undefined &&
                graphObjectToTypeString(selectedNode.value)}
            </Typography>

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
          <>
            <Divider />

            <GraphObjectDetailsSection title="Outgoing">
              <Box sx={{ height: 400 }}>
                {loading ? (
                  <Skeleton variant="rectangular" height="inherit" />
                ) : (
                  <AGTable
                    columns={[
                      { field: 'predicate', headerName: 'Predicate' },
                      { field: 'object', headerName: 'Object' },
                      {
                        field: '__actions',
                        headerName: 'Actions',
                        width: 100,
                        cellRenderer: (props) => (
                          <Actions rowAction={props.value.rowAction} />
                        ),
                        cellStyle: () => ({
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }),
                      },
                    ]}
                    rows={outgoing.map((row) => ({
                      ...row,
                      __actions: {
                        rowAction: () => addOutgoing(row.predicate, row.object),
                      },
                    }))}
                    onIriClick={(value) =>
                      setSelectedNode(graphObjectToReactForceGraphNode(value))
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
                      { field: 'predicate', headerName: 'Predicate' },
                      { field: 'subject', headerName: 'Subject' },
                      {
                        field: '__actions',
                        headerName: 'Actions',
                        cellRenderer: (props) => (
                          <Actions rowAction={props.value.rowAction} />
                        ),
                      },
                    ]}
                    rows={incoming.map((row) => ({
                      ...row,
                      __actions: {
                        rowAction: () =>
                          addIncoming(row.predicate, row.subject),
                      },
                    }))}
                    onIriClick={(value) =>
                      setSelectedNode(graphObjectToReactForceGraphNode(value))
                    }
                  />
                )}
              </Box>
            </GraphObjectDetailsSection>
          </>
        </Box>
      </Drawer>
    );
  }
);

const QuadGraphObjectDetails = React.memo(
  ({
    selectedNode,
    setSelectedNode,
    addNodes,
    addConnection,
    removeConnection,
    removeNodeAndConnections,
    isNodeInGraphView
  }) => {
    const driverContext = useDriverContext();

    const scrollableAreaRef = useRef(null);

    const [labels, setLabels] = useState([]);
    const [properties, setProperties] = useState([]);
    const [outgoing, setOutgoing] = useState([]);
    const [incoming, setIncoming] = useState([]);
    const [edgeNodes, setEdgeNodes] = useState({});
    const [loading, setLoading] = useState(false);

    const handleShowInGraphView = useCallback(() => {
      if (selectedNode.isEdge) {
        addConnection(selectedNode);
      } else {
        addNodes([selectedNode]);
      }
    }, [addNodes, selectedNode, addConnection]);

    const handleHideInGraphView = useCallback(() => {
      if (selectedNode.isEdge) {
        removeConnection(selectedNode);
      } else {
        removeNodeAndConnections(selectedNode);
      }
    }, [selectedNode, removeConnection, removeNodeAndConnections]);

    const addConnectionRowAction = useCallback((node, type, edge, outgoing) => {
      const edgeNode = graphObjectToReactForceGraphNode(edge);
      edgeNode.isEdge = true;
      edgeNode.label = type.toString();

      if (outgoing) {
        edgeNode.source = selectedNode;
        edgeNode.target = graphObjectToReactForceGraphNode(node);
      } else {
        edgeNode.source = graphObjectToReactForceGraphNode(node);
        edgeNode.target = selectedNode;
      }

      if (selectedNode) {
        addConnection(edgeNode);
      }
    }, [selectedNode, addConnection]);

    const addOutgoing = useCallback((to, type, edge) => {
      addConnectionRowAction(to, type, edge, true);
    }, [addConnectionRowAction]);

    const addIncoming = useCallback((from, type, edge) => {
      addConnectionRowAction(from, type, edge, false);
    }, [addConnectionRowAction]);

    const describe = useCallback(
      async (selectedNode) => {
        const { value } = selectedNode;
        const query = `DESCRIBE ${graphObjectToString(value)}`;
        const session = driverContext.driver.session();
        try {
          setLoading(true);
          const result = session.run(query);
          const records = await result.records();
          const describeResult = records[0].toObject();

          setProperties(
            Object.keys(describeResult.properties).map((key) => ({
              key,
              value: describeResult.properties[key],
            }))
          );

          if (value.constructor === types.GraphEdge) {
            selectedNode.isEdge = true;
            selectedNode.label = describeResult.type.toString();
            selectedNode.source = graphObjectToReactForceGraphNode(describeResult.from);
            selectedNode.target = graphObjectToReactForceGraphNode(describeResult.to);
            setEdgeNodes({ from: describeResult.from, to: describeResult.to });
          } else {
            setLabels(describeResult.labels);
            setOutgoing(
              describeResult.outgoing.map(({ type, edge, to }) => {
                return { type, to, edge };
              })
            );
            setIncoming(
              describeResult.incoming.map(({ type, edge, from }) => {
                return { type, from, edge};
              })
            );
          }
        } catch (error) {
          enqueueSnackbar({
            message: error,
            variant: 'error',
          });
        } finally {
          session.close();
          setLoading(false);
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

      if (active && selectedNode) {
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
              {selectedNode &&
                (selectedNode.isEdge
                  ? selectedNode.id
                  : selectedNode.label || null)}
            </Typography>
            <Typography variant="body2" component="p" color="text.secondary">
              {selectedNode?.value !== undefined &&
                graphObjectToTypeString(selectedNode.value)}
            </Typography>
            {selectedNode?.isEdge ? (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pt: 1 }}>
                <Chip
                  size="small"
                  color="secondary"
                  label={selectedNode.label}
                />
              </Box>
            ) : labels.length ? (
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
              {selectedNode && (isNodeInGraphView(selectedNode) ? (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleHideInGraphView}
                  startIcon={<VisibilityOffIcon />}
                  color={selectedNode.isEdge ? "secondary" : "primary"}
                >
                  Hide from GraphView
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleShowInGraphView}
                  startIcon={<VisibilityIcon />}
                  color={selectedNode.isEdge ? "secondary" : "primary"}
                >
                  Show in GraphView
                </Button>
              ))}
            </Box>
          </Box>

          <Divider />

          {selectedNode?.isEdge && (
            <>
              <GraphObjectDetailsSection title="Connection">
              <Box
                sx={{
                  '& > *': {
                    verticalAlign: 'middle',
                  },
                }}
              >
                <Link onClick={() =>
                  setSelectedNode(graphObjectToReactForceGraphNode(edgeNodes.from))
                }>
                  <Chip size="small" color="primary" label={edgeNodes.from.toString()} />
                </Link>
                <ArrowForwardIcon color="secondary" fontSize="small" />
                <Link onClick={() =>
                  setSelectedNode(graphObjectToReactForceGraphNode(edgeNodes.to))
                }>
                  <Chip size="small" color="primary" label={edgeNodes.to.toString()} />
                </Link>
              </Box>
            </GraphObjectDetailsSection>
            <Divider />
            </>
          )}

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
                />
              )}
            </Box>
          </GraphObjectDetailsSection>
          <Divider />

          {!selectedNode?.isEdge && (
            <>
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
                        {
                          field: '__actions',
                          headerName: 'Actions',
                          width: 100,
                          cellRenderer: (props) => (
                            <Actions rowAction={props.value.rowAction} />
                          ),
                          cellStyle: () => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }),
                        },
                      ]}
                      rows={outgoing.map((row) => ({
                        ...row,
                        __actions: {
                          rowAction: () =>
                            addOutgoing(row.to, row.type, row.edge),
                        },
                      }))}
                      onObjectClick={(value) => {
                        setSelectedNode(graphObjectToReactForceGraphNode(value))
                      }}
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
                        {
                          field: '__actions',
                          headerName: 'Actions',
                          cellRenderer: (props) => (
                            <Actions rowAction={props.value.rowAction} />
                          ),
                        },
                      ]}
                      rows={incoming.map((row) => ({
                        ...row,
                        __actions: {
                          rowAction: () =>
                            addIncoming(row.from, row.type, row.edge),
                        },
                      }))}
                      onObjectClick={(value) => {
                        setSelectedNode(graphObjectToReactForceGraphNode(value))
                      }}
                      onIriClick={(value) =>
                        // Should never enter here
                        window.open(value.toString(), '_blank')
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

const GraphObjectDetails = ({
  modelString,
  selectedNode,
  setSelectedNode,
  addNodes,
  addConnection,
  removeConnection,
  removeNodeAndConnections,
  isNodeInGraphView,
}) => {
  return modelString === 'rdf' ? (
    <RDFGraphObjectDetails
      selectedNode={selectedNode}
      setSelectedNode={setSelectedNode}
      addNodes={addNodes}
      addConnection={addConnection}
    />
  ) : (
    <QuadGraphObjectDetails
      selectedNode={selectedNode}
      setSelectedNode={setSelectedNode}
      addNodes={addNodes}
      addConnection={addConnection}
      removeConnection={removeConnection}
      removeNodeAndConnections={removeNodeAndConnections}
      isNodeInGraphView={isNodeInGraphView}
    />
  );
};

export default GraphObjectDetails;
