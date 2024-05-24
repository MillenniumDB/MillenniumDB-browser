import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
  ScrollRestoration,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import DriverProvider, { useDriverContext } from './context/DriverContext';
import ThemeProvider from './context/ThemeContext';
import { setupLanguages } from './monaco/setup';
import Error from './pages/Error';
import Home from './pages/Home';
import Node from './pages/Node';

setupLanguages();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent': {
    borderRadius: 0,
  },
}));

function App() {
  const driverContext = useDriverContext();

  const router = createBrowserRouter([
    {
      path: '*',
      element: <Navigate to="/" />,
    },
    {
      path: '/',
      element: (
        <>
          <ScrollRestoration />
          <NavBar />
          <Outlet />
        </>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/node/:namedNode',
          element: <Node />,
          errorElement: <Error />,
          loader: async ({ params }) => {
            const { namedNode } = params;
            let res = new Response(`Node "${namedNode}" not found`, {
              status: 404,
            });

            const session = driverContext.getSession();
            try {
              const result = session.run(`DESCRIBE ${namedNode}`);
              const records = await result.records();
              if (records.length > 0) {
                res = records[0].toObject();
              }
            } catch (error) {
              res = Response(error.toString(), { status: 500 });
            }

            session.close();
            return res;
          },
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <NavBar />
      <Outlet />
    </RouterProvider>
  );
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
          <App />
        </DriverProvider>
      </ThemeProvider>
    </>
  );
}

root.render(<Main />);
