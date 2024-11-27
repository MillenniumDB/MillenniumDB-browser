import {
  Autocomplete,
  Box,
  CircularProgress,
  debounce,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useMemo, useState } from 'react';
import { useDriverContext } from '../context/DriverContext';
import {
  graphObjectToReactForceGraphNode,
  graphObjectToTypeString,
} from '../utils/GraphObjectUtils';

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const transformInputToRegex = (input) => {
  const words = input.trim().split(/\s+/).map(escapeRegex);
  const regexPattern = words.map((word) => `${word}`).join('.*');
  return regexPattern;
};

const getSearchQuery = (modelString, input) => {
  const regexPattern = transformInputToRegex(input);
  switch (modelString) {
    case 'rdf':
      return `SELECT ?node ?o WHERE { ?node xsd:label ?o . FILTER regex(?o, "${regexPattern}", "i")} LIMIT 50`;
    case 'quad':
      return `MATCH (?node) WHERE REGEX(?node.label, "${regexPattern}", "i") RETURN ?node, ?node.label LIMIT 50`;
    default:
      throw new Error('Invalid model string');
  }
};

const GraphSearchBar = React.memo(({ modelString, selectedNode, setSelectedNode }) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [debouncedInputValue, setDebouncedInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const driverContext = useDriverContext();

  const handleOnChange = (_event, newValue) => {
    if (newValue !== null) {
      setSelectedNode(newValue.node);
    }
  };

  const handleOnInputChange = (_event, newInputValue, reason) => {
    if (reason === "reset") return;
    setInputValue(newInputValue);
  };

  const searchNodes = useMemo(
    () =>
      debounce(async (input, modelString, driverContext, callback) => {
        const query = getSearchQuery(modelString, input);
        const session = driverContext.driver.session();
        try {
          const result = await session.run(query);
          const records = await result.records();
          const newOptions = records.map((record) => {
            const graphObject = record.get('node');
            const node = graphObjectToReactForceGraphNode(graphObject);
            const label = record.get('node.label');
            const id = node.id;
            const type = graphObjectToTypeString(graphObject);
            return {
              id,
              label,
              type,
              node,
            };
          });
          callback(newOptions);
        } catch (error) {
          enqueueSnackbar({
            message: error.message || 'Error in search',
            variant: 'error',
          });
          callback([]);
        } finally {
          session.close();
        }
      }, 500),
    []
  );

  useEffect(() => {
    let active = true;

    if (inputValue === '') {
      searchNodes.clear();
      setLoading(false);
      setDebouncedInputValue(inputValue);
      setOptions([]);
      return undefined;
    }

    setLoading(true);
    searchNodes(inputValue, modelString, driverContext, (newOptions) => {
      if (active) {
        setDebouncedInputValue(inputValue);
        setOptions(newOptions);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [inputValue, modelString, driverContext, searchNodes]);

  useEffect(() => {
    if (selectedNode) {
      setValue({
        id: selectedNode.id,
        label: selectedNode.label,
      });
    } else {
      setValue(null);
      setInputValue('');
    }
  }, [selectedNode]);

  return (
    <Box
      elevation={0}
      variant="outlined"
      sx={(theme) => ({
        background: theme.palette.background.paper,
        position: 'absolute',
        zIndex: theme.zIndex.drawer + 1,
        top: 16,
        left: 16,
        width: 468,
        [`${theme.breakpoints.down('md')}`]: {
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
        inputValue={inputValue}
        loading={loading}
        loadingText="Searching..."
        noOptionsText="No results"
        onChange={handleOnChange}
        onInputChange={handleOnInputChange}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        freeSolo
        autoComplete
        includeInputInList
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            color="primary"
            placeholder="Search for a node"
            InputProps={{
              ...params.InputProps,
              sx: {
                ...params.InputProps.sx,
                pr: '16px !important',
              },
              endAdornment: (
                <>
                  {loading ? <CircularProgress size={20} /> : null}
                  {/* {params.InputProps.endAdornment} */}
                </>
              ),
            }}
            fullWidth
          />
        )}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;

          const matches = match(option.label, debouncedInputValue, { insideWords: true, requireMatchAll: true });
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
                  {option.type}
                </Typography>
              </Grid>
            </li>
          );
        }}
      />
    </Box>
  );
});

export default GraphSearchBar;
