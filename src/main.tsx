import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MDBProvider } from "./providers/mdb-provider";
import { CustomMantineProvider } from "./theme/custom-mantine-provider";

import { routeTree } from "./routeTree.gen";

// do not change css import order
import "./index.css";
import "@mantine/core/styles.css";
import "@gfazioli/mantine-split-pane/styles.css";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MDBProvider>
      <CustomMantineProvider>
        <RouterProvider router={router} />
      </CustomMantineProvider>
    </MDBProvider>
  </StrictMode>,
);
