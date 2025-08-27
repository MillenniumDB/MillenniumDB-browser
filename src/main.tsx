import { Notifications } from "@mantine/notifications";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MDBProvider } from "./providers/mdb-provider";
import { CustomMantineProvider } from "./theme/custom-mantine-provider";

import "./components/editor/config/monaco-config";

import { routeTree } from "./routeTree.gen";

// DO NOT CHANGE CSS IMPORT ORDER
import "./index.css";

import "@mantine/core/styles.css";

import "@gfazioli/mantine-split-pane/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "@millenniumdb/graph-explorer/styles.css";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomMantineProvider>
      <Notifications position="top-center" autoClose={3000} />
      <MDBProvider>
        <RouterProvider router={router} />
      </MDBProvider>
    </CustomMantineProvider>
  </StrictMode>,
);
