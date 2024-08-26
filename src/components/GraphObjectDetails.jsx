import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import React from 'react';
import AGTable from './AGTable';

const GraphObjectDetailsSection = ({ title, children }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" component="p" sx={{ pb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

const GraphObjectDetails = React.memo(
  ({ selectedNodeId, setSelectedNodeId }) => {
    return (
      <Drawer
        open={selectedNodeId !== null}
        variant="persistent"
        sx={(theme) => ({
          width: 400,
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
        <Divider />
        <Box sx={{ overflow: 'scroll' }}>
          <Box
            sx={{
              p: 2,
            }}
          >
            <Typography variant="h5" component="h5">
              {selectedNodeId}
            </Typography>
            <Typography variant="body2" component="p" color="text.secondary">
              Named Node
            </Typography>
          </Box>
          <Divider />
          <GraphObjectDetailsSection title="Properties">
            <Box sx={{ height: 400 }}>
              <AGTable
                columns={['key', 'value']}
                rows={[
                  {
                    key: 'key',
                    value:
                      'valuevalue value value value value value value value value value value value value value value value value value value value value value value value value value  ',
                  },
                ]}
                targetBlank={false}
              />
            </Box>
          </GraphObjectDetailsSection>
          <Divider />

          <GraphObjectDetailsSection title="Outgoing">
            <Box sx={{ height: 400 }}>
              <AGTable
                columns={['type', 'to']}
                rows={[
                  {
                    type: 'Type',
                    to: 'To',
                  },
                ]}
                targetBlank={false}
              />
            </Box>
          </GraphObjectDetailsSection>
          <Divider />

          <GraphObjectDetailsSection title="Incoming">
            <Box sx={{ height: 400 }}>
              <AGTable
                columns={['type', 'from']}
                rows={[
                  {
                    type: 'Type',
                    from: 'From',
                  },
                ]}
                targetBlank={false}
              />
            </Box>
          </GraphObjectDetailsSection>
        </Box>
      </Drawer>
    );
  }
);

export default GraphObjectDetails;
