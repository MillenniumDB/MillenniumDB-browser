import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { Box, Paper, TextField, ToggleButton } from '@mui/material';
import { useRef, useEffect, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useResizeDetector } from 'react-resize-detector';
import { useThemeContext } from '../context/ThemeContext';
import * as d3Force from 'd3-force';

const SearchBar = () => {
  const onChangeTimeout = useRef(null);

  const handleOnChange = (event) => {
    if (onChangeTimeout.current) {
      clearTimeout(onChangeTimeout.current);
    }

    if (event.target.value.length) {
      onChangeTimeout.current = setTimeout(() => {
        console.log('Search:', event.target.value);
      }, 200);
    }
  };

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
      <TextField
        color="primary"
        placeholder="Search for a node"
        onChange={handleOnChange}
        fullWidth
      />
    </Paper>
  );
};

const FullScreenButton = ({ handle }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        zIndex: 'fab',
      }}
    >
      <ToggleButton
        value="fullscreen"
        size="small"
        selected={handle.active}
        onChange={handle.active ? handle.exit : handle.enter}
      >
        {handle.active ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </ToggleButton>
    </Paper>
  );
};

export default function GraphView() {
  const [graphData, setGraphData] = useState({
    nodes: [...Array(100).keys()].map((i) => ({ id: i })),
    links: [...Array(100).keys()]
      .filter((id) => id)
      .map((id) => ({
        source: id,
        target: Math.round(Math.random() * (id - 1)),
      })),
  });

  const { width, height, ref } = useResizeDetector();

  const fullScreenHandle = useFullScreenHandle();

  const themeContext = useThemeContext();

  const graphRef = useRef(null);

  const handleNodeClick = (node) => {
    console.log('handleNodeClick', node);
  };

  useEffect(() => {
    const graph = graphRef.current;
    if (graph) {
      graph.d3Force('link', d3Force.forceLink().distance(60));
      graph.d3Force('center', d3Force.forceCenter().strength(0.05));
      graph.d3Force(
        'charge',
        d3Force.forceManyBody().strength(-60).distanceMin(1).distanceMax(180)
      );
    }
  }, [graphRef]);

  return (
    <FullScreen handle={fullScreenHandle}>
      <Box
        ref={ref}
        sx={(theme) => ({
          height: fullScreenHandle.active ? '100vh' : 'calc(100vh - 56px)',
          [`${theme.breakpoints.up('sm')}`]: {
            height: fullScreenHandle.active ? '100vh' : 'calc(100vh - 64px)',
          },
          [`${theme.breakpoints.up('xs')}`]: {
            '@media (orientation: landscape)': {
              height: fullScreenHandle ? '100vh' : 'calc(100vh - 48px)',
            },
          },
          width: '100vw',
          position: 'relative',
        })}
      >
        <SearchBar />
        <FullScreenButton handle={fullScreenHandle} />
        <ForceGraph2D
          ref={graphRef}
          graphData={graphData}
          width={width}
          height={height}
          backgroundColor={themeContext.darkMode ? '#242424' : '#dedede'}
          // Nodes
          // Links
          // Events
          onNodeClick={handleNodeClick}
          // Performance
          warmupTicks={100}
          cooldownTicks={100}
        />
      </Box>
    </FullScreen>
  );
}
