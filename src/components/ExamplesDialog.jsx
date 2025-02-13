import { useTheme } from '@emotion/react';
import { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import examples from '../data/examples';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ExampleAccordion({ exampleIdx, example, handleExample }) {
  const theme = useTheme();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Accordion
      key={exampleIdx}
      square
      variant="outlined"
      elevation={0}
      onChange={() => setIsExpanded(!isExpanded)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            mr: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ fontWeight: 'bold', mr: 1 }}
            >
              {`${exampleIdx + 1}. `}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {example.title}
            </Typography>
          </Box>
          {!isExpanded && (
            <Button
              sx={{ minWidth: 100 }}
              variant="contained"
              onClick={() => handleExample(example)}
            >
              Try
            </Button>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
        }}>
          <Box
            sx={{
              whiteSpace: 'preserve',
              p: 2,
              backgroundColor:
                theme.palette.mode === 'dark' ? '#212121' : '#ededed',
              fontFamily: 'monospace',
              width: '100%',
            }}
          >
            {example.query}
          </Box>
          {isExpanded && (
            <Button
              sx={{ minWidth: 100 }}
              variant="contained"
              onClick={() => handleExample(example)}
            >
              Try
            </Button>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
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
      <DialogContent dividers sx={{ p: 2 }}>
        {examples.map((example, exampleIdx) => (
          <ExampleAccordion
            exampleIdx={exampleIdx}
            example={example}
            handleExample={handleExample}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>{'Close'}</Button>
      </DialogActions>
    </Dialog>
  );
}
