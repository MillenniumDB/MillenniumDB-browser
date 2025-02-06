import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
const configuration = ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    server: {
      proxy: {
        "/api": process.env.VITE_MDB_HTTP_SERVER_URL,
      },
    },
    plugins: [react(), eslint()],
    base: process.env.VITE_APP_BASE_URL,
  });
};

export default configuration;
