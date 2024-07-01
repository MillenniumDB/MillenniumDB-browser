import MillenniumDB from 'millenniumdb-driver';
import { createContext, useContext, useEffect } from 'react';

const DEFAULT_DRIVER_FETCH_SIZE = 2500;

export const DriverContext = createContext({
  _driver: null,
  _catalog: null,
  fetchSize: DEFAULT_DRIVER_FETCH_SIZE,
  getSession: () => {},
  getCatalog: () => {},
});

export default function DriverProvider({ children }) {
  const providerValue = {
    _driver: MillenniumDB.driver(import.meta.env.VITE_SERVER_URL),
    _catalog: null,
    fetchSize: DEFAULT_DRIVER_FETCH_SIZE,
    getSession: () =>
      providerValue._driver.session({ fetchSize: DEFAULT_DRIVER_FETCH_SIZE }),
    getCatalog: async () => {
      if (!providerValue._catalog) {
        providerValue._catalog = await providerValue._driver.catalog();
      }
      return providerValue._catalog;
    }
  };

  useEffect(() => {
    return () => providerValue.driver?.close();
  }, [providerValue.driver]);

  return (
    <DriverContext.Provider value={providerValue}>
      {children}
    </DriverContext.Provider>
  );
}

export function useDriverContext() {
  const context = useContext(DriverContext);

  if (!context) {
    throw new Error('No DriverContext found');
  }

  return context;
}
