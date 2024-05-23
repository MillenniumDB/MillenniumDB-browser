import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const themeContext = useThemeContext();

  return (
    <AppBar
      position="sticky"
      variant="outlined"
      elevation={0}
      color="transparent"
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: themeContext.darkMode ? '#00000080' : '#ffffff80',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap component="div">
          <Link href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            MDB
          </Link>
        </Typography>

        <IconButton
          size="large"
          edge="end"
          onClick={themeContext.toggleDarkMode}
        >
          {themeContext.darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
