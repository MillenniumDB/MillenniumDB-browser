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

const defaultFilterOptions = () => true;
const defaultGetOptionDisabled = () => false;

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const escapeRegexSPARQL = (str) => escapeRegex(str).replace(/\\/g, '\\\\');
const escapeQuotes = (str) => str.replace(/"/g, '\\"');

function isIRI(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

const isPrefixedName = (str) => {
  return /^[a-zA-Z][a-zA-Z0-9-]*:[a-zA-Z0-9-]*$/.test(str);
};

const wrapIRIForQuery = (str) => {
  if (isIRI(str)) {
    if (isPrefixedName(str)) {
      return str;
    } else {
      return `<${str}>`;
    }
  } else {
    return `"${str}"`;
  }
}

const getSearchQuery = (modelString, input, textIndex, searchBy, regexSearch, property) => {
  switch (modelString) {
    case 'rdf':
      if (textIndex) {
        return `SELECT ${
          textIndex === '*' ? 'DISTINCT' : ''
        } ?node ?label WHERE { ?node mdbproc:textSearch ("${textIndex}" "${escapeQuotes(
          input
        )}" "prefix" ?label) . } LIMIT 50`;
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
          `WHERE { ?node ${wrapIRIForQuery(property)} ?label . FILTER regex(?label, "${escapeQuotes(regexPattern)}", "i")}\n` +
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
    } = useUserContext();

    const isAutoCompleteError = useCallback((input) => {
      if (selectedSearchBy === 'iri' && input) {
        return !isIRI(input);
      } else {
        return false;
      }
    }, [selectedSearchBy]);

    const isTextFieldError = useCallback((input) => {
      if (selectedSearchBy === 'property' && modelString === 'rdf') {
        return !isIRI(input);
      } else {
        return false;
      }
    }, [selectedSearchBy, modelString]);

    useEffect(() => {
      setAutoCompleteError(isAutoCompleteError(inputValue));
    }, [isAutoCompleteError, inputValue]);

    useEffect(() => {
      setTextFieldError(isTextFieldError(propertySearchName));
    }, [isTextFieldError, propertySearchName]);

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
              console.log(record);
              const node = record.get('node');
              const graphNode = graphObjectToReactForceGraphNode(node);
              const label = record.has('label') ? (
                record.get('label').toString()
              ) : (
                ''
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
          isAutoCompleteError(inputValue) ||
          isTextFieldError(propertySearchName)
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
        isAutoCompleteError,
        isTextFieldError,
      ]
    );

    useEffect(() => {
      setShowPropertySearchBar(false);
    }, [selectedTextIndex, selectedSearchBy]);

    useEffect(() => {
      if (propertySearchName === null) {
        setPropertySearchName(modelString === 'rdf' ? 'rdfs:label' : 'label');
      }
    }, [modelString, propertySearchName, setPropertySearchName]);

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
              getOptionLabel={(option) => option.label === undefined ? option : option.label}
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
                      {option.label ? (
                        <>
                          <Grid item sx={{ width: '100%', wordWrap: 'break-word' }}>
                            <Typography variant="body1">{option.label}</Typography>
                          </Grid>
                          <Typography variant="body2" color="text.secondary">
                            {option.id}
                          </Typography>
                        </>
                      ) : (
                        <Grid item sx={{ width: '100%', wordWrap: 'break-word' }}>
                          <Typography variant="body1">{option.id}</Typography>
                        </Grid>
                      )}
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
                value={propertySearchName || ''}
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
            sx={{
              fontSize: '12px',
              display: 'inline-block',
              ml: 1,
            }}
          >
            Enter a valid IRI.
          </Typography>
        )}
      </Box>
    );
  }
);

export { GraphSearchBar, PathsSearchBar };
