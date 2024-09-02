import MillenniumDB from 'millenniumdb-driver';
import { createContext, useContext, useEffect } from 'react';

export const DriverContext = createContext({
  _driver: null,
  _catalog: null,
  getSession: () => {},
  getCatalog: () => {},
});

export default function DriverProvider({ children }) {
  const providerValue = {
    _driver: MillenniumDB.driver(import.meta.env.VITE_MDB_SERVER_URL),
    _catalog: null,
    getSession: () => providerValue._driver.session(),
    getCatalog: async () => {
      if (!providerValue._catalog) {
        providerValue._catalog = await providerValue._driver.catalog();
      }
      return providerValue._catalog;
    },
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
