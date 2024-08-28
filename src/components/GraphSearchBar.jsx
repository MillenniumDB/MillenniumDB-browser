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
import React, { useCallback, useEffect, useState } from 'react';
import { useDriverContext } from '../context/DriverContext';
import {
  graphObjectToReactForceGraphNode,
  graphObjectToString,
  graphObjectToTypeString,
} from '../utils/GraphObjectUtils';

const GraphSearchBar = React.memo(({ setSelectedNode }) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const driverContext = useDriverContext();

  const handleOnChange = (_event, newValue) => {
    setOptions(newValue ? [newValue, ...options] : options);
    setValue(newValue);

    if (newValue !== null) {
      setInputValue('');
      setSelectedNode(newValue.node);
    }
  };

  const handleOnInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const textSearch = useCallback(
    (text) => {
      debounce(async () => {
        // TODO: MDB text search
        setLoading(true);
        const session = driverContext.getSession();
        try {
          const query = 'MATCH (?node) RETURN ?node LIMIT 50';
          const result = session.run(query);
          const records = await result.records();
          const options = records.map((record) => {
            const graphObject = record.get('node');
            const node = graphObjectToReactForceGraphNode(graphObject);
            const label = graphObjectToString(graphObject);
            const id = node.id;
            const type = graphObjectToTypeString(graphObject);
            return {
              id,
              label,
              type,
              node,
            };
          });
          setOptions(options);
        } catch (error) {
          enqueueSnackbar({
            message: error.message,
            variant: 'error',
          });
        } finally {
          session.close();
          setLoading(false);
        }
      }, 500)();
    },
    [driverContext]
  );

  useEffect(() => {
    if (!inputValue) {
      setOptions([]);
      setValue(null);
      return;
    }

    let active = true;

    // Search for nodes
    if (active) {
      textSearch(inputValue);
    }

    return () => {
      active = false;
    };
  }, [inputValue, textSearch]);

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
        width: 368,
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
        loading={loading}
        loadingText="Searching..."
        noOptionsText="No results"
        onChange={handleOnChange}
        onInputChange={handleOnInputChange}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        autoComplete
        includeInputInList
        filterSelectedOptions
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
