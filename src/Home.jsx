import { Box, Container, Stack } from '@mui/material';
import MillenniumDB from 'millenniumdb-driver';
import { useEffect, useRef, useState } from 'react';
import Actions from './components/Actions';
import Editor from './components/Editor';
import Results from './components/Results';
import { enqueueSnackbar } from 'notistack';

// TODO: WebWorker for queries could improve interface?
const DRIVER_FETCH_SIZE = 2500;

export default function Home() {
  const [running, setRunning] = useState(false);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const rowsBuffer = useRef([]);

  const numRecords = useRef(0);
  const editorRef = useRef(null);
  const driverRef = useRef(null);
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
    const session = driverRef.current.session({ fetchSize: DRIVER_FETCH_SIZE });
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
        if (rowsBuffer.current.length < DRIVER_FETCH_SIZE) {
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

  useEffect(() => {
    driverRef.current = MillenniumDB.driver(import.meta.env.VITE_SERVER_URL);
  }, []);

  return (
    <Container maxWidth="xl" disableGutters>
      <Stack sx={{ p: 2 }}>
        <Editor
          ref={editorRef}
          sx={{
            overflow: 'hidden',
            width: '100%',
            minHeight: '400px',
            border: 1,
            borderColor: 'action.focus',
          }}
          language="mql"
        />
        <Actions
          handleRun={handleRun}
          handleStop={handleStop}
          running={running}
        />
        <Box sx={{ height: '90vh' }}>
          <Results columns={columns} rows={rows} running={running} />
        </Box>
      </Stack>
    </Container>
  );
}
