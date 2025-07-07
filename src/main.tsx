import { CustomMantineProvider } from "./theme/custom-mantine-provider";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { routeTree } from "./routeTree.gen";

import "@mantine/core/styles.css";
import "./index.css";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomMantineProvider>
      <RouterProvider router={router} />
    </CustomMantineProvider>
  </StrictMode>
);
