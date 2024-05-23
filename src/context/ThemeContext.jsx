import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { MUIThemeDark, MUIThemeLight } from '../MUIThemes';

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    window.localStorage.getItem('darkMode') === 'true'
  );

  const providerValue = useMemo(
    () => ({
      darkMode,
      toggleDarkMode: () => {
        setDarkMode((prevMode) => !prevMode);
      },
    }),
    [darkMode]
  );

  const theme = useMemo(
    () => (darkMode ? MUIThemeDark : MUIThemeLight),
    [darkMode]
  );

  useEffect(() => {
    window.localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={providerValue}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('No DarkModeContext found');
  }

  return context;
}
