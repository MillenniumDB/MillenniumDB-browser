import { Box } from '@mui/material';

export default function GraphView() {
  return (
    <Box
      sx={(theme) => ({
        height: 'calc(100vh - 56px)',
        [`${theme.breakpoints.up('sm')}`]: {
          height: 'calc(100vh - 64px)',
        },
        [`${theme.breakpoints.up('xs')}`]: {
          '@media (orientation: landscape)': {
            height: 'calc(100vh - 48px)',
          },
        },
        width: '100vw',
      })}
    ></Box>
  );
}
