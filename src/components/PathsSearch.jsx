import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkIcon from '@mui/icons-material/Link';
import {
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  IconButton,
  Skeleton,
  Toolbar,
  Typography,
  Link
} from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { types } from 'millenniumdb-driver';
import { enqueueSnackbar } from 'notistack';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDriverContext } from '../context/DriverContext';
import {
  graphObjectToReactForceGraphNode,
  graphObjectToString,
  graphObjectToTypeString,
} from '../utils/GraphObjectUtils';
import AGTable from './AGTable';
import { TroubleshootRounded } from '@mui/icons-material';

const PathsSearch = React.memo(({ searchPaths }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const scrollableAreaRef = useRef(null);

    return (
      <Drawer
        transitionDuration={100}
        open={isDrawerOpen}
        variant="persistent"
        sx={(theme) => ({
          width: 500,
          [`& .MuiDrawer-paper`]: {
            width: 'inherit',
            boxSizing: 'border-box',
          },
          [`${theme.breakpoints.down('md')}`]: {
            width: '100vw',
          },
          overflow: 'hidden',
        })}
      >
        <Toolbar sx={{ mb: '88px' }} />
        <Box sx={{ p: 1 }}>
          <IconButton
            onClick={() => setIsDrawerOpen(false)}
            size="small"
            sx={{ float: 'right' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box ref={scrollableAreaRef} sx={{ overflow: 'scroll' }}>
        <Button
            variant="outlined"
            size="small"
            onClick={searchPaths}
            color="primary"
          >
            Search for paths
          </Button>
        </Box>
      </Drawer>
    );
  }
);

export default PathsSearch;
