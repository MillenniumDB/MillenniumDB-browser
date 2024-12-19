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
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDriverContext } from '../context/DriverContext';
import { useLoaderData } from 'react-router-dom';
import { types } from 'millenniumdb-driver';
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
      return `SELECT ?node ?label WHERE { ?node xsd:label ?label . FILTER regex(?label, "${regexPattern}", "i")} LIMIT 50`;
    case 'quad':
      return `MATCH (?node) WHERE REGEX(?node.label, "${regexPattern}", "i") RETURN ?node, ?node.label AS ?label LIMIT 50`;
    default:
      throw new Error('Invalid model string');
  }
};

export const GraphSearchBar = React.memo(({ selectedNode, setSelectedNode }) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const handleOnChange = (_event, newValue) => {
    if (newValue?.graphNode) {
      setSelectedNode(newValue.graphNode);
    }
  };

  useEffect(() => {
    if (selectedNode) {
      setValue({
        id: selectedNode.id,
        label: selectedNode.label,
      });
    } else {
      setValue(null);
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
      <NodeSearchBar
        value={value}
        inputValue={inputValue}
        setInputValue={setInputValue}
        options={options}
        setOptions={setOptions}
        handleOnChange={handleOnChange}
      />
    </Box>
  )
});

export const PathsSearchBar = React.memo(({ inputNodes, setInputNodes }) => {
  const [value] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const handleOnChange = (_event, newValue) => {
    if (newValue?.node) {
      newValue.node.labelProperty = newValue.label;
      newValue.node.type = newValue.type;
      setInputNodes((prevNodes) => [...prevNodes, newValue.node]);
    }
  };

  const getOptionDisabled = useCallback((option) => {
    return inputNodes.some((node) => node.id === option.id);
  }, [inputNodes]);

  useEffect(() => {
    const filteredOptions = options.filter(
      (option) => (
        option.node.constructor === types.GraphNode ||
        option.node.constructor === types.IRI
      )
    );
    setOptions(filteredOptions);
  }, [options]);

  return (
    <Box
      elevation={0}
      variant="outlined"
      sx={(theme) => ({
        background: theme.palette.background.paper,
        position: 'absolute',
        zIndex: theme.zIndex.drawer + 1,
        top: 80,
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
      <NodeSearchBar
        value={value}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleOnChange={handleOnChange}
        options={options}
        setOptions={setOptions}
        getOptionDisabled={getOptionDisabled}
      />
    </Box>
  )
});

const NodeSearchBar = React.memo(
  ({
    value,
    inputValue,
    setInputValue,
    handleOnChange,
    options,
    setOptions,
    getOptionDisabled = () => false,
  }) => {
    const [debouncedInputValue, setDebouncedInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    const driverContext = useDriverContext();
    const modelString = useLoaderData();

    const handleOnInputChange = (_event, newInputValue, reason) => {
      if (reason === "reset") {
        setInputValue('');
      } else {
        setInputValue(newInputValue);
      }
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
              const node = record.get('node');
              const graphNode = graphObjectToReactForceGraphNode(node);
              const label = record.get('label');
              const id = node.id;
              const type = graphObjectToTypeString(node);
              return {
                id,
                label,
                type,
                node,
                graphNode
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
        setDebouncedInputValue('');
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
    }, [inputValue, modelString, driverContext, searchNodes, setOptions]);

    return (
      <Autocomplete
        getOptionLabel={(option) => option.label}
        getOptionKey={(option) => option.id}
        filterOptions={(x) => x}
        options={options}
        value={value}
        inputValue={inputValue}
        loading={loading}
        loadingText="Searching..."
        onChange={handleOnChange}
        onInputChange={handleOnInputChange}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionDisabled={getOptionDisabled}
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
    );
  }
);
