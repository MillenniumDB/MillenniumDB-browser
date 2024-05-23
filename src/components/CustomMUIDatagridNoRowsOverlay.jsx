import { Box, Typography } from '@mui/material';

export default function CustomMUIDatagridNoRowsOverlay() {
  return (
    <Box
      sx={{
        userSelect: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Typography variant="h6">No results</Typography>
    </Box>
  );
}
