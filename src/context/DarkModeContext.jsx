import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { MUIThemeDark, MUIThemeLight } from '../MUIThemes';

export const DarkModeContext = createContext({
  toggleDarkMode: () => {},
});

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    window.localStorage.getItem('darkMode') === 'true'
  );

  const providerValue = useMemo(
    () => ({
      toggleDarkMode: () => setDarkMode((prevMode) => !prevMode),
    }),
    []
  );

  const theme = useMemo(
    () => (darkMode ? MUIThemeDark : MUIThemeLight),
    [darkMode]
  );

  useEffect(() => {
    window.localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={providerValue}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </DarkModeContext.Provider>
  );
}

export function useDarkModeContext() {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('No DarkModeContext found');
  }

  return context;
}
