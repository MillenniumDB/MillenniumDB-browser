import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { Box, Button } from '@mui/material';
import React from 'react';
import examples from '../data/examples';

const Actions = React.memo(
  ({ handleRun, handleStop, handleExamples, running }) => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, py: 1 }}>
        {examples.length > 0 && (
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={handleExamples}
            disabled={running}
          >
            {'Examples'}
          </Button>
        )}
        <Button
          size="large"
          variant="contained"
          sx={{ minWidth: 120 }}
          color={running ? 'error' : 'success'}
          startIcon={running ? <StopIcon /> : <PlayArrowIcon />}
          onClick={running ? handleStop : handleRun}
        >
          {running ? 'Stop' : 'Run'}
        </Button>
      </Box>
    );
  }
);

export default Actions;
