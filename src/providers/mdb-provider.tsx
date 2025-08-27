/* eslint-disable react-refresh/only-export-components */

import { Catalog, Driver, driver as mdbDriver } from "@millenniumdb/driver";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type MDBContextType = {
  driver: Driver;
  catalog?: Catalog; // catalog cache
};

const MDBContext = createContext<MDBContextType | undefined>(undefined);

type MDBProviderProps = {
  children: ReactNode;
};

const RETRY_DELAY_MS = 1000;

export const MDBProvider = ({ children }: MDBProviderProps) => {
  const [value, setValue] = useState<MDBContextType>({
    driver: mdbDriver(window.ENV.MDB_URL),
  });

  useEffect(() => {
    let cancelled: boolean = false;

    const tryFetchCatalog = async () => {
      while (!cancelled && !value.catalog) {
        try {
          const catalog = await value.driver.catalog();
          if (cancelled) return;
          console.info(
            "Catalog loaded!",
            catalog.getModelString(),
            "version",
            catalog.getVersion(),
          );
          setValue((prev) => ({
            ...prev,
            catalog,
          }));
        } catch (err) {
          console.error("Failed to fetch catalog:", err);

          await new Promise((res) => setTimeout(res, RETRY_DELAY_MS));
        }
      }
    };

    tryFetchCatalog();

    return () => {
      cancelled = true;
    };
  }, [value]);

  return <MDBContext.Provider value={value}>{children}</MDBContext.Provider>;
};

export const useMDB = () => {
  const ctx = useContext(MDBContext);
  if (!ctx) {
    throw new Error("useMDB must be used inside an MDBProvider");
  }
  return ctx;
};
