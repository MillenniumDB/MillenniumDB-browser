import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import axios from 'axios';
import {
  Box,
  Chip,
  Link,
  Container,
  Stack,
  Typography,
  Skeleton,
  Tabs,
  Tab,
  TextField,
  Button,
  IconButton,
  Tooltip,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import AGTable from '../components/AGTable';
import { types } from 'millenniumdb-driver';
import { graphObjectToTypeString } from '../utils/GraphObjectUtils';
import { useDriverContext } from '../context/DriverContext';
import { ObjectEditSearchBar } from '../components/NodeSearchBar';
import ObjectTextField from '../components/ObjectTextField';

const describeRdfObject = async (session, iri) => {
  const description = {};

  const queryOutgoing = `SELECT ?predicate ?object WHERE { <${iri}> ?predicate ?object . }`;
  const resultOutgoing = session.run(queryOutgoing);
  const recordsOutgoing = await resultOutgoing.records();
  description.outgoing = recordsOutgoing.map((record) => record.toObject());

  const queryIncoming = `SELECT ?subject ?predicate WHERE { ?subject ?predicate <${iri}> . }`;
  const resultIncoming = session.run(queryIncoming);
  const recordsIncoming = await resultIncoming.records();
  description.incoming = recordsIncoming.map((record) => record.toObject());

  return description;
}

const describeQuadObject = async (session, objectId) => {
  let query = `DESCRIBE ${objectId}`;
  const result = session.run(query);
  const records = await result.records();
  const description = records[0].toObject();
  description.properties = Object.keys(description.properties).map((key) => ({
    key,
    value: description.properties[key],
  }))
  return description;
}

const TABLE_HEIGHT_PX = 500;

function PropertiesTable({ rows, loading, editable }) {
  return (
    <Box sx={{ height: TABLE_HEIGHT_PX }}>
      {loading ? (
        <Skeleton variant="rectangular" height="inherit" />
      ) : (
        <AGTable
        columns={[
          { field: 'key', headerName: 'key' },
          { field: 'value', headerName: 'value' },
        ]}
        rows={rows}
        editable={editable}
        />
      )}
    </Box>
  );
}

function ConnectionsTable({
  columns,
  rows,
  loading,
  onObjectClick,
  onIriClick,
  editable,
}) {
  return (
    <Box sx={{ height: TABLE_HEIGHT_PX }}>
      {loading ? (
        <Skeleton variant="rectangular" height="inherit" />
      ) : (
        <AGTable
          columns={columns}
          rows={rows}
          newTabOnObjectClick={false}
          onObjectClick={onObjectClick}
          onIriClick={onIriClick}
          editable={editable}
        />
      )}
    </Box>
  );
}

function CustomTabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function CreateDeleteTabPanel({
  action,
  tabValue,
  setSubjectValue,
  setPredicateValue,
  setObjectValue,
  handleOnClick,
}) {
  return (
    <CustomTabPanel value={tabValue} index={action === 'create' ? 1 : 2}>
      <Box sx={{ p: 2, mt: 1 }}>
        <Typography variant="h4">
          {`${action === 'create' ? 'Create' : 'Delete'} Connection`}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <ObjectTextField
            label="Subject"
            setValue={setSubjectValue}
            types={['iri', 'anon']}
          />
          <ObjectTextField
            label="Predicate"
            setValue={setPredicateValue}
            types={['iri']}
          />
          <ObjectTextField
            label="Object"
            setValue={setObjectValue}
            types={['iri', 'anon', 'str', 'int', 'float', 'bool']}
          />
        </Box>

        <Button
          variant="outlined"
          color="primary"
          sx={{ mt: 2 }}
          startIcon={action === 'create' ? <AddCircleIcon /> : <RemoveCircleIcon />}
          onClick={() => handleOnClick()}
        >
          {action === 'create' ? 'Create' : 'Delete'}
        </Button>
      </Box>
    </CustomTabPanel>
  );
}

function RdfObjectEdit() {
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [editMode, setEditMode] = useState(false);

  const [subjectValue, setSubjectValue] = useState('');
  const [predicateValue, setPredicateValue] = useState('');
  const [objectValue, setObjectValue] = useState('');

  const driverContext = useDriverContext();

  const describeObject = useCallback(async () => {
    if (!selectedObject) {
      return;
    }
    const session = driverContext.driver.session();
    try {
      const iri = selectedObject.toString();
      const describeResult = await describeRdfObject(session, iri);
      setDescription(describeResult);
    } catch (error) {
      console.error(error);
      enqueueSnackbar({
        message: error.toString(),
        variant: 'error',
      });
    } finally {
      session.close();
      setLoading(false);
    }
  }, [driverContext.driver, selectedObject]);

  useEffect(() => {
    if (selectedObject) {
      setLoading(true);
      describeObject();
    }
  }, [selectedObject, describeObject]);

  useEffect(() => {
    setEditMode(false);
  }, [selectedObject, tabValue]);

  const handleCreateRemoveConnection = useCallback(async (action) => {
    const query = (
      `${action === 'create' ? 'INSERT' : 'DELETE'} DATA {\n` +
      `  ${subjectValue} ${predicateValue} ${objectValue} .\n` +
      '}'
    );
    console.log(query);
    try {
      const response = await axios.post("api/update", query, {
        headers: {
          'Content-Type': 'application/sparql-update',
        },
        responseType: 'text',
      });
      // fetch(`${import.meta.env.VITE_MDB_HTTP_SERVER_URL}/update`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/sparql-update'
      //   },
      //   body: query
      // }).then(res => console.log('Status:', res.status))
      //   .catch(err => console.error('Fetch Error:', err));

      describeObject();
      enqueueSnackbar({
        message: `Connection ${action === 'create' ? 'created' : 'deleted'}.`,
        variant: "success",
      });
    } catch (error) {
      console.error(error);
      enqueueSnackbar({
        message: error.toString(),
        variant: 'error',
      });
    }
  }, [describeObject, subjectValue, predicateValue, objectValue]);

  return (
  <>
    <Helmet title={`Object Edit | MillenniumDB`} />

    <Container maxWidth="md" disableGutters>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 1 }}>
        <Tabs value={tabValue} onChange={(_event, newValue) => setTabValue(newValue)}>
          <Tab label="Edit" />
          <Tab label="Create" />
          <Tab label="Delete" />
        </Tabs>
      </Box>

      <CustomTabPanel value={tabValue} index={0}>
        <ObjectEditSearchBar
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
        />

        {!selectedObject && (
          <Box sx={{ p: 2, mt: 10 }}>
            <Typography variant="body1" color="text.secondary">
              Select an object to view or edit.
            </Typography>
          </Box>
        )}

        {selectedObject &&
          <Stack sx={{ p: 2, mt: 12 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Box>
                <Typography variant="h4">{selectedObject.toString()}</Typography>
                <Typography variant="body2" component="p" color="text.secondary">
                  {graphObjectToTypeString(selectedObject)}
                </Typography>
              </Box>
              {editMode ? (
                <Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 1, mr: 2 }}
                    onClick={() => setEditMode(false)}
                    startIcon={<CheckCircleIcon />}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 1 }}
                    onClick={() => setEditMode(false)}
                    startIcon={<CancelIcon />}
                  >
                    Cancel
                  </Button>
                </Box>
              ) : (
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 1 }}
                  onClick={() => setEditMode(true)}
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
              )}
            </Box>

            <Box sx={{ pt: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 1,
                  height: 48,
                }}
              >
                <Typography variant="h5">
                  Outgoing Connections
                </Typography>
                {editMode && (
                  <Tooltip title="Create Connection">
                    <IconButton size="small">
                      <AddCircleIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
              <ConnectionsTable
                columns={[
                  { field: 'predicate', headerName: 'Predicate' },
                  { field: 'object', headerName: 'Object' },
                ]}
                rows={description?.outgoing}
                loading={loading}
                onObjectClick={setSelectedObject}
                onIriClick={setSelectedObject}
                editable={editMode}
              />
            </Box>

            <Box sx={{ pt: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 1,
                  height: 48,
                }}
              >
                <Typography variant="h5">
                  Incoming Connections
                </Typography>
                {editMode && (
                  <Tooltip title="Create Connection">
                    <IconButton size="small">
                      <AddCircleIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
              <ConnectionsTable
                columns={[
                  { field: 'predicate', headerName: 'Predicate' },
                  { field: 'subject', headerName: 'Subject' },
                ]}
                rows={description?.incoming}
                loading={loading}
                onObjectClick={setSelectedObject}
                onIriClick={setSelectedObject}
                editable={editMode}
              />
            </Box>
          </Stack>
        }
      </CustomTabPanel>

      <CreateDeleteTabPanel
        action="create"
        tabValue={tabValue}
        setSubjectValue={setSubjectValue}
        setPredicateValue={setPredicateValue}
        setObjectValue={setObjectValue}
        handleOnClick={() => handleCreateRemoveConnection('create')}
      />

      <CreateDeleteTabPanel
        action="remove"
        tabValue={tabValue}
        setSubjectValue={setSubjectValue}
        setPredicateValue={setPredicateValue}
        setObjectValue={setObjectValue}
        handleOnClick={() => handleCreateRemoveConnection('remove')}
      />
    </Container>
  </>
  );
}

function QuadObjectEdit() {
  const [description, setDescription] = useState(null);
  const [isEdge, setIsEdge] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [editMode, setEditMode] = useState(false);

  const driverContext = useDriverContext();

  const addRow = useCallback((tableName) => {
    if (tableName === 'properties') {
      const newRow = { key: '', value: '' };
      setDescription((prevDescription) => ({
        ...prevDescription,
        properties: [newRow, ...prevDescription.properties],
      }));
    } else if (tableName === 'outgoing') {
      const newRow = { predicate: '', object: '' };
      setDescription((prevDescription) => ({
        ...prevDescription,
        outgoing: [newRow, ...prevDescription.outgoing],
      }));
    } else if (tableName === 'incoming') {
      const newRow = { predicate: '', subject: '' };
      setDescription((prevDescription) => ({
        ...prevDescription,
        incoming: [newRow, ...prevDescription.incoming],
      }));
    }
  }, []);

  const describeObject = useCallback(async () => {
    if (!selectedObject) {
      return;
    }
    const session = driverContext.driver.session();
    try {
      const objectId = selectedObject.id;
      const describeResult = await describeQuadObject(session, objectId);
      setDescription(describeResult);
    } catch (error) {
      console.error(error);
      enqueueSnackbar({
        message: error.toString(),
        variant: 'error',
      });
    } finally {
      session.close();
      setLoading(false);
    }
  }, [driverContext.driver, selectedObject]);

  useEffect(() => {
    if (selectedObject) {
      setLoading(true);
      const isObjectEdge = selectedObject.constructor === types.GraphEdge;
      setIsEdge(isObjectEdge);
      describeObject();
    }
  }, [selectedObject, describeObject]);

  useEffect(() => {
    setEditMode(false);
  }, [selectedObject, tabValue]);

  return (
  <>
    <Helmet title={`Object Edit | MillenniumDB`} />

    <Container maxWidth="md" disableGutters>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 1 }}>
        <Tabs value={tabValue} onChange={(_event, newValue) => setTabValue(newValue)}>
          <Tab label="Edit" />
          <Tab label="Create" />
        </Tabs>
      </Box>

      <CustomTabPanel value={tabValue} index={0}>
        <ObjectEditSearchBar
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
        />

        {!selectedObject && (
          <Box sx={{ p: 2, mt: 10 }}>
            <Typography variant="body1" color="text.secondary">
              Select an object to view or edit.
            </Typography>
          </Box>
        )}

        {selectedObject &&
          <Stack sx={{ p: 2, mt: 12 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Box>
                <Typography variant="h4">{selectedObject.toString()}</Typography>
                <Typography variant="body2" component="p" color="text.secondary">
                  {graphObjectToTypeString(selectedObject)}
                </Typography>
              </Box>
              {editMode ? (
                <Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 1, mr: 2 }}
                    onClick={() => setEditMode(false)}
                    startIcon={<CheckCircleIcon />}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 1 }}
                    onClick={() => setEditMode(false)}
                    startIcon={<CancelIcon />}
                  >
                    Cancel
                  </Button>
                </Box>
              ) : (
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 1 }}
                  onClick={() => setEditMode(true)}
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
              )}
            </Box>

            {loading ? (
              <Skeleton variant="rectangular" height={24} sx={{ maxWidth: "75%", mt: 1 }} />
            ) : (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pt: 1 }}>
                {!isEdge ? (
                  description?.labels.map((label, labelIdx) => (
                  <Chip key={labelIdx} size="small" color="primary" label={label} />
                  ))
                ) : (
                  <Chip size="small" color="secondary" label={description.type.toString()} />
                )}
              </Box>
            )}

            {isEdge &&
              <Box
                sx={{
                  '& > *': { verticalAlign: 'middle' },
                  pt: 6,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Connection
                </Typography>
                {loading ? (
                  <Skeleton variant="rectangular" height={24} sx={{ maxWidth: "50%", mt: 1 }} />
                ) : (
                  <>
                    <Link onClick={() => setSelectedObject(description.from)}>
                      <Chip size="small" color="primary" label={description?.from.toString()} />
                    </Link>
                    <ArrowForwardIcon fontSize="small" />
                    <Link onClick={() => setSelectedObject(description.to)}>
                      <Chip size="small" color="primary" label={description?.to.toString()} />
                    </Link>
                  </>
                )}
              </Box>
            }

            <Box sx={{ pt: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 1,
                  height: 48,
                }}
              >
                <Typography variant="h5">
                  Properties
                </Typography>
                {editMode && (
                  <Tooltip title="Create Property">
                    <IconButton size="small" onClick={() => addRow("properties")}>
                      <AddCircleIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
              <PropertiesTable
                rows={description?.properties}
                loading={loading}
                editable={editMode}
              />
            </Box>

            {!isEdge && (
              <>
                <Box sx={{ pt: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                      height: 48,
                    }}
                  >
                    <Typography variant="h5">
                      Outgoing Connections
                    </Typography>
                    {editMode && (
                      <Tooltip title="Create Connection">
                        <IconButton size="small" onClick={() => addRow("outgoing")}>
                          <AddCircleIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                  <ConnectionsTable
                    columns={[
                      { field: 'type', headerName: 'type' },
                      { field: 'to', headerName: 'to' },
                      { field: 'edge', headerName: 'edge' },
                    ]}
                    rows={description?.outgoing}
                    loading={loading}
                    onObjectClick={setSelectedObject}
                    onIriClick={setSelectedObject}
                    editable={editMode}
                  />
                </Box>

                <Box sx={{ pt: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                      height: 48,
                    }}
                  >
                    <Typography variant="h5">
                      Incoming Connections
                    </Typography>
                    {editMode && (
                      <Tooltip title="Create Connection">
                        <IconButton size="small" onClick={() => addRow("incoming")}>
                          <AddCircleIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                  <ConnectionsTable
                    columns={[
                      { field: 'type', headerName: 'type' },
                      { field: 'from', headerName: 'from' },
                      { field: 'edge', headerName: 'edge' },
                    ]}
                    rows={description?.incoming}
                    loading={loading}
                    onObjectClick={setSelectedObject}
                    onIriClick={setSelectedObject}
                    editable={editMode}
                  />
                </Box>
              </>
            )}
          </Stack>
        }
      </CustomTabPanel>

      <CustomTabPanel value={tabValue} index={1}>
        <Box sx={{ p: 2, mt: 1 }}>
          <Typography variant="h4">Create Connection</Typography>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              display: 'flex',
              alignItems: 'center',
              pt: 2,
            }}
          >
            <TextField label="Node" fullWidth />
            <HorizontalRuleIcon />
            <TextField label="Edge" fullWidth />
            <ArrowForwardIcon />
            <TextField label="Node" fullWidth />
          </Box>

          <Button
            variant="outlined"
            color="primary"
            sx={{ mt: 2 }}
            startIcon={<AddCircleIcon />}
          >
            Create
          </Button>
        </Box>
      </CustomTabPanel>
    </Container>
  </>
  );
}

export default function ObjectEdit() {
  const modelString = useLoaderData();

  if (modelString === "rdf") {
    return <RdfObjectEdit />;
  } else {
    return <QuadObjectEdit />;
  }
}
