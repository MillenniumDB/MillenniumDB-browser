declare global {
  interface Window {
    ENV: {
      MDB_URL: string;
    };
  }
}

export {}; // necessary to make it a module
