declare global {
  interface Window {
    ENV: {
      MDB_URL: string;
      SEARCH_PROPERTIES: string[];
    };
  }
}

export {}; // necessary to make it a module
