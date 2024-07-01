import { Box, Container, Stack } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Actions from '../components/Actions';
import Editor from '../components/Editor';
import { useDriverContext } from '../context/DriverContext';
import { useThemeContext } from '../context/ThemeContext';
import AGTable from '../components/AGTable';

// TODO: WebWorker for queries could improve interface?
export default function Query() {
  const driverContext = useDriverContext();
  const themeContext = useThemeContext();

  const [running, setRunning] = useState(false);
  const [language, setLanguage] = useState('');

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

  const fetchAndSetModel = async () => {
    // TODO: Handle errors here!
    const catalog = await driverContext.getCatalog();
    switch (catalog.getModelString()) {
      case 'quad': {
        setLanguage('mql');
        break;
      }
      case 'rdf': {
        setLanguage('sparql');
        break;
      }
      default:
        setLanguage('plaintext');
        break;
    }
  };

  useEffect(() => {
    fetchAndSetModel();

    return () => {
      stopQuery();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                ? 'rgba(255, 255, 255, 0.12)'
                : 'rgba(0, 0, 0, 0.12)',
            }}
            language={language}
          />
          <Actions
            handleRun={handleRun}
            handleStop={handleStop}
            running={running}
          />
          <Box sx={{ height: '90vh' }}>
            <AGTable ref={agTableRef} targetBlank={true} />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
