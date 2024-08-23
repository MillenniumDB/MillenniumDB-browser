import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';

export default function GraphObjectDetails({ children }) {
  return (
    true && (
      <Drawer
        variant="permanent"
        sx={(theme) => ({
          width: 400,
          [`& .MuiDrawer-paper`]: {
            width: 'inherit',
            boxSizing: 'border-box',
          },
          [`${theme.breakpoints.down('md')}`]: {
            width: '100vw',
          },
        })}
      >
        <Toolbar sx={{ mb: '88px' }} />
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" component="h5">
            Title
          </Typography>
          <Typography variant="body2" component="p" color="text.secondary">
            Subtitle
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography variant="body1" component="p">
            Properties
          </Typography>
          <List>
            <ListItem>x</ListItem>
          </List>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography variant="body1" component="p">
            Connections
          </Typography>
          <List>
            <ListItem>x</ListItem>
          </List>
        </Box>
        <Divider />
      </Drawer>
    )
  );
}
