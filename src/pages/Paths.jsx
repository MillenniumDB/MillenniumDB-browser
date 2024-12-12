import { Box, Button } from '@mui/material';
import ForceGraph2D from 'react-force-graph-2d';
import GraphOptions from '../components/GraphOptions';
import PathsSearch from '../components/PathsSearch';
import { Helmet } from 'react-helmet';
import { useGraph } from '../components/GraphProvider';
import { useCallback, useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useDriverContext } from '../context/DriverContext';
import { graphObjectToReactForceGraphNode } from '../utils/GraphObjectUtils';

export default function Paths() {
  const {
    ref,
    graphRef,
    graphData,
    width,
    height,
    graphColorSettings,
    graphSizeSettings,
    NodeCanvasObject,
    handleLinkColor,
    handleOnNodeHover,
    handleRenderFramePre,
    handleOnZoom,
    handleOnNodeClick,
    handleOnBackgroundClick,
    addNodes,
    addConnection,
    graphForceLinkDistance,
    setGraphLinkDistance,
    graphForceChargeStrength,
    setGraphForceChargeStrength,
    graphForceLinkStrength,
    setGraphForceLinkStrength,
    showGrid,
    setShowGrid,
    clearAll,
  } = useGraph();

  const driverContext = useDriverContext();

  const [pathMaxDepth, setPathMaxDepth] = useState(0);
  const [inputNodes, setInputNodes] = useState([]);

  const addPath = useCallback((path) => {
    path.forEach((connection) => {
      const edgeNode = graphObjectToReactForceGraphNode(connection.edge);
      edgeNode.isEdge = true;
      edgeNode.label = connection.type.toString();
      edgeNode.source = graphObjectToReactForceGraphNode(connection.from);
      edgeNode.target = graphObjectToReactForceGraphNode(connection.to);
      addConnection(edgeNode);
    });
  }, [addConnection]);

  const filterFinishedPaths = useCallback((paths, targetNodes) => {
    const targetNodesIds = targetNodes.map((node) => node.id);
    const unfinishedPaths = [];
    paths.forEach((path) => {
      const lastNode = path[path.length - 1].to;
      if (targetNodesIds.includes(lastNode.id)) {
        addPath(path);
      } else {
        unfinishedPaths.push(path);
      }
    });
    return unfinishedPaths;
  }, [addPath]);

  const getIncoming = useCallback(
    async (session, node) => {
      try {
        const query = `MATCH (?from)-[?edge :?type]->(${node.id}) RETURN *`;
        const result = session.run(query);
        const records = await result.records();
        return records.map((record) => {
          const recordObject = record.toObject();
          recordObject.to = node;
          return recordObject;
        });
      } catch (error) {
        console.error(`Error fetching paths for node ${node}:`, error);
        return [];
      }
    },
    []
  );

  const getOutgoing = useCallback(
    async (session, node) => {
      try {
        const query = `MATCH (${node.id})-[?edge :?type]->(?to) RETURN *`;
        const result = session.run(query);
        const records = await result.records();
        return records.map((record) => {
          const recordObject = record.toObject();
          recordObject.from = node;
          return recordObject;
        });
      } catch (error) {
        console.error(`Error fetching paths for node ${node}:`, error);
        return [];
      }
    },
    []
  );

  const searchPaths = useCallback(
    async () => {
      const session = driverContext.driver.session();
      try {
        for (const startingNode of inputNodes) {
          console.log("Starting search from", startingNode.id);
          const nodeIds = inputNodes.map((node) => node.id);
          const endingNodesIds = nodeIds.filter((id) => id !== startingNode.id);

          const visitedNodes = new Set();
          const nodesQueue = [];

          visitedNodes.add(startingNode.id);
          nodesQueue.push({ nodeObject: startingNode, path: [], depth: 0 });

          while (nodesQueue.length > 0) {
            const node = nodesQueue.shift();
            console.log("Exploring node", node.nodeObject.id, "at depth", node.depth);
            const incomingConnections = await getIncoming(session, node.nodeObject);
            incomingConnections.forEach((connection) => {
              if (endingNodesIds.includes(connection.from.id)) {
                addPath([...node.path, connection]);
              }
              else if (!visitedNodes.has(connection.from.id) && node.depth < pathMaxDepth) {
                nodesQueue.push({
                  nodeObject: connection.from,
                  path: [...node.path, connection],
                  depth: node.depth + 1
                });
              }
            });
            const outgoingConnections = await getOutgoing(session, node.nodeObject);
            outgoingConnections.forEach((connection) => {
              if (endingNodesIds.includes(connection.to.id)) {
                addPath([...node.path, connection]);
              }
              else if (!visitedNodes.has(connection.to.id) && node.depth < pathMaxDepth) {
                nodesQueue.push({
                  nodeObject: connection.to,
                  path: [...node.path, connection],
                  depth: node.depth + 1
                });
              }
            });
          }
        }
      } catch (error) {
        enqueueSnackbar({
          message: error.message,
          variant: 'error',
        });
      } finally {
        session.close();
      }
    },
    [inputNodes, pathMaxDepth, driverContext.driver, filterFinishedPaths]
  );

  useEffect(() => {
    const fetchInputNodes = async () => {
      // const inputNodesIds = ['id10008', 'id2369'];
      const inputNodesIds = ['id50377', 'id1642'];
      const session = driverContext.driver.session();
      try {
        const nodes = [];
        for (const id of inputNodesIds) {
          const query = `MATCH (?node) WHERE ?node == (${id}) RETURN *`;
          const result = session.run(query);
          const records = await result.records();
          nodes.push(records[0].toObject().node);
        }
        setInputNodes(nodes);
      } catch (error) {
        console.error("Error fetching nodes:", error);
      } finally {
        session.close();
      }
    };

    fetchInputNodes();
  }, [driverContext.driver]);

  useEffect(() => {
    if (inputNodes.length > 0) {
      const graphNodes = inputNodes.map(
        (node) => graphObjectToReactForceGraphNode(node)
      );
      addNodes(graphNodes);
    }
  }, [inputNodes, searchPaths, addNodes]);

  return (
    <>
      <Helmet title={`Paths | MillenniumDB`} />
      <Box
        ref={ref}
        sx={(theme) => ({
          height: 'calc(100vh - 56px)',
          [`${theme.breakpoints.up('sm')}`]: {
            height: 'calc(100vh - 64px)',
          },
          [`${theme.breakpoints.up('xs')}`]: {
            '@media (orientation: landscape)': {
              height: 'calc(100vh - 48px)',
            },
          },
          width: '100vw',
          position: 'relative',
          overflow: 'hidden',
        })}
      >
        <PathsSearch searchPaths={searchPaths}/>
        <GraphOptions
          graphForceLinkDistance={graphForceLinkDistance}
          setGraphForceLinkDistance={setGraphLinkDistance}
          graphForceChargeStrength={graphForceChargeStrength}
          setGraphForceChargeStrength={setGraphForceChargeStrength}
          graphForceLinkStrength={graphForceLinkStrength}
          setGraphForceLinkStrength={setGraphForceLinkStrength}
          showGrid={showGrid}
          setShowGrid={setShowGrid}
          clearAll={clearAll}
        />
        <ForceGraph2D
          ref={graphRef}
          graphData={graphData}
          width={width}
          height={height}
          backgroundColor={graphColorSettings.backgroundColor}
          maxZoom={graphSizeSettings.maxZoom}
          minZoom={graphSizeSettings.minZoom}
          // Nodes
          nodeRelSize={graphSizeSettings.nodeRelSize}
          nodeVal={graphSizeSettings.nodeVal}
          nodeColor={null}
          nodeLabel={null}
          nodeCanvasObject={NodeCanvasObject}
          nodeCanvasObjectMode={() => 'replace'}
          // Links
          linkDirectionalArrowLength={(link) =>
            link.source.isEdge ? graphSizeSettings.arrowSize : 0
          }
          linkDirectionalArrowRelPos={1}
          linkColor={handleLinkColor}
          linkWidth={graphSizeSettings.linkWidth}
          // Events
          onNodeHover={handleOnNodeHover}
          onRenderFramePre={handleRenderFramePre}
          onZoom={handleOnZoom}
          onNodeClick={handleOnNodeClick}
          onBackgroundClick={handleOnBackgroundClick}
          // Performance
          warmupTicks={0}
          cooldownTicks={300}
          autoPauseRedraw={true}
        />
      </Box>
    </>
  );
}
