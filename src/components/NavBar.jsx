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
  Card,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useNavigation, useLocation } from 'react-router-dom';
import { useDarkModeContext } from '../context/DarkModeContext';

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const navigation = useNavigation();

  const theme = useTheme();

  const darkModeContext = useDarkModeContext();

  const location = useLocation();
  const activeTab = location.pathname;

  const loading = useMemo(() => {
    return navigation.state === 'loading';
  }, [navigation.state]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getUnderlineStyle = (path) => ({
    textDecoration: activeTab === path ? 'underline' : 'none',
    textUnderlineOffset: '4px',
    textDecorationColor: activeTab === path ? theme.palette.text.primary : 'transparent',
    transition: 'text-decoration-color 0.3s',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor:
        activeTab === path
          ? theme.palette.text.primary
          : theme.palette.action.disabled
    },
  });

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
          zIndex: (theme) => theme.zIndex.drawer + 2,
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
              elevation={0}
            >
              <Card variant="outlined" sx={{ my: -1, py: 1 }}>
                <MenuItem
                  component={Link}
                  href="/"
                  onClick={handleCloseNavMenu}
                  sx={{
                    textAlign: 'center',
                    textDecoration: activeTab === '/' ? 'underline' : 'none',
                    textUnderlineOffset: '4px',
                    '&:hover': {
                      textDecoration: activeTab === '/' ? 'underline' : 'none',
                    },
                  }}
                >
                  <Typography>Query</Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  href="/graph"
                  onClick={handleCloseNavMenu}
                  sx={{
                    textAlign: 'center',
                    textDecoration: activeTab === '/graph' ? 'underline' : 'none',
                    textUnderlineOffset: '4px',
                    '&:hover': {
                      textDecoration: activeTab === '/graph' ? 'underline' : 'none',
                    },
                  }}
                >
                  <Typography>Graph</Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  href="/paths"
                  onClick={handleCloseNavMenu}
                  sx={{
                    textAlign: 'center',
                    textDecoration: activeTab === '/paths' ? 'underline' : 'none',
                    textUnderlineOffset: '4px',
                    '&:hover': {
                      textDecoration: activeTab === '/paths' ? 'underline' : 'none',
                    },
                  }}
                >
                  <Typography>Paths</Typography>
                </MenuItem>
              </Card>
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
                sx={{
                  m: 2,
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 500,
                  ...getUnderlineStyle('/'),
                }}
              >
                Query
              </Link>
            </Typography>
            <Typography noWrap>
              <Link
                href="/graph"
                sx={{
                  m: 2,
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 500,
                  ...getUnderlineStyle('/graph'),
                }}
              >
                Graph
              </Link>
            </Typography>
            <Typography noWrap>
              <Link
                href="/paths"
                sx={{
                  m: 2,
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 500,
                  ...getUnderlineStyle('/paths'),
                }}
              >
                Paths
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
