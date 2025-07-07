import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { AppLayout } from "../layout/app-layout";

function RootComponent() {
  return (
    <>
      <AppLayout />
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({
  component: () => <RootComponent />,
});
