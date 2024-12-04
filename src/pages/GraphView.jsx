import { useTheme } from '@emotion/react';
import { Box, Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import * as d3Force from 'd3-force';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useResizeDetector } from 'react-resize-detector';
import GraphObjectDetails from '../components/GraphObjectDetails';
import GraphSearchBar from '../components/GraphSearchBar';
import GraphSettings, { FORCE_RANGES } from '../components/GraphSettings';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { types } from 'millenniumdb-driver';

export default function GraphView() {
  const modelString = useLoaderData();

  const [graphData, setGraphData] = useState({
    nodes: [],
    links: [],
    nodeToNeighbors: new Map(),
  });

  const theme = useTheme();

  const { width, height, ref } = useResizeDetector();

  const graphRef = useRef(null);

  const [selectedNode, setSelectedNode] = useState(null);
  const [opacityAtScale, setOpacityAtScale] = useState(0);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [highlightNodeIds, setHighlightNodeIds] = useState(new Set());
  const [highlightLinkIds, setHighlightLinkIds] = useState(new Set());

  const zoomTransformRef = useRef(null);

  const [graphForceLinkDistance, setGraphLinkDistance] = useState(
    FORCE_RANGES.linkDistance.default
  );
  const [graphForceLinkStrength, setGraphForceLinkStrength] = useState(
    FORCE_RANGES.linkStrength.default
  );
  const [graphForceChargeStrength, setGraphForceChargeStrength] = useState(
    FORCE_RANGES.chargeStrength.default
  );
  const [showGrid, setShowGrid] = useState(true);

  // Cache this values as they are used multiple times
  const graphColorSettings = useMemo(() => {
    const settings = {
      backgroundColor: theme.palette.mode === 'dark' ? '#151515' : '#fbfbfb',
      gridColor: theme.palette.mode === 'dark' ? '#242424' : '#eaeaea',
      nodeColor: theme.palette.mode === 'dark' ? '#aaaaaa' : '#5c5c5c',
      linkColor: theme.palette.mode === 'dark' ? '#3f3f3f' : '#c4c4c4',
      nodeHighlightColor: theme.palette.primary.main,
      linkHighlightColor: theme.palette.secondary.main,
      nodeHoverColor: theme.palette.primary.light,
      linkHoverColor: theme.palette.secondary.light,
      nonHoveredOpacity: 0.1,
    };

    settings.textColor = settings.nodeColor;

    const nonHoveredOpacityHex = Math.round(255 * settings.nonHoveredOpacity)
      .toString(16)
      .padStart(2, '0');
    settings.nodeNonHoveredColor = settings.nodeColor + nonHoveredOpacityHex;
    settings.linkNonHoveredColor = settings.linkColor + nonHoveredOpacityHex;
    settings.textNonHoveredColor = settings.textColor + nonHoveredOpacityHex;

    return settings;
  }, [theme]);

  const graphSizeSettings = useMemo(() => {
    const settings = {
      nodeVal: 2,
      nodeRelSize: 10,
      fontSize: 24,
      hoverlineWidth: 2,
      maxZoom: 3,
      minZoom: 0.1,
      gridSize: 512,
      linkWidth: 1,
    };
    settings.edgeSide = settings.nodeVal * settings.nodeRelSize;
    settings.nodeRadius = Math.sqrt(settings.nodeVal) * settings.nodeRelSize;
    settings.arrowSize = settings.nodeVal * settings.nodeRelSize;

    return settings;
  }, []);

  const handleOnNodeClick = (node) => {
    setSelectedNode(node);
  };

  const handleOnBackgroundClick = () => {
    setSelectedNode(null);
  };

  const handleOnNodeHover = useCallback(
    (node) => {
      if (!node) {
        setHoveredNodeId(null);
        setHighlightNodeIds(new Set());
        setHighlightLinkIds(new Set());
        return;
      }

      const newHighlightNodeIds = new Set();
      const newHighlightLinkIds = new Set();

      if (node.isEdge) {
        graphData.nodeToNeighbors.get(node.id).forEach(([linkId, nodeId]) => {
          newHighlightNodeIds.add(nodeId);
          newHighlightLinkIds.add(linkId);
        });
      } else {
        for (const [firstLinkId, firstNodeId] of graphData.nodeToNeighbors.get(
          node.id
        )) {
          newHighlightNodeIds.add(firstNodeId);
          newHighlightLinkIds.add(firstLinkId);

          for (const [
            secondLinkId,
            secondNodeId,
          ] of graphData.nodeToNeighbors.get(firstNodeId)) {
            newHighlightNodeIds.add(secondNodeId);
            newHighlightLinkIds.add(secondLinkId);
          }
        }
      }

      setHoveredNodeId(node.id);
      setHighlightNodeIds(newHighlightNodeIds);
      setHighlightLinkIds(newHighlightLinkIds);
    },
    [graphData]
  );

  const handleOnZoom = (zoom) => {
    zoomTransformRef.current = zoom;
  };

  const handleRenderFramePre = (ctx, globalScale) => {
    if (!showGrid) return;

    const graph = graphRef.current;
    if (!graph) return;

    const zoomTransform = zoomTransformRef.current;
    if (!zoomTransform) return;

    // Set the opacity given the current scale
    const maxFadeAtGlobalScale = 0.45;
    const minFadeAtGlobalScale = 0.6;
    setOpacityAtScale(
      Math.min(
        1.0,
        Math.max(
          0.0,
          (globalScale - maxFadeAtGlobalScale) /
            (minFadeAtGlobalScale - maxFadeAtGlobalScale)
        )
      )
    );

    // Handle grid drawing
    ctx.save();
    const { gridSize } = graphSizeSettings;
    const { gridColor } = graphColorSettings;
    const { x: xMin, y: yMin } = graph.screen2GraphCoords(0, 0);
    const { x: xMax, y: yMax } = graph.screen2GraphCoords(width, height);
    const xMid = (xMin + xMax) / 2;
    const yMid = (yMin + yMax) / 2;

    ctx.beginPath();
    ctx.setLineDash([1 / globalScale, 1 / globalScale]);
    ctx.lineWidth = 1 / globalScale;
    ctx.strokeStyle = gridColor;

    // Draw vertical lines
    for (let x = xMid - (zoomTransform.x % gridSize); x > xMin; x -= gridSize) {
      ctx.moveTo(x, yMin);
      ctx.lineTo(x, yMax);
    }
    for (
      let x = xMid + gridSize - (zoomTransform.x % gridSize);
      x < xMax;
      x += gridSize
    ) {
      ctx.moveTo(x, yMin);
      ctx.lineTo(x, yMax);
    }

    // Draw horizontal lines
    for (let y = yMid - (zoomTransform.y % gridSize); y > yMin; y -= gridSize) {
      ctx.moveTo(xMin, y);
      ctx.lineTo(xMax, y);
    }
    for (
      let y = yMid + gridSize - (zoomTransform.y % gridSize);
      y < yMax;
      y += gridSize
    ) {
      ctx.moveTo(xMin, y);
      ctx.lineTo(xMax, y);
    }

    ctx.stroke();
    ctx.restore();
  };

  const NodeCanvasObject = useCallback(
    (node, ctx, globalScale) => {
      ctx.save();

      const { x, y } = node;
      const isHovered = hoveredNodeId === node.id;
      const isSelected = selectedNode?.id === node.id;

      // Draw the shape of the node
      if (node.isEdge) {
        if (hoveredNodeId) {
          if (isHovered || highlightNodeIds.has(node.id)) {
            ctx.fillStyle = graphColorSettings.linkHighlightColor;
          } else {
            ctx.fillStyle = graphColorSettings.linkNonHoveredColor;
          }
        } else if (isSelected) {
          ctx.fillStyle = graphColorSettings.linkHighlightColor;
        } else {
          ctx.fillStyle = graphColorSettings.linkColor;
        }

        ctx.fillRect(
          x - graphSizeSettings.edgeSide / 2,
          y - graphSizeSettings.edgeSide / 2,
          graphSizeSettings.edgeSide,
          graphSizeSettings.edgeSide
        );
      } else {
        if (hoveredNodeId) {
          if (isHovered || highlightNodeIds.has(node.id)) {
            ctx.fillStyle = graphColorSettings.nodeHighlightColor;
          } else {
            ctx.fillStyle = graphColorSettings.nodeNonHoveredColor;
          }
        } else if (isSelected) {
          ctx.fillStyle = graphColorSettings.nodeHighlightColor;
        } else {
          ctx.fillStyle = graphColorSettings.nodeColor;
        }

        ctx.beginPath();
        ctx.arc(x, y, graphSizeSettings.nodeRadius, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Label
      let fontSize = Math.min(
        graphSizeSettings.fontSize,
        graphSizeSettings.fontSize * globalScale
      );
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (isSelected) {
        ctx.fillStyle = node.isEdge
          ? graphColorSettings.linkHighlightColor
          : graphColorSettings.nodeHighlightColor;
        fontSize = Math.max(
          graphSizeSettings.fontSize,
          graphSizeSettings.fontSize / globalScale
        );
      } else if (hoveredNodeId) {
        ctx.fillStyle = graphColorSettings.textColor;
        if (isHovered || isSelected) {
          fontSize = Math.max(
            graphSizeSettings.fontSize,
            graphSizeSettings.fontSize / globalScale
          );
        } else if (highlightNodeIds.has(node.id)) {
          // Prevent drawing text when opacity is zero
          if (!opacityAtScale) {
            ctx.restore();
            return;
          }

          // Calculate color at scale in hex
          const textOpacityAtScaleHex = Math.round(opacityAtScale * 255)
            .toString(16)
            .padStart(2, '0');
          ctx.fillStyle = graphColorSettings.textColor + textOpacityAtScaleHex;
        } else {
          if (!opacityAtScale) {
            ctx.restore();
            return;
          }

          ctx.fillStyle = graphColorSettings.textNonHoveredColor;
        }
      } else {
        // Prevent drawing text when opacity is zero
        if (!opacityAtScale) {
          ctx.restore();
          return;
        }

        // Calculate color at scale in hex
        const textOpacityAtScaleHex = Math.round(opacityAtScale * 255)
          .toString(16)
          .padStart(2, '0');
        ctx.fillStyle = graphColorSettings.textColor + textOpacityAtScaleHex;
      }

      ctx.font = `${fontSize}px "Roboto"`;
      const yOffset = graphSizeSettings.nodeRadius + fontSize;
      ctx.fillText(node.label, x, y + yOffset);

      ctx.restore();
    },
    [
      hoveredNodeId,
      highlightNodeIds,
      graphColorSettings,
      graphSizeSettings,
      opacityAtScale,
      selectedNode?.id,
    ]
  );

  const handleLinkColor = useCallback(
    (link) => {
      if (hoveredNodeId) {
        if (highlightLinkIds.has(link.id)) {
          return graphColorSettings.linkHighlightColor;
        } else {
          return graphColorSettings.linkNonHoveredColor;
        }
      }
      return graphColorSettings.linkColor;
    },
    [hoveredNodeId, highlightLinkIds, graphColorSettings]
  );

  useEffect(() => {
    const graph = graphRef.current;
    if (graph) {
      graph.d3Force(
        'link',
        d3Force
          .forceLink()
          .distance(FORCE_RANGES.linkDistance.default)
          .strength(0.5)
      );
      graph.d3Force(
        'charge',
        d3Force
          .forceManyBody()
          .strength(FORCE_RANGES.chargeStrength.default)
          .distanceMin(1)
          .distanceMax(FORCE_RANGES.linkDistance.max)
      );
      graph.d3Force(
        'center',
        d3Force.forceCenter(0, 0).strength(FORCE_RANGES.center.default)
      );
    }
  }, [graphRef, graphSizeSettings.nodeRadius]);

  useEffect(() => {
    const graph = graphRef.current;
    if (graph) {
      graph.d3Force('link').strength(graphForceLinkStrength);
      graph.d3ReheatSimulation();
    }
  }, [graphForceLinkStrength, graphRef]);

  useEffect(() => {
    const graph = graphRef.current;
    if (graph) {
      graph.d3Force('link').distance(graphForceLinkDistance);
      graph.d3ReheatSimulation();
    }
  }, [graphForceLinkDistance, graphRef]);

  useEffect(() => {
    const graph = graphRef.current;
    if (graph) {
      graph.d3Force('charge').strength(-graphForceChargeStrength);
      graph.d3ReheatSimulation();
    }
  }, [graphForceChargeStrength, graphRef]);

  const addNodes = useCallback((nodes) => {
    setGraphData((prevGraphData) => {
      const uniqueNodesMap = new Map(nodes.map((node) => [node.id, node]));
      const uniqueNodes = Array.from(uniqueNodesMap.values());
      const newNodes = uniqueNodes.filter(
        (node) => !prevGraphData.nodes.find((n) => n.id === node.id)
      );

      if (!newNodes.length) return prevGraphData;

      const newNodeToNeighbors = new Map();
      newNodes.forEach((node) => {
        newNodeToNeighbors.set(node.id, new Set());
      });

      return {
        ...prevGraphData,
        nodes: [...prevGraphData.nodes, ...newNodes],
        nodeToNeighbors: new Map([
          ...prevGraphData.nodeToNeighbors,
          ...newNodeToNeighbors,
        ]),
      };
    });
  }, []);

  const addLinks = useCallback((links) => {
    setGraphData((prevGraphData) => {
      const newLinks = links.filter(
        (link) => !prevGraphData.links.find((l) => l.id === link.id)
      );

      if (!newLinks.length) return prevGraphData;

      for (const newLink of newLinks) {
        const { id, source, target } = newLink;
        prevGraphData.nodeToNeighbors.get(source).add([id, target]);
        prevGraphData.nodeToNeighbors.get(target).add([id, source]);
      }
      return {
        ...prevGraphData,
        links: [...prevGraphData.links, ...newLinks],
      };
    });
  }, []);

  const addConnection = useCallback((edge) => {
    const { source, target } = edge;
    addNodes([source, target, edge]);
    addLinks([
      {
        id: `${source.id}-${edge.id}->${target.id}-1`,
        source: source.id,
        target: edge.id,
      },
      {
        id: `${source.id}-${edge.id}->${target.id}-2`,
        source: edge.id,
        target: target.id,
      },
    ]);
  }, [addNodes, addLinks]);

  const removeNode = useCallback((node) => {
    setGraphData((prevGraphData) => {
      const updatedNodes = prevGraphData.nodes.filter(
        (n) => n.id !== node.id
      );

      const updatedNodeToNeighbors = new Map(
        [...prevGraphData.nodeToNeighbors].filter(
          ([nodeId]) => nodeId !== node.id
        )
      );

      return {
        ...prevGraphData,
        nodes: updatedNodes,
        nodeToNeighbors: updatedNodeToNeighbors,
      };
    });
  }, []);

  const removeLinks = useCallback((links) => {
    setGraphData((prevGraphData) => {
      const linkIdsToRemove = new Set(links.map((link) => link.id));

      const updatedLinks = prevGraphData.links.filter(
        (link) => !linkIdsToRemove.has(link.id)
      );

      links.forEach(({ id, source, target }) => {
        const sourceNeighbors = prevGraphData.nodeToNeighbors.get(source);
        if (sourceNeighbors) {
          sourceNeighbors.forEach((neighbor) => {
            if (neighbor[0] === id && neighbor[1] === target) {
              sourceNeighbors.delete(neighbor);
              return;
            }
          });
        }

        const targetNeighbors = prevGraphData.nodeToNeighbors.get(target);
        if (targetNeighbors) {
          targetNeighbors.forEach((neighbor) => {
            if (neighbor[0] === id && neighbor[1] === source) {
              targetNeighbors.delete(neighbor);
              return;
            }
          });
        }
      });

      return {
        ...prevGraphData,
        links: updatedLinks,
      };
    });
  }, []);

  const removeConnection = useCallback((edge) => {
    const { source, target } = edge;
    removeNode(edge);
    removeLinks([
      {
        id: `${source.id}-${edge.id}->${target.id}-1`,
        source: source.id,
        target: edge.id,
      },
      {
        id: `${source.id}-${edge.id}->${target.id}-2`,
        source: edge.id,
        target: target.id,
      },
    ]);
  }, [removeNode, removeLinks]);

  const removeNodeAndConnections = useCallback((node) => {
    const neighbors = graphData.nodeToNeighbors.get(node.id);
    neighbors.forEach(([_linkId, neighborId]) => {
      const edge = graphData.nodes.find((n) => n.id === neighborId);
      removeConnection(edge);
    });
    removeNode(node);
  }, [graphData, removeConnection, removeNode]);

  const removeConnectionAndNeighbors = useCallback((edge) => {
    const { source, target } = edge;
    if (graphData.nodeToNeighbors.get(source.id).size === 1) {
      removeNode(source);
    }
    if (graphData.nodeToNeighbors.get(target.id).size === 1) {
      removeNode(target);
    }
    removeConnection(edge);
  }, [graphData, removeConnection, removeNode]);

  const isNodeInGraphView = useCallback((node) => {
    return graphData.nodes.some((graphNode) => graphNode.id === node?.id);
  }, [graphData.nodes]);

  const clearAll = useCallback(() => {
    setGraphData({
      nodes: [],
      links: [],
      nodeToNeighbors: new Map(),
    });
  }, []);

  return (
    <>
      <Helmet title={`GraphView | MillenniumDB`} />
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
        <GraphSearchBar
          modelString={modelString}
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
        />
        <GraphObjectDetails
          modelString={modelString}
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
          addNodes={addNodes}
          addConnection={addConnection}
          removeNodeAndConnections={removeNodeAndConnections}
          removeConnectionAndNeighbors={removeConnectionAndNeighbors}
          isNodeInGraphView={isNodeInGraphView}
        />
        <GraphSettings
          graphForceLinkDistance={graphForceLinkDistance}
          setGraphForceLinkDistance={setGraphLinkDistance}
          graphForceChargeStrength={graphForceChargeStrength}
          setGraphForceChargeStrength={setGraphForceChargeStrength}
          graphForceLinkStrength={graphForceLinkStrength}
          setGraphForceLinkStrength={setGraphForceLinkStrength}
          showGrid={showGrid}
          setShowGrid={setShowGrid}
        />
        <Box
          sx={(theme) => ({
            position: 'absolute',
            zIndex: theme.zIndex.fab + 1,
            top: 66,
            right: 16,
            [`${theme.breakpoints.down('md')}`]: {
              top: 138,
            },
          })}
        >
          <Tooltip title="Clear All" placement="left">
            <IconButton size="large" onClick={() => clearAll()}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
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
