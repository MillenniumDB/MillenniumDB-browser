import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import * as d3Force from 'd3-force';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useResizeDetector } from 'react-resize-detector';
import GraphSearchBar from '../components/GraphSearchBar';
import GraphSettings, { FORCE_RANGES } from '../components/GraphSettings';
import { useDriverContext } from '../context/DriverContext';

export default function GraphView() {
  const [graphData, setGraphData] = useState({
    nodes: [],
    links: [],
    node2neighbors: new Map(),
  });

  const theme = useTheme();

  const { width, height, ref } = useResizeDetector();

  const driverContext = useDriverContext();

  const graphRef = useRef(null);

  const [textOpacityAtScale, setTextOpacityAtScale] = useState(0);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [highlightNodeIds, setHighlightNodeIds] = useState(new Set());
  const [highlightLinkIds, setHighlightLinkIds] = useState(new Set());

  const [graphForceLinkDistance, setGraphLinkDistance] = useState(
    FORCE_RANGES.linkDistance.default
  );
  const [graphForceLinkStrength, setGraphForceLinkStrength] = useState(
    FORCE_RANGES.linkStrength.default
  );
  const [graphForceChargeStrength, setGraphForceChargeStrength] = useState(
    FORCE_RANGES.chargeStrength.default
  );

  // Cache this values as they are used multiple times
  const graphColorSettings = useMemo(() => {
    const settings = {
      backgroundColor: theme.palette.mode === 'dark' ? '#151515' : '#ffffff',
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

    return settings;
  }, [theme]);

  const graphSizeSettings = useMemo(() => {
    const settings = {
      nodeVal: 2,
      nodeRelSize: 10,
      fontSize: 24,
      hoverlineWidth: 2,
    };
    settings.edgeSide = settings.nodeVal * settings.nodeRelSize;
    settings.nodeRadius = Math.sqrt(settings.nodeVal) * settings.nodeRelSize;
    settings.arrowSize = settings.nodeVal * settings.nodeRelSize;

    return settings;
  }, []);

  const handleNodeClick = useCallback((node) => {
    console.log('handleNodeClick', node);
  }, []);

  const handleNodeHover = useCallback(
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
        graphData.node2neighbors.get(node.id).forEach(([edgeId, nodeId]) => {
          newHighlightNodeIds.add(nodeId);
          newHighlightLinkIds.add(edgeId);
        });
      } else {
        for (const [firstEdgeId, firstNodeId] of graphData.node2neighbors.get(
          node.id
        )) {
          newHighlightNodeIds.add(firstNodeId);
          newHighlightLinkIds.add(firstEdgeId);

          for (const [
            secondEdgeId,
            secondNodeId,
          ] of graphData.node2neighbors.get(firstNodeId)) {
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

  const handleRenderFramePre = (ctx, globalScale) => {
    const maxTextFadeAtGlobalScale = 0.45;
    const minTextFadeAtGlobalScale = 0.6;
    setTextOpacityAtScale(
      Math.min(
        1.0,
        Math.max(
          0.0,
          (globalScale - maxTextFadeAtGlobalScale) /
            (minTextFadeAtGlobalScale - maxTextFadeAtGlobalScale)
        )
      )
    );
  };

  const NodeCanvasObject = useCallback(
    (node, ctx, globalScale) => {
      const { x, y } = node;
      const isHovered = hoveredNodeId === node.id;

      // Draw the shape of the node
      if (node.isEdge) {
        if (hoveredNodeId) {
          if (isHovered) {
            ctx.strokeStyle = graphColorSettings.linkHoverColor;
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

        ctx.fillRect(
          x - graphSizeSettings.edgeSide / 2,
          y - graphSizeSettings.edgeSide / 2,
          graphSizeSettings.edgeSide,
          graphSizeSettings.edgeSide
        );
      } else {
        if (hoveredNodeId) {
          if (isHovered) {
            ctx.strokeStyle = graphColorSettings.nodeHoverColor;
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

      if (hoveredNodeId) {
        if (isHovered) {
          ctx.fillStyle = graphColorSettings.textColor;
          fontSize = Math.max(
            graphSizeSettings.fontSize,
            graphSizeSettings.fontSize / globalScale
          );
        } else {
          // Prevent drawing text when opacity is zero
          if (!textOpacityAtScale) return;

          if (highlightNodeIds.has(node.id)) {
            // Calculate color at scale in hex
            const textOpacityAtScaleHex = Math.round(textOpacityAtScale * 255)
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
        if (!textOpacityAtScale) return;

        // Calculate color at scale in hex
        const textOpacityAtScaleHex = Math.round(textOpacityAtScale * 255)
          .toString(16)
          .padStart(2, '0');
        ctx.fillStyle = graphColorSettings.textColor + textOpacityAtScaleHex;
      }

      ctx.font = `${fontSize}px "Roboto"`;
      const yOffset = graphSizeSettings.nodeRadius + fontSize * 1.75;
      ctx.fillText(node.label, x, y + yOffset);
    },
    [
      hoveredNodeId,
      highlightNodeIds,
      graphColorSettings,
      graphSizeSettings,
      textOpacityAtScale,
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
      const newNode2Neighbors = new Map();

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
        newNode2Neighbors.set(node.id, new Set());
      }

      for (const link of newLinks) {
        newNode2Neighbors.get(link.source).add([link.id, link.target]);
        newNode2Neighbors.get(link.target).add([link.id, link.source]);
      }

      setGraphData({
        nodes: newNodes,
        links: newLinks,
        node2neighbors: newNode2Neighbors,
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
      })}
    >
      <GraphSearchBar />
      <GraphSettings
        graphForceLinkDistance={graphForceLinkDistance}
        setGraphForceLinkDistance={setGraphLinkDistance}
        graphForceChargeStrength={graphForceChargeStrength}
        setGraphForceChargeStrength={setGraphForceChargeStrength}
        graphForceLinkStrength={graphForceLinkStrength}
        setGraphForceLinkStrength={setGraphForceLinkStrength}
      />
      <ForceGraph2D
        ref={graphRef}
        graphData={graphData}
        width={width}
        height={height}
        backgroundColor={graphColorSettings.backgroundColor}
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
        linkWidth={1}
        // Events
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        onRenderFramePre={handleRenderFramePre}
        // Performance
        warmupTicks={300}
        cooldownTicks={300}
        autoPauseRedraw={true}
      />
    </Box>
  );
}
