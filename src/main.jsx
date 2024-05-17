import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createContext, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './components/NavBar';
import Home from './Home';
import { setupLanguages } from './monaco/setup';
import { MUIThemeDark, MUIThemeLight } from './MUIThemes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import { styled } from '@mui/material/styles';
import { BorderAllRounded } from '@mui/icons-material';

setupLanguages();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

export const ColorModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent': {
    borderRadius: 0,
  },
}));

function Main() {
  const [darkMode, setDarkMode] = useState(
    window.localStorage.getItem('darkMode') === 'true'
  );

  const colorMode = useMemo(
    () => ({
      darkMode,
      toggleDarkMode: () => {
        setDarkMode((prevMode) => !prevMode);
      },
    }),
    [darkMode]
  );

  useEffect(() => {
    window.localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const theme = useMemo(
    () => (darkMode ? MUIThemeDark : MUIThemeLight),
    [darkMode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          Components={{
            default: StyledMaterialDesignContent,
            error: StyledMaterialDesignContent,
            info: StyledMaterialDesignContent,
            success: StyledMaterialDesignContent,
            warning: StyledMaterialDesignContent,
          }}
          maxSnack={3}
          autoHideDuration={3500}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

root.render(<Main />);
