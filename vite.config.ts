import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // temporary solution for slow dev server reload (see https://github.com/tabler/tabler-icons/issues/1233)
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    // tanstackRouter() MUST be before react()
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
});
