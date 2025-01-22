import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
  Slider,
  Typography,
  CircularProgress,
} from '@mui/material';
import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useDriverContext } from '../context/DriverContext';
import { useLoaderData } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { PathsSearchBar } from './NodeSearchBar';
import { graphObjectToReactForceGraphNode, graphObjectToString } from '../utils/GraphObjectUtils';
import { types } from 'millenniumdb-driver';

const MAX_PATH_COUNT = 50;

const pathMaxDepthMarks = [
  { value: 0, label: '1' },
  { value: 1, label: '2' },
  { value: 2, label: '3' },
  { value: 3, label: '4' },
  { value: 4, label: '5' },
  { value: 5, label: '6' },
];

const nodeMaxDegreeMarks = [
  { value: 0, label: '10' },
  { value: 1, label: '20' },
  { value: 2, label: '50' },
  { value: 3, label: '100' },
  { value: 4, label: '1000' },
];

const valueToMaxDegree = (value) => {
  switch (value) {
    case 0:
      return 10;
    case 1:
      return 20;
    case 2:
      return 50;
    case 3:
      return 100;
    case 4:
      return 1000;
    default:
      return 10;
  }
};

const PathsSearch = React.memo(
  ({ addNodes,
    addConnection,
    clearAll,
    setSelectedNodesIds,
  }) => {
    const [pathMaxDepth, setPathMaxDepth] = useState(0);
    const [nodeMaxDegree, setNodeMaxDegree] = useState(0);
    const [inputNodes, setInputNodes] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [stopSearch, setStopSearch] = useState(false);

    const scrollableAreaRef = useRef(null);
    const stopSearchRef = useRef(false);
    const reachedMaxPathsRef = useRef(false);
    const pathsCountRef = useRef(0);
    const driverContext = useDriverContext();
    const modelString = useLoaderData();

    useEffect(() => {
      stopSearchRef.current = stopSearch;
    }, [stopSearch]);

    const processRecord = useCallback((record, direction) => {
      const edge = record.get("edge");
      edge.type = modelString === "rdf" ? edge : record.get("type");
      let visitedNode = record.get(direction);
      if (typeof visitedNode === "object") {
        visitedNode.id = visitedNode.id ? visitedNode.id : visitedNode.toString();
      } else {
        visitedNode = { id: graphObjectToString(visitedNode), value: visitedNode };
      }
      return {
        visitedNode,
        edge,
        isIncoming: direction === "to",
      };
    }, [modelString]);

    const runQuery = useCallback(async (query, direction, session) => {
      // const connections = [];
      const result = session.run(query);
      const records = await result.records();
      const connections = records.map((record) => processRecord(record, direction));
      // return new Promise((resolve, reject) => {
      //   result.subscribe({
      //     onRecord: (record) => {
      //       if (stopSearchRef.current) {
      //         resolve(connections);
      //         return;
      //       }
      //       connections.push(processRecord(record, direction));
      //     },
      //     onSuccess: () => resolve(connections),
      //     onError: (error) => reject(error),
      //   });
      // });
      return connections;
    }, [processRecord]);

    const getConnections = useCallback(
      async (session, node) => {
        // TODO: Replace newlines with \n in driver
        const nodeId = node.id.toString().replaceAll('\n', '\\n');
        const incomingQuery =
          modelString === "rdf"
            ? node.constructor === types.IRI
              ? `SELECT ?edge ?from WHERE { ?from ?edge <${nodeId}> . } LIMIT ${valueToMaxDegree(nodeMaxDegree)}`
              : `SELECT ?edge ?from WHERE { ?from ?edge ${nodeId} . } LIMIT ${valueToMaxDegree(nodeMaxDegree)}`
            : `MATCH (?from)-[?edge :?type]->(${nodeId}) RETURN * LIMIT ${valueToMaxDegree(nodeMaxDegree)}`;
        const outgoingQuery =
          modelString === "rdf"
            ? `SELECT ?edge ?to WHERE { <${nodeId}> ?edge ?to . } LIMIT ${valueToMaxDegree(nodeMaxDegree)}`
            : `MATCH (${nodeId})-[?edge :?type]->(?to) RETURN * LIMIT ${valueToMaxDegree(nodeMaxDegree)}`;

        const incomingConnections = await runQuery(incomingQuery, "from", session);
        if (modelString === "rdf" && node.constructor !== types.IRI) {
          return incomingConnections;
        }
        const outgoingConnections = await runQuery(outgoingQuery, "to", session);
        return [...incomingConnections, ...outgoingConnections];
      },
      [modelString, nodeMaxDegree, runQuery]
    );

    const addInputNodes = useCallback(() => {
      const graphNodes = inputNodes.map((node) => graphObjectToReactForceGraphNode(node));
      addNodes(graphNodes);
      setSelectedNodesIds(new Set(inputNodes.map((node) => node.id)));
    }, [inputNodes, addNodes, setSelectedNodesIds]);

    const addPath = useCallback((path) => {
      if (pathsCountRef.current > MAX_PATH_COUNT) {
        setStopSearch(true);
        reachedMaxPathsRef.current = true;
        return;
      }
      path.forEach((connection) => {
        const edgeNode = graphObjectToReactForceGraphNode(connection.edge);
        edgeNode.isEdge = true;
        edgeNode.source = graphObjectToReactForceGraphNode(connection.from);
        edgeNode.label = connection.type.toString();
        if (modelString === 'rdf') {
          edgeNode.target = connection.to.constructor === types.IRI ? (
            graphObjectToReactForceGraphNode(connection.to)
          ) : graphObjectToReactForceGraphNode(connection.to.value);
          edgeNode.id = `${edgeNode.source.id}-${edgeNode.id}->${edgeNode.target.id}`;
        }
        else {
          edgeNode.target = graphObjectToReactForceGraphNode(connection.to);
        }
        addConnection(edgeNode);
      });
      pathsCountRef.current += 1;
    }, [addConnection, modelString]);

    const checkPathLoop = useCallback((path) => {
      const nodeIds = new Set();
      for (const connection of path) {
        if (nodeIds.has(connection.from.id) && nodeIds.has(connection.to.id)) {
          return true;
        }
        if (connection.from.id === connection.to.id) {
          return true;
        }
        nodeIds.add(connection.from.id);
        nodeIds.add(connection.to.id);
      }
      return false;
    }, []);

    const mergePaths = useCallback((queueObject, visitedObject) => {
      const path = [];
      [queueObject, visitedObject].forEach((object) => {
        let currentObject = object;
        while (currentObject.previousObject) {
          let connection;
          if (currentObject.isIncoming) {
            connection = {
              from: currentObject.previousObject.node,
              to: currentObject.node,
              edge: currentObject.edge,
              type: currentObject.edge.type,
            };
          } else {
            connection = {
              from: currentObject.node,
              to: currentObject.previousObject.node,
              edge: currentObject.edge,
              type: currentObject.edge.type,
            };
          }
          path.push(connection);
          currentObject = currentObject.previousObject;
        }
      });
      if (!checkPathLoop(path)) {
        addPath(path);
      }
    }, [addPath, checkPathLoop]);

    const checkAndMergePaths = useCallback((queueObject, visited) => {
      const endingNodes = inputNodes.filter(
        (node) => node.id !== queueObject.startingNode.id
      );
      endingNodes.forEach((endingNode) => {
        const key = `${queueObject.node.id},${endingNode.id}`;
        if (visited[key]) {
          visited[key].forEach((visitedObject) => {
            if (
              queueObject.depth + visitedObject.depth <= pathMaxDepth + 1 &&
              !stopSearchRef.current
            ) {
              mergePaths(queueObject, visitedObject);
            }
          });
        }
      });
    }, [inputNodes, mergePaths, pathMaxDepth]);

    const revisitedLastNode = useCallback((queueObject, visitedNode) => {
      if (queueObject.previousObject) {
        return queueObject.previousObject.node.id === visitedNode.id;
      }
      return false;
    }, []);

    const reachedInputNode = useCallback((node) => {
      return inputNodes.some((inputNode) => node.id === inputNode.id);
    }, [inputNodes]);

    const addToVisited = useCallback((visited, queueObject) => {
      const key = `${queueObject.node.id},${queueObject.startingNode.id}`;
      if (!visited[key]) {
        visited[key] = [queueObject];
      } else {
        visited[key].push(queueObject);
      }
    }, []);

    const searchPaths = useCallback(
      async () => {
        clearAll();
        addInputNodes();
        pathsCountRef.current = 0;

        const session = driverContext.driver.session();
        try {
          setIsLoading(true);

          const visited = {};
          const queue = [];

          inputNodes.forEach((node) => {
            const queueObject = {
              node,
              startingNode: node,
              previousObject: null,
              edge: null,
              isIncoming: null,
              depth: 0,
            }
            const key = `${node.id},${node.id}`;
            visited[key] = [queueObject];
            queue.push(queueObject);
          });

          while (queue.length > 0 && !stopSearchRef.current) {
            const queueObject = queue.shift();
            const connections = await getConnections(session, queueObject.node);
            for (const { visitedNode, edge, isIncoming } of connections) {
              if (stopSearchRef.current) {
                return;
              }
              if (revisitedLastNode(queueObject, visitedNode)) {
                continue;
              }
              const newQueueObject = {
                node: visitedNode,
                startingNode: queueObject.startingNode,
                previousObject: queueObject,
                edge,
                isIncoming,
                depth: queueObject.depth + 1,
              };
              checkAndMergePaths(newQueueObject, visited);
              if (reachedInputNode(visitedNode)) {
                continue;
              }
              addToVisited(visited, newQueueObject);
              if (queueObject.depth < Math.floor(pathMaxDepth / 2)) {
                queue.push(newQueueObject);
              }
            }
          }
        } catch (error) {
          console.error(error);
          enqueueSnackbar({
            message: error.toString(),
            variant: 'error',
          });
        } finally {
          session.close();
          setIsLoading(false);
          if (reachedMaxPathsRef.current) {
            enqueueSnackbar({
              message: `Reached maximum number of paths (${MAX_PATH_COUNT}). Search stopped.`,
              variant: 'info',
            });
            reachedMaxPathsRef.current = false;
          } else if (stopSearchRef.current) {
            enqueueSnackbar({
              message: 'Search stopped.',
              variant: 'info',
            });
          }
          setStopSearch(false);
        }
      },
      [
        inputNodes,
        pathMaxDepth,
        driverContext.driver,
        addInputNodes,
        clearAll,
        getConnections,
        checkAndMergePaths,
        reachedInputNode,
        revisitedLastNode,
        addToVisited,
      ]
    );

    const handleRemoveNode = useCallback((nodeId) => {
      setInputNodes((prevNodes) => prevNodes.filter((node) => node.id !== nodeId));
    }, []);

    return (
      <>
        <Box
          sx={(theme) => ({
            position: 'absolute',
            zIndex: theme.zIndex.fab + 1,
            top: 16,
            left: 16,
          })}
        >
          <Tooltip title="Open Search" placement="right">
            <IconButton size="large" onClick={() => setIsDrawerOpen(true)}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Drawer
          transitionDuration={100}
          open={isDrawerOpen}
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
          <PathsSearchBar inputNodes={inputNodes} setInputNodes={setInputNodes} />
          <Box sx={{
            p: 1,
            pb: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Box sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
            }}>
              {!isLoading ? (
                <Button
                  sx={{ ml: 1 }}
                  variant="outlined"
                  size="small"
                  onClick={searchPaths}
                  color="primary"
                  disabled={inputNodes.length < 2}
                >
                  Search paths
                </Button>
              ) : (
                <Button
                  sx={{ ml: 1 }}
                  variant="outlined"
                  size="small"
                  onClick={() => setStopSearch(true)}
                  color="primary"
                  disabled={stopSearch}
                >
                  Stop search
                </Button>
              )}
              {isLoading ? <CircularProgress size={20} /> : null}
            </Box>
            <IconButton
              onClick={() => setIsDrawerOpen(false)}
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />

          <Box ref={scrollableAreaRef} sx={{ overflow: 'scroll' }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="body1" component="p">
                Maximum path depth
              </Typography>
              <Box sx={{ p: 2, pb: 0 }}>
                <Slider
                  value={pathMaxDepth}
                  marks={pathMaxDepthMarks}
                  max={5}
                  onChange={(_event, value) => setPathMaxDepth(value)}
                  size='small'
                />
              </Box>
            </Box>
            <Divider />

            <Box sx={{ p: 2 }}>
              <Typography variant="body1" component="p">
                Maximum node degree
              </Typography>
              <Box sx={{ p: 2, pb: 0 }}>
                <Slider
                  value={nodeMaxDegree}
                  marks={nodeMaxDegreeMarks}
                  max={4}
                  onChange={(_event, value) => setNodeMaxDegree(value)}
                  size='small'
                />
              </Box>
            </Box>
            <Divider />

            {inputNodes.map((node, index) => (
              <React.Fragment key={node.id}>
                <Box sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                      variant="h5"
                      component="h5"
                      sx={{ wordWrap: 'break-word' }}
                    >
                      {node.id}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleRemoveNode(node.id)}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {node.type}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {node.labelProperty}
                  </Typography>
                </Box>
                {index < inputNodes.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Box>
        </Drawer>
      </>
    );
  }
);

export default PathsSearch;
