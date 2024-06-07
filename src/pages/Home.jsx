import { Box, Container, Stack } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Actions from '../components/Actions';
import Editor from '../components/Editor';
import { useDriverContext } from '../context/DriverContext';
import { useThemeContext } from '../context/ThemeContext';
import AGTable from '../components/AGTable';

// TODO: WebWorker for queries could improve interface?
export default function Home() {
  const driverContext = useDriverContext();
  const themeContext = useThemeContext();

  const [running, setRunning] = useState(false);

  const agTableRef = useRef(null);
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
    agTableRef.current.clearRows();

    const query = editorRef.current.getEditor().getValue();
    const session = driverContext.getSession();
    sessionRef.current = session;
    const result = session.run(query);

    result.subscribe({
      onKeys: (keys) => {
        agTableRef.current.setColumns(keys);
      },
      onRecord: (record) => {
        agTableRef.current.addRow(record.toObject());
      },
      onSuccess: (summary) => {
        stopQuery();
        enqueueSnackbar({
          message: `Query executed successfully`,
          variant: 'success',
        });
      },
      onError: (error) => {
        stopQuery();
        enqueueSnackbar({
          message: error.message,
          variant: 'error',
        });
      },
    });
  };

  const stopQuery = async () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }

    setRunning(false);
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
            <AGTable ref={agTableRef} targetBlank={true}/>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
