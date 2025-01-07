import {
  Autocomplete,
  Box,
  CircularProgress,
  debounce,
  Grid,
  TextField,
  Typography,
  ToggleButton,
  Tooltip,
  IconButton,
  Menu,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
} from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDriverContext } from '../context/DriverContext';
import { useUserContext } from '../context/UserContext';
import { useLoaderData } from 'react-router-dom';
import { types } from 'millenniumdb-driver';
import {
  graphObjectToReactForceGraphNode,
  graphObjectToTypeString,
} from '../utils/GraphObjectUtils';
import SquareIcon from '@mui/icons-material/Square';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const escapeRegexSPARQL = (str) => escapeRegex(str).replace(/\\/g, '\\\\');
const escapeQuotes = (str) => str.replace(/"/g, '\\"');
const escapeQuotesSPARQL = (str) => str.replace(/"/g, '\\\\"');

const getSearchQuery = (modelString, input, textIndex, regexSearch) => {
  const inputString = modelString === 'rdf' ? escapeQuotesSPARQL(input) : escapeQuotes(input);
  switch (modelString) {
    case 'rdf':
      if (textIndex) {
        return (
          'SELECT ?node ?label\n' +
          `WHERE { ?node mdbfn:textSearch ("${textIndex}" "${inputString}" "prefix" ?label) . }\n` +
          'LIMIT 50'
        );
      } else {
        const regexPattern = regexSearch ? `${inputString}` : `^${escapeRegexSPARQL(inputString)}`;
        return (
          'SELECT ?node ?label\n' +
          `WHERE { ?node rdfs:label ?label . FILTER regex(?label, "${regexPattern}", "i")}\n` +
          'LIMIT 50'
        );
      }
    case 'quad':
      if (textIndex) {
        return (
          'MATCH (?node)\n' +
          `WHERE TEXT_SEARCH("${textIndex}", "${inputString}", prefix, ?node, ?label)\n` +
          'RETURN *\n' +
          'LIMIT 50'
        );
      } else {
        const regexPattern = regexSearch ? `${inputString}` : `^${escapeRegex(inputString)}`;
        return (
          'MATCH (?node)\n' +
          `WHERE REGEX(?node.label, "${regexPattern}", "i")\n` +
          'RETURN ?node, ?node.label AS ?label\n' +
          'LIMIT 50'
        );
      }
    default:
      throw new Error('Invalid model string');
  }
};

const regexToggleButton = ({ regexSearch, setRegexSearch }) => (
  <Tooltip title="Use Regular Expression">
    <ToggleButton
      value="check"
      selected={regexSearch}
      onChange={() => setRegexSearch((prevSelected) => !prevSelected)}
      sx={{
        width: 34,
        height: 34,
        position: 'relative',
        ml: 2,
      }}
    >
      <SquareIcon sx={{
        position: 'absolute',
        bottom: 8,
        left: 8,
        fontSize: '0.4rem',
      }}/>
      <Typography sx={{
        position: 'absolute',
        top: 0,
        right: 8,
        fontSize: '1.2rem',
      }}>
        *
      </Typography>
    </ToggleButton>
  </Tooltip>
);

const GraphSearchBar = React.memo(({ selectedNode, setSelectedNode }) => {
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
        label: '',
      });
    } else {
      setValue(null);
    }
  }, [selectedNode]);

  return (
    <Box sx={{ position: "absolute", top: 16, width: "100%" }}>
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

const PathsSearchBar = React.memo(({ inputNodes, setInputNodes }) => {
  const [value] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const handleOnChange = (_event, newValue) => {
    if (newValue?.node) {
      newValue.node.labelProperty = newValue.label;
      newValue.node.type = newValue.type;
      newValue.node.id = newValue.id;
      setInputNodes((prevNodes) => [...prevNodes, newValue.node]);
      setInputValue('');
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
    <Box sx={{ position: "absolute", top: 80, width: "100%" }}>
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
    const [loading, setLoading] = useState(false);
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    const [textIndexes, setTextIndexes] = useState(null);

    const driverContext = useDriverContext();
    const modelString = useLoaderData();
    const {
      selectedTextIndex,
      setSelectedTextIndex,
      regexSearch,
      setRegexSearch
    } = useUserContext();

    const handleOnInputChange = (_event, newInputValue) => {
      setInputValue(newInputValue);
    };

    const handleOpenRegexMenu = (event) => {
      setAnchorElMenu(event.currentTarget);
    };

    const handleCloseRegexMenu = () => {
      setAnchorElMenu(null);
    };

    const searchNodes = useMemo(() =>
      debounce(
        async (
          input,
          textIndex,
          regexSearch,
          modelString,
          driverContext,
          callback
        ) => {
          const query = getSearchQuery(modelString, input, textIndex, regexSearch);
          console.log(query);
          const session = driverContext.driver.session();
          try {
            const result = await session.run(query);
            const records = await result.records();
            const newOptions = records.map((record) => {
              const node = record.get('node');
              const graphNode = graphObjectToReactForceGraphNode(node);
              const label = record.get('label').toString();
              const id = node.id ? node.id : node.toString();
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
        },
        400
      ),
      []
    );

    useEffect(
      () => {
        let active = true;

        if (inputValue === '') {
          searchNodes.clear();
          setLoading(false);
          setOptions([]);
          return undefined;
        }

        setLoading(true);
        searchNodes(
          inputValue,
          selectedTextIndex,
          regexSearch,
          modelString,
          driverContext,
          (newOptions) => {
            if (active) {
              setOptions(newOptions);
              setLoading(false);
            }
          }
        );

        return () => {
          active = false;
        };
      },
      [
        inputValue,
        selectedTextIndex,
        regexSearch,
        modelString,
        driverContext,
        searchNodes,
        setOptions
      ]
    );

    const getTextIndexNames = useCallback(async () => {
      const catalog = await driverContext.getCatalog();
      const textIndexNames = catalog.getMetadata().textIndexNames;
      setTextIndexes(textIndexNames);
      if (![...textIndexNames, ''].includes(selectedTextIndex)) {
        setSelectedTextIndex(textIndexNames.length > 0 ? textIndexNames[0] : '');
      }
    }, [driverContext, selectedTextIndex, setSelectedTextIndex]);

    useEffect(() => {
      getTextIndexNames();
    }, [getTextIndexNames]);

    return (
      <Box
        elevation={0}
        sx={(theme) => ({
          position: 'relative',
          zIndex: theme.zIndex.drawer + 1,
          left: 16,
          width: 468,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          [`${theme.breakpoints.down('md')}`]: {
            left: 0,
            boxSizing: 'border-box',
            width: 'calc(100% - 32px)',
            mx: '16px',
          },
        })}
      >
        <Box sx={(theme) => ({
          background: theme.palette.background.paper,
          width: '100%',
        })}>
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
                      {selectedTextIndex === '' && regexToggleButton({ regexSearch, setRegexSearch })}
                    </>
                  ),
                }}
                fullWidth
              />
            )}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <li key={key} {...optionProps}>
                  <Grid container sx={{ alignItems: 'center' }}>
                    <Grid item sx={{ width: '100%', wordWrap: 'break-word' }}>
                      <Typography variant="body1">{option.label}</Typography>
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

        <Tooltip title="Select Text Index">
          <IconButton
            sx={{ width: 36, height: 36}}
            onClick={handleOpenRegexMenu}
          >
            <ManageSearchIcon />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorElMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElMenu)}
          onClose={handleCloseRegexMenu}
          elevation={0}
        >
          <Card variant="outlined" sx={{ my: -1, py: 1 }}>
            <FormControl sx={{ pl: 2, maxWidth: 200, overflowX: 'auto' }}>
              <RadioGroup
                onChange={(e) => {
                  setSelectedTextIndex(e.target.value);
                  setAnchorElMenu(null);
                }}
              >
                {textIndexes && textIndexes.map((index) => (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={<Radio size='small'/>}
                    label={index}
                    checked={selectedTextIndex === index}
                  />
                ))}
                <FormControlLabel
                  value={''}
                  control={<Radio size='small'/>}
                  label={'None'}
                  checked={selectedTextIndex === ''}
                />
              </RadioGroup>
            </FormControl>
          </Card>
        </Menu>
      </Box>
    );
  }
);

export { GraphSearchBar, PathsSearchBar };
