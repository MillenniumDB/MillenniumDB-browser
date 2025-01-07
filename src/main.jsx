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
  redirect,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import DriverProvider, { useDriverContext } from './context/DriverContext';
import DarkModeProvider from './context/DarkModeContext';
import { setupLanguages } from './monaco/setup';
import CatalogError from './pages/CatalogError';
import Graph from './pages/Graph';
import Node from './pages/Node';
import NodeError from './pages/NodeError';
import Paths from './pages/Paths';
import Query from './pages/Query';
import './styles/ag-grid.css';
import './styles/react-force-graph.css';
import { GraphProvider } from './components/GraphProvider';
import { UserProvider } from './context/UserContext';

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
      path: '/',
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
      shouldRevalidate: () => false,
      errorElement: <CatalogError />,
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
          loader: async () => {
            try {
              const catalog = await driverContext.getCatalog();
              return catalog.getModelString();
            } catch (error) {
              throw new Response(error.toString(), { status: 500 });
            }
          },
          errorElement: <CatalogError />,
          path: '/graph',
          element: (
            <GraphProvider key="graph">
              <Graph />
            </GraphProvider>
          ),
        },
        {
          loader: async () => {
            try {
              const catalog = await driverContext.getCatalog();
              return catalog.getModelString();
            } catch (error) {
              throw new Response(error.toString(), { status: 500 });
            }
          },
          errorElement: <CatalogError />,
          path: '/paths',
          element: (
            <GraphProvider key="paths">
              <Paths />
            </GraphProvider>
          ),
        },
        {
          path: '/object/:objectId',
          element: <Node />,
          errorElement: <NodeError />,
          loader: async ({ params }) => {
            const catalog = await driverContext.getCatalog();
            if (catalog.getModelString() !== 'quad') {
              return redirect('/');
            }

            const { objectId } = params;

            const session = driverContext.driver.session();
            try {
              const result = session.run(`DESCRIBE ${objectId}`);
              const records = await result.records();
              if (records.length > 0) {
                return records[0].toObject();
              }
            } catch (error) {
              throw new Response(error.toString(), { status: 500 });
            } finally {
              session.close();
            }

            throw new Response(`Object ${objectId} not found`, {
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
      <DarkModeProvider>
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
          autoHideDuration={5000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        />
        <DriverProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </DriverProvider>
      </DarkModeProvider>
    </>
  );
}

root.render(<Main />);
