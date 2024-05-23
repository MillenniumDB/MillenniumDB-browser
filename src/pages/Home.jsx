import { Box, Container, Stack } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Actions from '../components/Actions';
import Editor from '../components/Editor';
import Results from '../components/Results';
import { useDriverContext } from '../context/DriverContext';
import { useThemeContext } from '../context/ThemeContext';

// TODO: WebWorker for queries could improve interface?
export default function Home() {
  const driverContext = useDriverContext();
  const themeContext = useThemeContext();

  const [running, setRunning] = useState(false);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const rowsBuffer = useRef([]);
  const numRecords = useRef(0);
  const editorRef = useRef(null);
  const sessionRef = useRef(null);

  const handleRun = () => {
    runQuery();
  };

  const handleStop = () => {
    stopQuery();
    enqueueSnackbar({
      message: `Query stopped`,
      variant: 'info',
    });
  };

  const runQuery = () => {
    setRunning(true);
    setColumns([]);
    setRows([]);
    rowsBuffer.current = [];
    numRecords.current = 0;

    const query = editorRef.current.getEditor().getValue();
    const session = driverContext.getSession();
    sessionRef.current = session;
    const result = session.run(query);

    result.subscribe({
      onKeys: (keys) => {
        setColumns(
          keys.map((key) => ({
            field: key,
          }))
        );
      },
      onRecord: (record) => {
        const row = {
          id: numRecords.current++,
          ...record.toObject(),
        };
        if (rowsBuffer.current.length < driverContext.fetchSize) {
          rowsBuffer.current.push(row);
        } else {
          setRows((rows) => [...rows, ...rowsBuffer.current]);
          rowsBuffer.current = [];
        }
      },
      onSuccess: (summary) => {
        stopQuery();
        enqueueSnackbar({
          message: `Query executed successfully`,
          variant: 'success',
        });
      },
      onError: (error) => {
        console.log('onerror');
        stopQuery();
        enqueueSnackbar({
          message: error.message,
          variant: 'error',
        });
      },
    });
  };

  const stopQuery = async () => {
    if (rowsBuffer.current.length > 0) {
      setRows((rows) => [...rows, ...rowsBuffer.current]);
      rowsBuffer.current = [];
    }

    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }

    setRunning(false);
  };

  const handleNamedNodeClick = (named_node) => {
    describe(named_node);
  };

  const describe = async (named_node) => {
    const session = driverContext.getSession();
    const result = session.run(`DESCRIBE ${named_node}`);

    const records = await result.records();
    const record = records[0];
    console.log(record.toObject());
  };

  return (
    <>
      <Helmet title="Query | MillenniumDB" />
      <Container maxWidth="xl" disableGutters>
        <Stack sx={{ p: 2 }}>
          <Editor
            ref={editorRef}
            sx={{
              overflow: 'hidden',
              width: '100%',
              minHeight: '400px',
              border: 1,
              borderColor: themeContext.darkMode
                ? 'rgba(81,81,81,1)'
                : 'rgba(224,224,224,1)',
            }}
            language="mql"
          />
          <Actions
            handleRun={handleRun}
            handleStop={handleStop}
            running={running}
          />
          <Box sx={{ height: '90vh' }}>
            <Results
              columns={columns}
              rows={rows}
              running={running}
              handleNamedNodeClick={handleNamedNodeClick}
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
