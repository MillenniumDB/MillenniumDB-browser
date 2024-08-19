import {
  Button,
  Dialog,
  Divider,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
} from '@mui/material';
import { useDarkModeContext } from '../context/DarkModeContext';
import examples from '../data/examples';
import { Fragment } from 'react';

function ExampleItem({ example, handleExample }) {
  const darkModeContext = useDarkModeContext();

  return (
    <Box display="flex" alignItems="center" gap={2} sx={{ py: 1 }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="body1" color="text.primary">
          {example.title}
        </Typography>
        <Box
          sx={{
            whiteSpace: 'preserve',
            my: 1,
            p: 2,
            backgroundColor: darkModeContext.darkMode ? '#212121' : '#ededed',
            fontFamily: 'monospace',
          }}
        >
          {example.query}
        </Box>
      </Box>

      <Button
        sx={{ minWidth: 100 }}
        variant="contained"
        onClick={() => handleExample(example)}
      >
        Try
      </Button>
    </Box>
  );
}

export default function ExamplesDialog({ open, setOpen, handleExample }) {
  if (examples.length === 0) return null;
  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      scroll="paper"
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle>{'Query Examples'}</DialogTitle>
      <DialogContent dividers sx={{ py: 0, px: 2 }}>
        {examples.map((example, exampleIdx) => (
          <Fragment key={exampleIdx}>
            {exampleIdx > 0 && <Divider />}
            <ExampleItem example={example} handleExample={handleExample} />
          </Fragment>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>{'Close'}</Button>
      </DialogActions>
    </Dialog>
  );
}
