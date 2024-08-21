import {
  Autocomplete,
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { debounce } from '@mui/material/utils';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import * as d3Force from 'd3-force';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useResizeDetector } from 'react-resize-detector';
import { useDarkModeContext } from '../context/DarkModeContext';
import { useTheme } from '@emotion/react';
import { useDriverContext } from '../context/DriverContext';

const SearchBar = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const handleOnChange = (_event, newValue) => {
    setOptions(newValue ? [newValue, ...options] : options);
    setValue(newValue);
  };

  const handleOnInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const textSearch = useMemo(
    () =>
      debounce((text, callback) => {
        // TODO: MDB text search
        // callback(results);
      }, 400),
    []
  );

  useEffect(() => {
    let active = true;

    if (!inputValue.length) {
      setValue(null);
      setOptions([]);
      return;
    }

    textSearch(inputValue, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, textSearch]);

  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        position: 'absolute',
        zIndex: 'fab',
        top: 16,
        left: 16,
        width: 400,
        [`${theme.breakpoints.down('sm')}`]: {
          left: 0,
          display: 'block',
          boxSizing: 'border-box',
          width: 'calc(100% - 32px)',
          mx: '16px',
        },
      })}
    >
      <Autocomplete
        getOptionLabel={(option) => option.label}
        getOptionKey={(option) => option.id}
        filterOptions={(x) => x}
        options={options}
        value={value}
        noOptionsText="No results"
        onChange={handleOnChange}
        onInputChange={handleOnInputChange}
        autoComplete
        includeInputInList
        filterSelectedOptions
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            color="primary"
            placeholder="Search for a node"
            fullWidth
          />
        )}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;

          const matches = match(option.label, inputValue);
          const parts = parse(option.label, matches);
          return (
            <li key={key} {...optionProps}>
              <Grid container sx={{ alignItems: 'center' }}>
                <Grid item sx={{ width: '100%', wordWrap: 'break-word' }}>
                  {parts.map((part, partIdx) => (
                    <Box
                      component="span"
                      key={partIdx}
                      sx={{
                        fontWeight: part.highlight ? 'bold' : 'regular',
                      }}
                    >
                      {part.text}
                    </Box>
                  ))}
                </Grid>
                <Typography variant="body2" color="text.secondary">
                  {'Secondary text'}
                </Typography>
              </Grid>
            </li>
          );
        }}
      />
    </Paper>
  );
};

export default function GraphView() {
  const [graphData, setGraphData] = useState({
    nodes: [],
    links: [],
    node2neighbors: new Map(),
  });

  const theme = useTheme();

  const { width, height, ref } = useResizeDetector();

  const darkModeContext = useDarkModeContext();

  const driverContext = useDriverContext();

  const graphRef = useRef(null);

  const [textOpacityAtScale, setTextOpacityAtScale] = useState(0);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [highlightNodeIds, setHighlightNodeIds] = useState(new Set());
  const [highlightLinkIds, setHighlightLinkIds] = useState(new Set());

  // Cache this values as they are used multiple times
  const graphSettings = useMemo(() => {
    const settings = {
      backgroundColor: darkModeContext.darkMode ? '#151515' : '#ffffff',
      nodeColor: darkModeContext.darkMode ? '#aaaaaa' : '#5c5c5c',
      linkColor: darkModeContext.darkMode ? '#3f3f3f' : '#c4c4c4',
      nodeHighlightColor: theme.palette.primary.main,
      linkHighlightColor: theme.palette.secondary.main,
      nodeHoverColor: theme.palette.primary.light,
      linkHoverColor: theme.palette.secondary.light,
      nodeVal: 2,
      nodeRelSize: 10,
      fontSize: 24,
      // When the text is completely transparent
      maxTextFadeAtGlobalScale: 0.45,
      // When the text is completely visible
      minTextFadeAtGlobalScale: 0.6,
      nonHoveredOpacity: 0.1,
      hoverlineWidth: 2,
    };

    settings.edgeSide = settings.nodeVal * settings.nodeRelSize;
    settings.nodeRadius = Math.sqrt(settings.nodeVal) * settings.nodeRelSize;
    settings.textColor = settings.nodeColor;
    settings.arrowSize = settings.nodeVal * settings.nodeRelSize;

    const nonHoveredOpacityHex = Math.round(255 * settings.nonHoveredOpacity)
      .toString(16)
      .padStart(2, '0');
    settings.nodeNonHoveredColor = settings.nodeColor + nonHoveredOpacityHex;
    settings.linkNonHoveredColor = settings.linkColor + nonHoveredOpacityHex;

    // Get opacity of globalScale, interpolating from [textFadeThreshold, 1] to [0, 1]
    settings.getTextOpacityAtGlobalScale = (globalScale) =>
      Math.min(
        1.0,
        Math.max(
          0.0,
          (globalScale - settings.maxTextFadeAtGlobalScale) /
            (settings.minTextFadeAtGlobalScale -
              settings.maxTextFadeAtGlobalScale)
        )
      );
    return settings;
  }, [theme, darkModeContext.darkMode]);

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
    setTextOpacityAtScale(
      Math.min(
        1.0,
        Math.max(
          0.0,
          (globalScale - graphSettings.maxTextFadeAtGlobalScale) /
            (graphSettings.minTextFadeAtGlobalScale -
              graphSettings.maxTextFadeAtGlobalScale)
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
            ctx.strokeStyle = graphSettings.linkHoverColor;
            ctx.lineWidth = graphSettings.hoverlineWidth;
            ctx.strokeRect(
              x - graphSettings.edgeSide / 2,
              y - graphSettings.edgeSide / 2,
              graphSettings.edgeSide,
              graphSettings.edgeSide
            );
            ctx.fillStyle = graphSettings.linkHighlightColor;
          } else if (highlightNodeIds.has(node.id)) {
            ctx.fillStyle = graphSettings.linkHighlightColor;
          } else {
            ctx.fillStyle = graphSettings.linkNonHoveredColor;
          }
        } else {
          ctx.fillStyle = graphSettings.linkColor;
        }

        ctx.fillRect(
          x - graphSettings.edgeSide / 2,
          y - graphSettings.edgeSide / 2,
          graphSettings.edgeSide,
          graphSettings.edgeSide
        );
      } else {
        if (hoveredNodeId) {
          if (isHovered) {
            ctx.strokeStyle = graphSettings.nodeHoverColor;
            ctx.lineWidth = graphSettings.hoverlineWidth;
            ctx.beginPath();
            ctx.arc(x, y, graphSettings.nodeRadius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = graphSettings.nodeHighlightColor;
          } else if (highlightNodeIds.has(node.id)) {
            ctx.fillStyle = graphSettings.nodeHighlightColor;
          } else {
            ctx.fillStyle = graphSettings.linkNonHoveredColor;
          }
        } else {
          ctx.fillStyle = graphSettings.nodeColor;
        }

        ctx.beginPath();
        ctx.arc(x, y, graphSettings.nodeRadius, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Label
      let fontSize = Math.min(
        graphSettings.fontSize,
        graphSettings.fontSize * globalScale
      );
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (hoveredNodeId) {
        if (isHovered) {
          ctx.fillStyle = graphSettings.textColor;
          fontSize = Math.max(
            graphSettings.fontSize,
            graphSettings.fontSize / globalScale
          );
        } else {
          // Prevent drawing text when opacity is zero
          if (!textOpacityAtScale) return;

          if (highlightNodeIds.has(node.id)) {
            // Calculate color at scale in hex
            const textOpacityAtScaleHex = Math.round(textOpacityAtScale * 255)
              .toString(16)
              .padStart(2, '0');
            ctx.fillStyle = graphSettings.textColor + textOpacityAtScaleHex;
          } else {
            ctx.fillStyle = graphSettings.textNonHoveredColor;
          }
        }
      } else {
        // Prevent drawing text when opacity is zero
        if (!textOpacityAtScale) return;

        // Calculate color at scale in hex
        const textOpacityAtScaleHex = Math.round(textOpacityAtScale * 255)
          .toString(16)
          .padStart(2, '0');
        ctx.fillStyle = graphSettings.textColor + textOpacityAtScaleHex;
      }

      ctx.font = `${fontSize}px "Roboto"`;
      const yOffset = graphSettings.nodeRadius + fontSize * 1.75;
      ctx.fillText(node.label, x, y + yOffset);
    },
    [hoveredNodeId, highlightNodeIds, graphSettings, textOpacityAtScale]
  );

  const handleLinkColor = useCallback(
    (link) => {
      if (hoveredNodeId) {
        if (highlightLinkIds.has(link.id)) {
          return graphSettings.linkHighlightColor;
        } else {
          return graphSettings.linkNonHoveredColor;
        }
      }
      return graphSettings.linkColor;
    },
    [hoveredNodeId, highlightLinkIds, graphSettings]
  );

  useEffect(() => {
    const graph = graphRef.current;
    if (graph) {
      graph.d3Force('link', d3Force.forceLink().distance(200));
      graph.d3Force('center', d3Force.forceCenter().strength(0.05));
      graph.d3Force(
        'charge',
        d3Force.forceManyBody().strength(-500).distanceMin(1).distanceMax(500)
      );
    }
  }, [graphRef]);

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
      <SearchBar />
      <ForceGraph2D
        ref={graphRef}
        graphData={graphData}
        width={width}
        height={height}
        backgroundColor={graphSettings.backgroundColor}
        // Nodes
        nodeRelSize={graphSettings.nodeRelSize}
        nodeVal={graphSettings.nodeVal}
        nodeColor={null}
        nodeLabel={null}
        nodeCanvasObject={NodeCanvasObject}
        nodeCanvasObjectMode={() => 'replace'}
        // Links
        linkDirectionalArrowLength={(link) =>
          link.source.isEdge ? graphSettings.arrowSize : 0
        }
        linkDirectionalArrowRelPos={1}
        linkColor={handleLinkColor}
        linkWidth={1}
        // Events
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        onRenderFramePre={handleRenderFramePre}
        // Performance
        warmupTicks={100}
        cooldownTicks={100}
        autoPauseRedraw={true}
      />
    </Box>
  );
}
