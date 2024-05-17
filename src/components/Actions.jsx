import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { Box, Button } from '@mui/material';

export default function Actions({ handleRun, handleStop, running }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, py: 1 }}>
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
