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
  Button,
} from '@mui/material';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextIndexSelect from './TextIndexSelect';

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const escapeRegexSPARQL = (str) => escapeRegex(str).replace(/\\/g, '\\\\');
const escapeQuotes = (str) => str.replace(/"/g, '\\"');

const defaultFilterOptions = () => true;
const defaultGetOptionDisabled = () => false;

const getSearchQuery = (modelString, input, textIndex, searchBy, regexSearch, property) => {
  switch (modelString) {
    case 'rdf':
      if (textIndex) {
        return (
          'SELECT ?node ?label\n' +
          `WHERE { ?node mdbfn:textSearch ("${textIndex}" "${escapeQuotes(input)}" "prefix" ?label) . }\n` +
          'LIMIT 50'
        );
      } else if (searchBy === 'iri') {
        return (
          'SELECT ?node\n' +
          'WHERE {\n' +
          `  VALUES ?node { <${input}> }\n` +
          '  {\n' +
          '    ?node ?p ?o .\n' +
          '  } UNION {\n' +
          '    ?s ?node ?o .\n' +
          '  } UNION {\n' +
          '    ?s ?p ?node .\n' +
          '  }\n' +
          '}\n' +
          'LIMIT 1\n'
        );
      } else if (searchBy === 'property') {
        const regexPattern = regexSearch ? `${input}` : `^${escapeRegexSPARQL(input)}`;
        return (
          'SELECT ?node ?label\n' +
          `WHERE { ?node ${property} ?label . FILTER regex(?label, "${escapeQuotes(regexPattern)}", "i")}\n` +
          'LIMIT 50'
        );
      } else {
        throw new Error('Invalid search by');
      }
    case 'quad':
      if (textIndex) {
        return (
          'MATCH (?node)\n' +
          `WHERE TEXT_SEARCH("${textIndex}", "${escapeQuotes(input)}", prefix, ?node, ?label)\n` +
          'RETURN *\n' +
          'LIMIT 50'
        );
      } else if (searchBy === 'property'){
        const regexPattern = regexSearch ? `${input}` : `^${escapeRegex(input)}`;
        return (
          'MATCH (?node)\n' +
          `WHERE REGEX(?node.${property}, "${escapeQuotes(regexPattern)}", "i")\n` +
          `RETURN ?node, ?node.${property} AS ?label\n` +
          'LIMIT 50'
        );
      } else {
        throw new Error('Invalid search by');
      }
    default:
      throw new Error('Invalid model string');
  }
};

const isIri = (input) => {
  let isUrl;
  try {
    new URL(input);
    isUrl = true;
  } catch (error) {
    isUrl = false;
  } finally {
    return isUrl;
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
    <>
      <Box sx={{ position: "absolute", top: 16, width: "100%" }}>
        <NodeSearchBar
          value={value}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleOnChange={handleOnChange}
        />
      </Box>
      <Box sx={{ position: "absolute", top: 16, width: "100%" }}>
        <TextIndexSelect />
      </Box>
    </>
  )
});

const PathsSearchBar = React.memo(({ inputNodes, setInputNodes }) => {
  const modelString = useLoaderData();

  const [value] = useState(null);
  const [inputValue, setInputValue] = useState('');

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

  const filterOptions = useCallback((option) => {
    if (modelString === 'rdf') {
      return true;
    } else {
      return option.node.constructor === types.GraphNode;
    }
  }, [modelString]);

  return (
    <>
      <Box sx={{ position: "absolute", top: 80, width: "100%" }}>
        <NodeSearchBar
          value={value}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleOnChange={handleOnChange}
          getOptionDisabled={getOptionDisabled}
          filterOptions={filterOptions}
        />
      </Box>
      <Box sx={{ position: "absolute", top: 80, width: "100%" }}>
        <TextIndexSelect />
      </Box>
    </>
  )
});

const NodeSearchBar = React.memo(
  ({
    value,
    inputValue,
    setInputValue,
    handleOnChange,
    getOptionDisabled = defaultGetOptionDisabled,
    filterOptions = defaultFilterOptions,
  }) => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showPropertySearchBar, setShowPropertySearchBar] = useState(false);
    const [autoCompleteError, setAutoCompleteError] = useState(false);
    const [textFieldError, setTextFieldError] = useState(false);

    const driverContext = useDriverContext();
    const modelString = useLoaderData();
    const {
      selectedTextIndex,
      selectedSearchBy,
      regexSearch,
      setRegexSearch,
      propertySearchName,
      setPropertySearchName,
      isDrawerOpen,
    } = useUserContext();

    useEffect(() => {
      if (selectedSearchBy === 'iri' && inputValue) {
        setAutoCompleteError(!isIri(inputValue));
      } else {
        setAutoCompleteError(false);
      }
    }, [inputValue, selectedSearchBy]);

    useEffect(() => {
      if (selectedSearchBy === 'property' && modelString === 'rdf') {
        setTextFieldError(!isIri(propertySearchName));
      } else {
        setTextFieldError(false);
      }
    }, [propertySearchName, selectedSearchBy, modelString]);

    const handleOnInputChange = (_event, newInputValue) => {
      setInputValue(newInputValue);
    };

    const searchNodes = useMemo(() =>
      debounce(
        async (
          input,
          textIndex,
          searchBy,
          regexSearch,
          propertySearchName,
          filterOptions,
          modelString,
          driverContext,
          callback
        ) => {
          const query = getSearchQuery(
            modelString,
            input,
            textIndex,
            searchBy,
            regexSearch,
            propertySearchName
          );
          const session = driverContext.driver.session();
          try {
            const result = session.run(query);
            const records = await result.records();
            const newOptions = records.map((record) => {
              const node = record.get('node');
              const graphNode = graphObjectToReactForceGraphNode(node);
              const label = record.has('label') ? (
                record.get('label').toString()
              ) : (
                node.toString()
              );
              const id = node.id ? node.id : node.toString();
              const type = graphObjectToTypeString(node);
              return {
                id,
                label,
                type,
                node,
                graphNode
              };
            }).filter(filterOptions);
            callback(newOptions);
          } catch (error) {
            console.error(error);
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

        if (
          inputValue === '' ||
          propertySearchName === '' ||
          autoCompleteError ||
          textFieldError
        ) {
          searchNodes.clear();
          setLoading(false);
          setOptions([]);
          return undefined;
        }

        setLoading(true);
        searchNodes(
          inputValue,
          selectedTextIndex,
          selectedSearchBy,
          regexSearch,
          propertySearchName,
          filterOptions,
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
        selectedSearchBy,
        regexSearch,
        propertySearchName,
        filterOptions,
        modelString,
        driverContext,
        searchNodes,
        setOptions,
        autoCompleteError,
        textFieldError,
      ]
    );

    useEffect(() => {
      setShowPropertySearchBar(false);
    }, [selectedTextIndex, selectedSearchBy]);

    useEffect(() => {
      setPropertySearchName(modelString === 'rdf' ? 'rdfs:label' : 'label');
    }, [modelString, setPropertySearchName]);

    return (
      <Box sx={(theme) => ({
        position: 'relative',
        zIndex: theme.zIndex.drawer + 1,
        width: 426,
        left: 16,
        [`${theme.breakpoints.down('md')}`]: {
          left: 0,
          boxSizing: 'border-box',
          width: 'calc(100% - 76px)',
          mx: '16px',
        },
      })}>
        <Box sx={(theme) => ({
          display: 'flex',
          border: '1px solid',
          borderColor: theme.palette.divider,
          overflow: 'hidden',
          height: showPropertySearchBar ? 114 : 58,
          transition: 'height 0.3s ease',
          background: theme.palette.background.paper,
          mb: -0.5,
        })}>
          <Button
            sx={{ minWidth: 36, ml: selectedSearchBy === "property" ? 0 : -5, transition: '0.3s ease' }}
            color="inherit"
            onClick={() => setShowPropertySearchBar((prev) => !prev)}
          >
            <ExpandMoreIcon
              sx={(theme) => ({
                transition: 'transform 0.3s ease',
                transform: showPropertySearchBar ? 'rotate(180deg)' : 'rotate(0deg)',
                color: theme.palette.action.active,
              })}
            />
          </Button>

          <Box sx={{ width: '100%' }}>
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
              freeSolo
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
                        {selectedSearchBy === 'property' && (
                          regexToggleButton({ regexSearch, setRegexSearch }))}
                      </>
                    ),
                  }}
                  fullWidth
                  error = {autoCompleteError}
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

            <Box
              component="form"
              noValidate
              autoComplete="off"
            >
              <TextField
                placeholder={`Enter ${modelString === 'rdf' ? 'IRI' : 'property'} for searching`}
                variant="outlined"
                fullWidth
                value={propertySearchName}
                onChange={(event) => {
                  setPropertySearchName(event.target.value);
                }}
                error = {textFieldError}
              />
            </Box>
          </Box>
        </Box>

        {(autoCompleteError || textFieldError) && (
          <Typography
            color='error'
            sx={(theme) => ({
              fontSize: '12px',
              display: 'inline-block',
              background: isDrawerOpen ? theme.palette.background.paper : 'none',
              ml: 1,
              mt: 0.5,
              px: 1,
              pt: 0.5,
            })}
          >
            Enter a valid IRI.
          </Typography>
        )}
      </Box>
    );
  }
);

export { GraphSearchBar, PathsSearchBar };
