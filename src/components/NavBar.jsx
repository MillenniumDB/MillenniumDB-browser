import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  AppBar,
  IconButton,
  LinearProgress,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import { useMemo } from 'react';
import { useNavigation } from 'react-router-dom';
import { useDarkModeContext } from '../context/DarkModeContext';

export default function Navbar() {
  const navigation = useNavigation();
  const darkModeContext = useDarkModeContext();

  const loading = useMemo(() => {
    return navigation.state === 'loading';
  }, [navigation.state]);

  return (
    <>
      <AppBar
        position="fixed"
        variant="outlined"
        elevation={0}
        color="transparent"
        sx={{
          backgroundColor: darkModeContext.darkMode ? '#000000f0' : '#fffffff0',
        }}
      >
        {loading && (
          <LinearProgress
            sx={{
              position: 'fixed',
              left: 0,
              top: 0,
              right: 0,
            }}
          />
        )}
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            <Link href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
              MDB
            </Link>
          </Typography>

          <IconButton
            size="large"
            edge="end"
            onClick={darkModeContext.toggleDarkMode}
          >
            {darkModeContext.darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
