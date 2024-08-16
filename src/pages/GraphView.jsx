import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import {
  Autocomplete,
  Box,
  Grid,
  Paper,
  TextField,
  ToggleButton,
  Typography,
} from '@mui/material';
import { debounce } from '@mui/material/utils';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import * as d3Force from 'd3-force';
import { useEffect, useMemo, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useResizeDetector } from 'react-resize-detector';
import { useThemeContext } from '../context/ThemeContext';

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
      graph.d3Force('link', d3Force.forceLink().distance(30));
      graph.d3Force('center', d3Force.forceCenter().strength(0.05));
      graph.d3Force(
        'charge',
        d3Force.forceManyBody().strength(-30).distanceMin(1).distanceMax(150)
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
