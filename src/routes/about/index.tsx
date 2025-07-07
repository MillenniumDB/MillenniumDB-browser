import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: About,
});

function About() {
  return (
    <div className="p-2" style={{ height: "200vh", overflow: "auto" }}>
      Hello from About!
    </div>
  );
}
