import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
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
import { enqueueSnackbar } from 'notistack';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDriverContext } from '../context/DriverContext';
import {
  graphObjectToReactForceGraphNode,
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
  ({ selectedNode, setSelectedNode, addNodes, addLinks }) => {
    const driverContext = useDriverContext();

    const scrollableAreaRef = useRef(null);

    const [outgoing, setOutgoing] = useState([]);
    const [incoming, setIncoming] = useState([]);
    const [loading, setLoading] = useState(false);

    const addConnection = useCallback(
      ({ subject, predicate, object }) => {
        const subjectNode = graphObjectToReactForceGraphNode(subject);
        const predicateNode = graphObjectToReactForceGraphNode(predicate);
        const objectNode = graphObjectToReactForceGraphNode(object);
        predicateNode.isEdge = true;
        predicateNode.id = `${subjectNode.id}-${predicateNode.id}-${objectNode.id}`;
        addNodes([subjectNode, predicateNode, objectNode]);
        addLinks([
          {
            id: `${subjectNode.id}-${predicateNode.id}->${objectNode.id}-1`,
            source: subjectNode.id,
            target: predicateNode.id,
          },
          {
            id: `${subjectNode.id}-${predicateNode.id}->${objectNode.id}-2`,
            source: predicateNode.id,
            target: objectNode.id,
          },
        ]);
      },
      [addNodes, addLinks]
    );

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
  ({ selectedNode, setSelectedNode, addNodes, addLinks }) => {
    const driverContext = useDriverContext();

    const scrollableAreaRef = useRef(null);

    const [labels, setLabels] = useState([]);
    const [properties, setProperties] = useState([]);
    const [outgoing, setOutgoing] = useState([]);
    const [incoming, setIncoming] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isLiteral, setIsLiteral] = useState(false);

    const addConnection = useCallback(
      ({ from, to, type, edge }) => {
        const source = graphObjectToReactForceGraphNode(from);
        const target = graphObjectToReactForceGraphNode(to);
        const edgeNode = graphObjectToReactForceGraphNode(edge);
        edgeNode.isEdge = true;
        edgeNode.label = type.toString();
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
      },
      [addNodes, addLinks]
    );

    const addOutgoing = useCallback(
      (to, type, edge) => {
        if (selectedNode?.value) {
          addConnection({ from: selectedNode.value, to, type, edge });
        }
      },
      [selectedNode, addConnection]
    );

    const addIncoming = useCallback(
      (from, type, edge) => {
        if (selectedNode?.value) {
          addConnection({ from, to: selectedNode.value, type, edge });
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
                message: error,
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
                      onObjectClick={(value) =>
                        setSelectedNode(graphObjectToReactForceGraphNode(value))
                      }
                      rows={properties}
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
                      onObjectClick={(value) =>
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
                      onObjectClick={(value) =>
                        setSelectedNode(graphObjectToReactForceGraphNode(value))
                      }
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
  addLinks,
}) => {
  return modelString === 'rdf' ? (
    <RDFGraphObjectDetails
      selectedNode={selectedNode}
      setSelectedNode={setSelectedNode}
      addNodes={addNodes}
      addLinks={addLinks}
    />
  ) : (
    <QuadGraphObjectDetails
      selectedNode={selectedNode}
      setSelectedNode={setSelectedNode}
      addNodes={addNodes}
      addLinks={addLinks}
    />
  );
};

export default GraphObjectDetails;
