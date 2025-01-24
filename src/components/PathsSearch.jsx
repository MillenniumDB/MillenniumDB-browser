import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import RemoveIcon from '@mui/icons-material/Remove';
import InfoIcon from '@mui/icons-material/Info';
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  CircularProgress,
  MenuItem,
  TextField,
} from '@mui/material';
import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { useDriverContext } from '../context/DriverContext';
import { useLoaderData } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { PathsSearchBar } from './NodeSearchBar';
import { graphObjectToReactForceGraphNode, graphObjectToString } from '../utils/GraphObjectUtils';
import { types } from 'millenniumdb-driver';

const PathsSearch = React.memo(
  ({ addNodes,
    addConnection,
    clearAll,
    setSelectedNodesIds,
  }) => {
    const [pathMaxDepth, setPathMaxDepth] = useState(2);
    const [nodeMaxDegree, setNodeMaxDegree] = useState(10);
    const [pathMaxCount, setPathMaxCount] = useState(10);
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
    const theme = useTheme();

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
      const result = session.run(query);
      const records = await result.records();
      const connections = records.map((record) => processRecord(record, direction));
      return connections;
    }, [processRecord]);

    const getConnections = useCallback(
      async (session, node) => {
        // TODO: Replace newlines with \n in driver
        const nodeId = node.id.toString().replaceAll('\n', '\\n');
        const incomingQuery =
          modelString === "rdf"
            ? node.constructor === types.IRI
              ? `SELECT ?edge ?from WHERE { ?from ?edge <${nodeId}> . } LIMIT ${nodeMaxDegree}`
              : `SELECT ?edge ?from WHERE { ?from ?edge ${nodeId} . } LIMIT ${nodeMaxDegree}`
            : `MATCH (?from)-[?edge :?type]->(${nodeId}) RETURN * LIMIT ${nodeMaxDegree}`;
        const outgoingQuery =
          modelString === "rdf"
            ? `SELECT ?edge ?to WHERE { <${nodeId}> ?edge ?to . } LIMIT ${nodeMaxDegree}`
            : `MATCH (${nodeId})-[?edge :?type]->(?to) RETURN * LIMIT ${nodeMaxDegree}`;

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
      if (pathsCountRef.current > pathMaxCount) {
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
    }, [addConnection, modelString, pathMaxCount]);

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
        let success = false;
        const startTime = performance.now();

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
          success = true;
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
              message: `Reached maximum number of paths (${pathMaxCount}). Search stopped.`,
              variant: 'info',
            });
            reachedMaxPathsRef.current = false;
          } else if (stopSearchRef.current) {
            enqueueSnackbar({
              message: 'Search stopped.',
              variant: 'info',
            });
          } else if (success) {
            const endTime = performance.now();
            const totalDurationMs = parseInt(endTime - startTime);
            let durationString;
            if (totalDurationMs > 1_000) {
              durationString = `${(totalDurationMs / 1_000).toFixed(2)} s`;
            } else {
              durationString = `${totalDurationMs} ms`;
            }
            enqueueSnackbar({
              message: `Search completed successfully (Found ${pathsCountRef.current} paths in ${durationString}).`,
              variant: 'success',
            });
          }
          setStopSearch(false);
        }
      },
      [
        inputNodes,
        pathMaxDepth,
        pathMaxCount,
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
            pb: 3,
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
            <Box sx={{ px: 2, py: 3 }}>
              <Typography variant="body1" sx={{ pb: 3 }}>
                Search options
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 3,
                }}
              >
                <TextField
                  label="Maximum path depth"
                  disabled={isLoading}
                  select
                  value={pathMaxDepth}
                  onChange={(event) => setPathMaxDepth(event.target.value)}
                  sx={{ width: 'calc(50% - 12px)' }}
                >
                  <MenuItem value={0}>1</MenuItem>
                  <MenuItem value={1}>2</MenuItem>
                  <MenuItem value={2}>3</MenuItem>
                  <MenuItem value={3}>4</MenuItem>
                  <MenuItem value={4}>5</MenuItem>
                  <MenuItem value={5}>6</MenuItem>
                </TextField>

                <Box sx={{ position: 'relative', width: 'calc(50% - 12px)' }}>
                  <TextField
                    label="Maximum node degree"
                    disabled={isLoading}
                    select
                    value={nodeMaxDegree}
                    onChange={(event) => setNodeMaxDegree(event.target.value)}
                    fullWidth
                  >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={1000}>1000</MenuItem>
                  </TextField>
                  <Tooltip
                    placement="bottom-start"
                    title="Set the maximum number of outgoing connections
                    and the maximum number of incoming connections."
                  >
                    <InfoIcon
                      sx={{
                        position: 'absolute',
                        right: 36,
                        top: 16,
                        color: theme.palette.action.active,
                      }}
                    />
                  </Tooltip>
                </Box>

                <TextField
                  label="Maximum paths found"
                  disabled={isLoading}
                  select
                  value={pathMaxCount}
                  onChange={(event) => setPathMaxCount(event.target.value)}
                  sx={{ width: 'calc(50% - 12px)' }}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={40}>40</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </TextField>
              </Box>
            </Box>
            <Divider />

            {inputNodes.map((node, index) => (
              <React.Fragment key={node.id}>
                <Box sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                      variant="body1"
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
                  {node.labelProperty &&
                    <Typography variant="body2" color="text.secondary">
                      {node.labelProperty}
                    </Typography>
                  }
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
