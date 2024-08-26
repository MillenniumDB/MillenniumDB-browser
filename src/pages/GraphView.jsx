import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import * as d3Force from 'd3-force';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useResizeDetector } from 'react-resize-detector';
import GraphObjectDetails from '../components/GraphObjectDetails';
import GraphSearchBar from '../components/GraphSearchBar';
import GraphSettings, { FORCE_RANGES } from '../components/GraphSettings';
import { useDriverContext } from '../context/DriverContext';

export default function GraphView() {
  const [graphData, setGraphData] = useState({
    nodes: [],
    links: [],
    nodeToNeighbors: new Map(),
  });

  const theme = useTheme();

  const { width, height, ref } = useResizeDetector();

  const graphRef = useRef(null);

  const driverContext = useDriverContext();

  const [opacityAtScale, setOpacityAtScale] = useState(0);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
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
      backgroundColor: theme.palette.mode === 'dark' ? '#151515' : '#ffffff',
      gridColor: theme.palette.mode === 'dark' ? '#242424' : '#eaeaea',
      nodeColor: theme.palette.mode === 'dark' ? '#aaaaaa' : '#5c5c5c',
      linkColor: theme.palette.mode === 'dark' ? '#3f3f3f' : '#c4c4c4',
      nodeHighlightColor: theme.palette.primary.main,
      linkHighlightColor: theme.palette.secondary.main,
      nodeHoverColor: theme.palette.primary.light,
      linkHoverColor: theme.palette.secondary.light,
      selectedColor: theme.palette.success.main,
      selectedHoverColor: theme.palette.success.light,
      nonHoveredOpacity: 0.1,
    };

    settings.textColor = settings.nodeColor;

    const nonHoveredOpacityHex = Math.round(255 * settings.nonHoveredOpacity)
      .toString(16)
      .padStart(2, '0');
    settings.nodeNonHoveredColor = settings.nodeColor + nonHoveredOpacityHex;
    settings.linkNonHoveredColor = settings.linkColor + nonHoveredOpacityHex;

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
    setSelectedNodeId(node.id);
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
        graphData.nodeToNeighbors.get(node.id).forEach(([edgeId, nodeId]) => {
          newHighlightNodeIds.add(nodeId);
          newHighlightLinkIds.add(edgeId);
        });
      } else {
        for (const [firstEdgeId, firstNodeId] of graphData.nodeToNeighbors.get(
          node.id
        )) {
          newHighlightNodeIds.add(firstNodeId);
          newHighlightLinkIds.add(firstEdgeId);

          for (const [
            secondEdgeId,
            secondNodeId,
          ] of graphData.nodeToNeighbors.get(firstNodeId)) {
            newHighlightNodeIds.add(secondNodeId);
            newHighlightLinkIds.add(secondEdgeId);
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

    if (!showGrid) return;

    // Handle grid drawing
    const graph = graphRef.current;
    const zoomTransform = zoomTransformRef.current;
    if (!graph || !zoomTransform) return;

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
      const isSelected = selectedNodeId === node.id;

      // Draw the shape of the node
      if (node.isEdge) {
        if (hoveredNodeId) {
          if (isHovered) {
            ctx.strokeStyle = isSelected
              ? graphColorSettings.selectedHoverColor
              : graphColorSettings.linkHoverColor;
            ctx.lineWidth = graphSizeSettings.hoverlineWidth;
            ctx.strokeRect(
              x - graphSizeSettings.edgeSide / 2,
              y - graphSizeSettings.edgeSide / 2,
              graphSizeSettings.edgeSide,
              graphSizeSettings.edgeSide
            );
            ctx.fillStyle = graphColorSettings.linkHighlightColor;
          } else if (highlightNodeIds.has(node.id)) {
            ctx.fillStyle = graphColorSettings.linkHighlightColor;
          } else {
            ctx.fillStyle = graphColorSettings.linkNonHoveredColor;
          }
        } else {
          ctx.fillStyle = graphColorSettings.linkColor;
        }

        if (isSelected) {
          ctx.fillStyle = graphColorSettings.selectedColor;
        }

        ctx.fillRect(
          x - graphSizeSettings.edgeSide / 2,
          y - graphSizeSettings.edgeSide / 2,
          graphSizeSettings.edgeSide,
          graphSizeSettings.edgeSide
        );
      } else {
        if (hoveredNodeId) {
          if (isHovered) {
            ctx.strokeStyle = isSelected
              ? graphColorSettings.selectedHoverColor
              : graphColorSettings.nodeHoverColor;
            ctx.lineWidth = graphSizeSettings.hoverlineWidth;
            ctx.beginPath();
            ctx.arc(x, y, graphSizeSettings.nodeRadius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = graphColorSettings.nodeHighlightColor;
          } else if (highlightNodeIds.has(node.id)) {
            ctx.fillStyle = graphColorSettings.nodeHighlightColor;
          } else {
            ctx.fillStyle = graphColorSettings.linkNonHoveredColor;
          }
        } else {
          ctx.fillStyle = graphColorSettings.nodeColor;
        }

        if (isSelected) {
          ctx.fillStyle = graphColorSettings.selectedColor;
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
        ctx.fillStyle = graphColorSettings.selectedColor;
        fontSize = Math.max(
          graphSizeSettings.fontSize,
          graphSizeSettings.fontSize / globalScale
        );
      } else if (hoveredNodeId) {
        if (isHovered) {
          ctx.fillStyle = graphColorSettings.textColor;
          fontSize = Math.max(
            graphSizeSettings.fontSize,
            graphSizeSettings.fontSize / globalScale
          );
        } else {
          // Prevent drawing text when opacity is zero
          if (!opacityAtScale) {
            ctx.restore();
            return;
          }

          if (highlightNodeIds.has(node.id)) {
            // Calculate color at scale in hex
            const textOpacityAtScaleHex = Math.round(opacityAtScale * 255)
              .toString(16)
              .padStart(2, '0');
            ctx.fillStyle =
              graphColorSettings.textColor + textOpacityAtScaleHex;
          } else {
            ctx.fillStyle = graphColorSettings.textNonHoveredColor;
          }
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
      const yOffset = graphSizeSettings.nodeRadius + fontSize * 1.75;
      ctx.fillText(node.label, x, y + yOffset);

      ctx.restore();
    },
    [
      hoveredNodeId,
      highlightNodeIds,
      graphColorSettings,
      graphSizeSettings,
      opacityAtScale,
      selectedNodeId,
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
      const newNodes = nodes.filter(
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
      if (!links.length) return prevGraphData;

      for (const link of links) {
        const { source, target } = link;
        prevGraphData.nodeToNeighbors.get(source.id).add(target.id);
        prevGraphData.nodeToNeighbors.get(target.id).add(source.id);
      }

      return {
        ...prevGraphData,
        links: [...prevGraphData.links, ...links],
      };
    });
  }, []);

  useEffect(() => {
    const fetchGraph = async () => {
      // TODO: Just for testing
      const query =
        'MATCH (?source)-[?edge :?type]->(?target) RETURN * LIMIT 100';

      const session = driverContext.getSession();
      const result = session.run(query);
      return await result.records();
    };

    // TODO: try catch
    fetchGraph().then((records) => {
      const seenNodeIds = new Set();
      const newNodes = [];
      const newLinks = [];
      const newNodeToNeighbors = new Map();

      for (const record of records) {
        const { source, edge, type, target } = record.toObject();

        if (!seenNodeIds.has(source.id)) {
          seenNodeIds.add(source.id);
          newNodes.push({ id: source.id, label: source.id });
        }

        if (!seenNodeIds.has(target.id)) {
          seenNodeIds.add(target.id);
          newNodes.push({ id: target.id, label: target.id });
        }

        newNodes.push({
          id: edge.id,
          label: type.id,
          isEdge: true,
        });

        newLinks.push({
          id: `${source.id}->${edge.id}`,
          source: source.id,
          target: edge.id,
        });
        newLinks.push({
          id: `${edge.id}->${target.id}`,
          source: edge.id,
          target: target.id,
        });
      }

      for (const node of newNodes) {
        newNodeToNeighbors.set(node.id, new Set());
      }

      for (const link of newLinks) {
        newNodeToNeighbors.get(link.source).add([link.id, link.target]);
        newNodeToNeighbors.get(link.target).add([link.id, link.source]);
      }

      setGraphData({
        nodes: newNodes,
        links: newLinks,
        nodeToNeighbors: newNodeToNeighbors,
      });
    });
  }, [driverContext]);

  return (
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
      <GraphSearchBar />
      <GraphObjectDetails
        selectedNodeId={selectedNodeId}
        setSelectedNodeId={setSelectedNodeId}
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
        // Performance
        warmupTicks={300}
        cooldownTicks={300}
        autoPauseRedraw={true}
      />
    </Box>
  );
}
