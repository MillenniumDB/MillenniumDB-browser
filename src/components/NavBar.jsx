import { useTheme } from '@emotion/react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  IconButton,
  LinearProgress,
  Link,
  Toolbar,
  Tooltip,
  Typography,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { useDarkModeContext } from '../context/DarkModeContext';

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const navigation = useNavigation();

  const theme = useTheme();

  const darkModeContext = useDarkModeContext();

  const loading = useMemo(() => {
    return navigation.state === 'loading';
  }, [navigation.state]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        variant="outlined"
        elevation={0}
        color="transparent"
        sx={{
          backgroundColor:
            theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
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
        <Toolbar>
          <Typography variant="h6" noWrap>
            <Link href="/" sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
              MDB
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem>
                <Typography sx={{ textAlign: 'center' }}>
                  <Link
                    href="/"
                    sx={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={handleCloseNavMenu}
                  >
                    Query
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ textAlign: 'center' }}>
                  <Link
                    href="/graph"
                    sx={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={handleCloseNavMenu}
                  >
                    Graph
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography variant="h6" noWrap component="div" sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' }
          }}>
            <Link href="/" sx={{
              mr: 4,
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
              MDB
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography noWrap>
              <Link
                href="/"
                sx={{ m: 2, textDecoration: 'none', color: 'inherit', fontWeight: 500 }}
              >
                Query
              </Link>
            </Typography>
            <Typography noWrap>
              <Link
                href="/graph"
                sx={{ m: 2, textDecoration: 'none', color: 'inherit', fontWeight: 500 }}
              >
                Graph
              </Link>
            </Typography>
          </Box>

          <Tooltip title="Toggle Dark Mode" sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              edge="end"
              onClick={darkModeContext.toggleDarkMode}
            >
              {theme.palette.mode === 'dark' ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
