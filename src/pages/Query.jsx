import { useTheme } from '@emotion/react';
import { Box, Container, Stack } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import Actions from '../components/Actions';
import AGTable from '../components/AGTable';
import Editor from '../components/Editor';
import ExamplesDialog from '../components/ExamplesDialog';
import { useDriverContext } from '../context/DriverContext';
import examples from '../data/examples';

const ADD_ROWS_DELAY_MS = 100;

// TODO: WebWorker for queries could improve interface?
export default function Query() {
  const driverContext = useDriverContext();

  const theme = useTheme();

  const [searchParams] = useSearchParams();
  const query = useMemo(() => searchParams.get('query') || '', [searchParams]);

  const [running, setRunning] = useState(false);
  const [language, setLanguage] = useState('');
  const [examplesOpen, setExamplesOpen] = useState(false);

  const agTableRef = useRef(null);
  const editorRef = useRef(null);
  const sessionRef = useRef(null);
  const resultRef = useRef(null);

  const processRecordsInterval = useRef(null);
  const recordsBuffer = useRef([]);
  const recordsCount = useRef(0);

  const processRecords = () => {
    if (recordsBuffer.current.length > 0) {
      const records = recordsBuffer.current;
      recordsBuffer.current = [];
      agTableRef.current.addRows(records);
    }
  };

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

  const handleExample = (example) => {
    editorRef.current.getEditor().setValue(example.query);
    setExamplesOpen(false);
  };

  const runQuery = () => {
    setRunning(true);
    agTableRef.current.clearRows();

    const query = editorRef.current.getEditor().getValue();
    const session = driverContext.driver.session();
    sessionRef.current = session;
    const result = session.run(query);
    resultRef.current = result;

    result.subscribe({
      onVariables: (variables) => {
        agTableRef.current.setColumns(variables);
        processRecordsInterval.current = setInterval(
          processRecords,
          ADD_ROWS_DELAY_MS
        );
      },
      onRecord: (record) => {
        recordsBuffer.current.push({
          ...record.toObject(),
          __rowId: recordsCount.current,
        });
        ++recordsCount.current;
      },
      onSuccess: (summary) => {
        const {
          resultCount,
          optimizerDurationMs,
          parserDurationMs,
          executionDurationMs,
        } = summary;
        stopQuery();
        const totalDurationMs =
          Number(optimizerDurationMs) +
          Number(parserDurationMs) +
          Number(executionDurationMs);
        let durationString;
        if (totalDurationMs > 1_000) {
          durationString = `${(totalDurationMs / 1_000).toFixed(2)} s`;
        } else {
          durationString = `${totalDurationMs} ms`;
        }
        enqueueSnackbar({
          message: `Query executed successfully (Found ${resultCount} results in ${durationString})`,
          variant: 'success',
        });
      },
      onError: (error) => {
        stopQuery();
        enqueueSnackbar({
          message: error.toString(),
          variant: 'error',
        });
      },
    });
  };

  const stopQuery = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }

    if (resultRef.current) {
      driverContext.driver.cancel(resultRef.current);
      resultRef.current = null;
    }

    if (processRecordsInterval.current) {
      clearInterval(processRecordsInterval.current);
    }

    if (recordsBuffer.current.length) {
      processRecords();
      recordsCount.current = 0;
    }

    setRunning(false);
  };

  const fetchAndSetLanguage = async () => {
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

  const getDefaultQuery = () => {
    switch (language) {
      case 'mql': {
        return 'MATCH (?from)-[?edge :?type]->(?to)\nRETURN *\nLIMIT 100\n';
      }
      case 'sparql': {
        return 'SELECT *\nWHERE { ?s ?p ?o . }\nLIMIT 100\n';
      }
      default:
        return '';
    }
  };

  useEffect(() => {
    fetchAndSetLanguage();

    return () => {
      stopQuery();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet title="Query | MillenniumDB" />
      {examples.length > 0 && (
        <ExamplesDialog
          open={examplesOpen}
          setOpen={setExamplesOpen}
          handleExample={handleExample}
        />
      )}
      <Container maxWidth="xl" disableGutters>
        <Stack sx={{ p: 2 }}>
          <Editor
            ref={editorRef}
            sx={{
              overflow: 'hidden',
              width: '100%',
              minHeight: '400px',
              border: 1,
              borderColor:
                theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.12)'
                  : 'rgba(0, 0, 0, 0.12)',
            }}
            query={query || getDefaultQuery()}
            language={language}
          />
          <Actions
            handleRun={handleRun}
            handleStop={handleStop}
            handleExamples={() => setExamplesOpen(true)}
            running={running}
          />
          <Box sx={{ height: '90vh' }}>
            <AGTable
              ref={agTableRef}
              onObjectClick={(value) =>
                window.open(`#/node/${value.toString()}`, '_blank')
              }
              onIriClick={(value) => window.open(value.toString(), '_blank')}
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
