import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkIcon from '@mui/icons-material/Link';
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
import { useUserContext } from '../context/UserContext';
import { useLoaderData } from 'react-router-dom';
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
    <Box sx={{ py: 3, px: 2, position: "relative" }}>
      <Typography variant="body1" component="p" sx={{ pb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

const RDFGraphObjectDetails = React.memo(
  ({
    selectedNode,
    setSelectedNode,
    addNodes,
    addConnection,
    removeNodeAndConnections,
    removeConnectionAndNeighbors,
    isNodeInGraphView
  }) => {
    const driverContext = useDriverContext();
    const {isDrawerOpen, setIsDrawerOpen} = useUserContext();

    const scrollableAreaRef = useRef(null);

    const [outgoing, setOutgoing] = useState([]);
    const [incoming, setIncoming] = useState([]);
    const [isLiteral, setIsLiteral] = useState(false);
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
        removeConnectionAndNeighbors(selectedNode);
      } else {
        removeNodeAndConnections(selectedNode);
      }
    }, [selectedNode, removeConnectionAndNeighbors, removeNodeAndConnections]);

    const createPredicateNode = useCallback((predicate, subject, object) => {
      const predicateNode = graphObjectToReactForceGraphNode(predicate);
      predicateNode.isEdge = true;
      const source = graphObjectToReactForceGraphNode(subject);
      const target = graphObjectToReactForceGraphNode(object);
      predicateNode.source = source;
      predicateNode.target = target;
      predicateNode.id = `${source.id}-${predicateNode.id}->${target.id}`;
      return predicateNode;
    }, []);

    const addOutgoing = useCallback((object, predicate) => {
      if (selectedNode) {
        const predicateNode = createPredicateNode(predicate, selectedNode.value, object);
        addConnection(predicateNode);
      }
    }, [selectedNode, createPredicateNode, addConnection]);

    const addIncoming = useCallback((subject, predicate) => {
      if (selectedNode) {
        const predicateNode = createPredicateNode(predicate, subject, selectedNode.value);
        addConnection(predicateNode);
      }
    }, [selectedNode, createPredicateNode, addConnection]);

    const describeIRI = useCallback(
      async (selectedNode) => {
        const { value } = selectedNode;

        const session = driverContext.driver.session();
        try {
          setLoading(true);
          const queryOutgoing = `SELECT ?predicate ?object WHERE { <${value.toString()}> ?predicate ?object . }`;
          const resultOutgoing = session.run(queryOutgoing);
          const recordsOutgoing = await resultOutgoing.records();
          setOutgoing(recordsOutgoing.map((record) => record.toObject()));

          const queryIncoming = `SELECT ?subject ?predicate WHERE { ?subject ?predicate <${value.toString()}> . }`;
          const resultIncoming = session.run(queryIncoming);
          const recordsIncoming = await resultIncoming.records();
          setIncoming(recordsIncoming.map((record) => record.toObject()));
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

      if (active && selectedNode) {
        const { value } = selectedNode;
        if (typeof value === 'object' && value.constructor === types.IRI) {
          setIsLiteral(false);
          describeIRI(selectedNode);
        } else {
          setIsLiteral(true);
        }
      }

      return () => {
        active = false;
      };
    }, [selectedNode, describeIRI]);

    useEffect(() => {
      const drawer = scrollableAreaRef.current;
      if (drawer) {
        drawer.scrollTo(0, 0);
      }
    }, [scrollableAreaRef, selectedNode]);

    useEffect(() => {
      setIsDrawerOpen(selectedNode !== null);
    }, [selectedNode, setIsDrawerOpen]);

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
            overflow: 'hidden',
          },
          [`${theme.breakpoints.down('md')}`]: {
            width: '100vw',
          },
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
          <Box sx={{ p: 2 }}>
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
                gap: 1,
              }}
            >
              {!isLiteral && (
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<LinkIcon />}
                  color="primary"
                >
                  <Link
                    underline="none"
                    href={selectedNode?.value.toString()}
                    target="_blank"
                    rel="noopener"
                  >
                    Open IRI
                  </Link>
                </Button>
              )}
              {isNodeInGraphView(selectedNode) ? (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleHideInGraphView}
                  startIcon={<VisibilityOffIcon />}
                  color="primary"
                >
                  Hide from GraphView
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleShowInGraphView}
                  startIcon={<VisibilityIcon />}
                  color="primary"
                >
                  Show in GraphView
                </Button>
              )}
            </Box>
          </Box>

          {!isLiteral && (
            <>
              <Divider />
              <GraphObjectDetailsSection title="Outgoing">
                <Button
                  variant="outlined"
                  sx={{ position: "absolute", right: 16, top: 16 }}
                  disabled={outgoing.length === 0}
                  onClick={() => {
                    outgoing.slice(0, 50).map((connection) =>
                      addOutgoing(connection.object, connection.predicate)
                    );
                    if (outgoing.length > 50) {
                      enqueueSnackbar({
                        message: 'Only showing first 50 outgoing connections.',
                        variant: 'info',
                      });
                    }
                  }}
                >
                  Show All
                </Button>
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
                          rowAction: () => addOutgoing(row.object, row.predicate),
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
                <Button
                  variant="outlined"
                  sx={{ position: "absolute", right: 16, top: 16 }}
                  disabled={incoming.length === 0}
                  onClick={() => {
                    incoming.slice(0, 50).map((connection) =>
                      addIncoming(connection.subject, connection.predicate)
                    );
                    if (incoming.length > 50) {
                      enqueueSnackbar({
                        message: 'Only showing first 50 incoming connections.',
                        variant: 'info',
                      });
                    }
                  }}
                >
                  Show All
                </Button>
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
                          cellStyle: () => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }),
                        },
                      ]}
                      rows={incoming.map((row) => ({
                        ...row,
                        __actions: {
                          rowAction: () =>
                            addIncoming(row.subject, row.predicate),
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
          )}
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
    removeNodeAndConnections,
    removeConnectionAndNeighbors,
    isNodeInGraphView
  }) => {
    const driverContext = useDriverContext();
    const {isDrawerOpen, setIsDrawerOpen} = useUserContext();

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
        removeConnectionAndNeighbors(selectedNode);
      } else {
        removeNodeAndConnections(selectedNode);
      }
    }, [selectedNode, removeConnectionAndNeighbors, removeNodeAndConnections]);

    const createEdgeNode = useCallback((edge, from, to, type) => {
      const edgeNode = graphObjectToReactForceGraphNode(edge);
      edgeNode.isEdge = true;
      edgeNode.label = type.toString();
      edgeNode.source = graphObjectToReactForceGraphNode(from);
      edgeNode.target = graphObjectToReactForceGraphNode(to);
      return edgeNode;
    }, []);

    const addOutgoing = useCallback((to, type, edge) => {
      if (selectedNode) {
        const edgeNode = createEdgeNode(edge, selectedNode.value, to, type);
        addConnection(edgeNode);
      }
    }, [selectedNode, createEdgeNode, addConnection]);

    const addIncoming = useCallback((from, type, edge) => {
      if (selectedNode) {
        const edgeNode = createEdgeNode(edge, from, selectedNode.value, type);
        addConnection(edgeNode);
      }
    }, [selectedNode, createEdgeNode, addConnection]);

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

    useEffect(() => {
      setIsDrawerOpen(selectedNode !== null);
    }, [selectedNode, setIsDrawerOpen]);

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
            overflow: 'hidden',
          },
          [`${theme.breakpoints.down('md')}`]: {
            width: '100vw',
          },
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
          <Box sx={{ p: 2 }}>
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
              {isNodeInGraphView(selectedNode) ? (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleHideInGraphView}
                  startIcon={<VisibilityOffIcon />}
                  color={selectedNode?.isEdge ? "secondary" : "primary"}
                >
                  Hide from GraphView
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleShowInGraphView}
                  startIcon={<VisibilityIcon />}
                  color={selectedNode?.isEdge ? "secondary" : "primary"}
                >
                  Show in GraphView
                </Button>
              )}
            </Box>
          </Box>

          <Divider />

          {selectedNode?.isEdge && edgeNodes.from && edgeNodes.to && (
            <>
              <GraphObjectDetailsSection title="Connection">
              <Box
                sx={{
                  '& > *': { verticalAlign: 'middle' },
                }}
              >
                <Link onClick={() =>
                  setSelectedNode(graphObjectToReactForceGraphNode(edgeNodes.from))
                }>
                  <Chip size="small" color="primary" label={edgeNodes.from.toString()} />
                </Link>
                <ArrowForwardIcon fontSize="small" />
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
                  onObjectClick={(value) =>
                    setSelectedNode(graphObjectToReactForceGraphNode(value))
                  }
                />
              )}
            </Box>
          </GraphObjectDetailsSection>
          <Divider />

          {!selectedNode?.isEdge && (
            <>
              <GraphObjectDetailsSection title="Outgoing">
                <Button
                  variant="outlined"
                  sx={{ position: "absolute", right: 16, top: 16 }}
                  disabled={outgoing.length === 0}
                  onClick={() => {
                    outgoing.slice(0, 50).map((connection) =>
                      addOutgoing(connection.to, connection.type, connection.edge)
                    );
                    if (outgoing.length > 50) {
                      enqueueSnackbar({
                        message: 'Only showing first 50 outgoing connections.',
                        variant: 'info',
                      });
                    }
                  }}
                >
                  Show All
                </Button>
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
                <Button
                  variant="outlined"
                  sx={{ position: "absolute", right: 16, top: 16 }}
                  disabled={incoming.length === 0}
                  onClick={() => {
                    incoming.slice(0, 50).map((connection) =>
                      addIncoming(connection.from, connection.type, connection.edge)
                    );
                    if (incoming.length > 50) {
                      enqueueSnackbar({
                        message: 'Only showing first 50 incoming connections.',
                        variant: 'info',
                      });
                    }
                  }}
                >
                  Show All
                </Button>
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
                          cellStyle: () => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }),
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
  selectedNode,
  setSelectedNode,
  addNodes,
  addConnection,
  removeNodeAndConnections,
  removeConnectionAndNeighbors,
  isNodeInGraphView,
}) => {
  const modelString = useLoaderData();

  return modelString === 'rdf' ? (
    <RDFGraphObjectDetails
      selectedNode={selectedNode}
      setSelectedNode={setSelectedNode}
      addNodes={addNodes}
      addConnection={addConnection}
      removeNodeAndConnections={removeNodeAndConnections}
      removeConnectionAndNeighbors={removeConnectionAndNeighbors}
      isNodeInGraphView={isNodeInGraphView}
    />
  ) : (
    <QuadGraphObjectDetails
      selectedNode={selectedNode}
      setSelectedNode={setSelectedNode}
      addNodes={addNodes}
      addConnection={addConnection}
      removeNodeAndConnections={removeNodeAndConnections}
      removeConnectionAndNeighbors={removeConnectionAndNeighbors}
      isNodeInGraphView={isNodeInGraphView}
    />
  );
};

export default GraphObjectDetails;
