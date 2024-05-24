import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import DriverProvider from './context/DriverContext';
import ThemeProvider from './context/ThemeContext';
import { setupLanguages } from './monaco/setup';
import Home from './pages/Home';
import Node from './pages/Node';
import { Helmet } from 'react-helmet';

setupLanguages();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent': {
    borderRadius: 0,
  },
}));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Main() {
  return (
    <>
      <Helmet
        title="MillenniumDB"
        htmlAttributes={{
          lang: 'en',
        }}
        meta={[
          { name: 'description', content: 'MillenniumDB browser interface' },
          { charSet: 'utf-8' },
        ]}
      />
      <ThemeProvider>
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
        <DriverProvider>
          <BrowserRouter>
            <ScrollToTop />
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/node/:namedNode" element={<Node />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </DriverProvider>
      </ThemeProvider>
    </>
  );
}

root.render(<Main />);
