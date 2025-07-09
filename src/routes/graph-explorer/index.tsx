import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/graph-explorer/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/graph-explorer/"!</div>;
}
