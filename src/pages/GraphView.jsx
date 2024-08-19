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

// Node size
const NODE_VAL = 2; // Value of nodes
const NODE_REL_SIZE = 4; // Ratio of node circle area per value unit
const NODE_COLOR = 'cyan';
const LINK_COLOR = 'orange';
const TEXT_COLOR = '#fff';
const TEXT_BG_COLOR = '#000';
const FONT_SIZE = 14;

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
        const results = [
          { id: 1 + text, label: text + 'A' },
          { id: 2 + text, label: text + 'B' },
          { id: 3 + text, label: text + 'C' },
        ];
        callback(results);
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
  const graphData = useMemo(() => {
    const graph = {
      nodes: [
        { id: '1', label: 'Juan', isEdge: false },
        { id: '2', label: 'Pablo', isEdge: false },
        { id: '3', label: 'Diego', isEdge: false },

        { id: '4', label: 'Chile', isEdge: false },
        { id: '5', label: 'Argentina', isEdge: false },
        { id: '6', label: 'Brasil', isEdge: false },

        { id: '7', label: 'Gatos', isEdge: false },

        { id: '1->2', label: 'xsd:knows', isEdge: true },
        { id: '1->3', label: 'xsd:knows', isEdge: true },
        { id: '2->3', label: 'xsd:knows', isEdge: true },

        { id: '1->4', label: 'xsd:livesAt', isEdge: true },
        { id: '2->5', label: 'xsd:livesAt', isEdge: true },
        { id: '3->6', label: 'xsd:livesAt', isEdge: true },

        { id: '2->7', label: 'xsd:loves', isEdge: true },
      ],
      links: [
        { source: '1', target: '1->2', id: 1 },
        { source: '1->2', target: '2', id: 2 },
        { source: '1', target: '1->3', id: 3 },
        { source: '1->3', target: '3', id: 4 },
        { source: '2', target: '2->3', id: 5 },
        { source: '2->3', target: '3', id: 6 },

        { source: '1', target: '1->4', id: 7 },
        { source: '1->4', target: '4', id: 8 },
        { source: '2', target: '2->5', id: 9 },
        { source: '2->5', target: '5', id: 10 },
        { source: '3', target: '3->6', id: 11 },
        { source: '3->6', target: '6', id: 12 },

        { source: '2', target: '2->7', id: 13 },
        { source: '2->7', target: '7', id: 14 },
      ],
    };

    // This structure should be updated together with the graph data
    const node2neighbors = new Map();

    for (const node of graph.nodes) {
      node2neighbors.set(node.id, new Set());
    }

    for (const link of graph.links) {
      node2neighbors.get(link.source).add([link.id, link.target]);
      node2neighbors.get(link.target).add([link.id, link.source]);
    }

    graph.node2neighbors = node2neighbors;

    return graph;
  }, []);

  const theme = useTheme();

  const { width, height, ref } = useResizeDetector();

  const darkModeContext = useDarkModeContext();

  const graphRef = useRef(null);

  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [highlightNodeIds, setHighlightNodeIds] = useState(new Set());
  const [highlightLinkIds, setHighlightLinkIds] = useState(new Set());

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

      for (const [firstEdgeId, firstNodeId] of graphData.node2neighbors.get(
        node.id
      )) {
        newHighlightNodeIds.add(firstNodeId);
        newHighlightLinkIds.add(firstEdgeId);

        for (const [secondEdgeId, secondNodeId] of graphData.node2neighbors.get(
          firstNodeId
        )) {
          newHighlightNodeIds.add(secondNodeId);
          newHighlightLinkIds.add(secondEdgeId);
        }
      }

      setHoveredNodeId(node.id);
      setHighlightNodeIds(newHighlightNodeIds);
      setHighlightLinkIds(newHighlightLinkIds);
    },
    [graphData]
  );

  const NodeCanvasObject = useCallback(
    (node, ctx, globalScale) => {
      const { x, y } = node;
      if (node.isEdge) {
        const sideOut = NODE_VAL * NODE_REL_SIZE;
        const sideIn = sideOut / 1.25;

        // Border
        if (hoveredNodeId) {
          if (hoveredNodeId === node.id) {
            ctx.fillStyle = 'red';
          } else if (highlightNodeIds.has(node.id)) {
            ctx.fillStyle = 'blue';
          } else {
            ctx.fillStyle = 'grey';
          }
        } else {
          ctx.fillStyle = theme.palette.secondary.main;
        }
        ctx.fillRect(x - sideOut / 2, y - sideOut / 2, sideOut, sideOut);

        // Fill
        ctx.fillStyle = ctx.canvas.style.backgroundColor;
        ctx.fillRect(x - sideIn / 2, y - sideIn / 2, sideIn, sideIn);
      } else {
        const radiusOut = Math.sqrt(NODE_VAL) * NODE_REL_SIZE;
        const radiusIn = radiusOut / 1.25;

        // Border
        if (hoveredNodeId) {
          if (hoveredNodeId === node.id) {
            ctx.fillStyle = 'red';
          } else if (highlightNodeIds.has(node.id)) {
            ctx.fillStyle = 'blue';
          } else {
            ctx.fillStyle = 'grey';
          }
        } else {
          ctx.fillStyle = theme.palette.primary.main;
        }
        ctx.beginPath();
        ctx.arc(x, y, radiusOut, 0, 2 * Math.PI);
        ctx.fill();

        // Fill
        ctx.beginPath();
        ctx.arc(x, y, radiusIn, 0, 2 * Math.PI);
        ctx.fillStyle = ctx.canvas.style.backgroundColor;
        ctx.fill();
      }

      // Text
      const fontSize = Math.max(FONT_SIZE / globalScale, 1);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.font = `${fontSize}px "Courier New", monospace`;

      const textWidth = ctx.measureText(node.label).width;
      ctx.fillStyle = TEXT_BG_COLOR;
      ctx.fillRect(
        x - textWidth / 2 - 1,
        y + Math.sqrt(NODE_VAL) * NODE_REL_SIZE * 1.2 - 1,
        textWidth + 2,
        fontSize + 2
      );
      ctx.fillStyle = TEXT_COLOR;
      ctx.fillText(
        node.label,
        x,
        y + Math.sqrt(NODE_VAL) * NODE_REL_SIZE * 1.2
      );
    },
    [hoveredNodeId, theme]
  );

  const handleLinkColor = useCallback(
    (link) => {
      if (hoveredNodeId) {
        if (highlightLinkIds.has(link.id)) {
          return 'red';
        } else {
          return 'grey';
        }
      }
      return theme.palette.secondary.main;
    },
    [theme, highlightLinkIds]
  );

  useEffect(() => {
    const graph = graphRef.current;
    if (graph) {
      graph.d3Force('link', d3Force.forceLink().distance(30));
      graph.d3Force('center', d3Force.forceCenter().strength(0.05));
      graph.d3Force(
        'charge',
        d3Force.forceManyBody().strength(-30).distanceMin(1).distanceMax(150)
      );
    }
  }, [graphRef]);

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
        backgroundColor={darkModeContext.darkMode ? '#242424' : '#dedede'}
        // Nodes
        nodeRelSize={NODE_REL_SIZE}
        nodeVal={NODE_VAL} // click/drag radius
        nodeColor={null}
        nodeLabel={null}
        nodeCanvasObject={NodeCanvasObject}
        nodeCanvasObjectMode={() => 'replace'}
        // Links
        linkDirectionalArrowLength={(link) => (link.source.isEdge ? 4 : 0)}
        linkDirectionalArrowRelPos={1}
        linkColor={handleLinkColor}
        linkWidth={1}
        // Events
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        // Performance
        warmupTicks={100}
        cooldownTicks={Infinity}
      />
    </Box>
  );
}
