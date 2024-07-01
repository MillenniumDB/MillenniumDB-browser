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
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createHashRouter,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import DriverProvider, { useDriverContext } from './context/DriverContext';
import ThemeProvider from './context/ThemeContext';
import { setupLanguages } from './monaco/setup';
import CatalogError from './pages/CatalogError';
import Node from './pages/Node';
import NodeError from './pages/NodeError';
import Query from './pages/Query';
import './styles/ag-grid.css';

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

  const router = createHashRouter([
    {
      path: '*',
      element: <Navigate to="/" />,
    },
    {
      loader: async () => {
        try {
          const catalog = await driverContext.getCatalog();
          console.log(
            `Catalog loaded successfully! (${catalog.getModelString()}.v${catalog.getVersion()})`
          );
          return true;
        } catch (error) {
          throw new Response(error.toString(), { status: 500 });
        }
      },
      errorElement: <CatalogError />,
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
          element: <Query />,
        },
        {
          path: '/node/:namedNode',
          element: <Node />,
          errorElement: <NodeError />,
          loader: async ({ params }) => {
            const { namedNode } = params;

            const session = driverContext.getSession();
            try {
              const result = session.run(`DESCRIBE ${namedNode}`);
              const records = await result.records();
              if (records.length > 0) {
                return records[0].toObject();
              }
            } catch (error) {
              throw new Response(error.toString(), { status: 500 });
            } finally {
              session.close();
            }

            throw new Response(`Node "${namedNode}" not found`, {
              status: 404,
            });
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
