import { createFileRoute } from "@tanstack/react-router";
import ForceGraph2D from "react-force-graph-2d";
import { useElementSize } from "@mantine/hooks";
import { Box } from "@mantine/core";

function GraphExplorer() {
  const { ref, width, height } = useElementSize();

  const graphData = {
    nodes: [
      { id: "n1", name: "Node 1" },
      { id: "n2", name: "Node 2" },
      { id: "n3", name: "Node 3" },
    ],
    links: [
      { source: "n1", target: "n2", name: "Link 1-2" },
      { source: "n2", target: "n3", name: "Link 2-3" },
      { source: "n1", target: "n3", name: "Link 1-3" },
    ],
  };

  return (
    <Box ref={ref} h="calc(100vh - var(--app-shell-header-height))" bg="white">
      <ForceGraph2D
        graphData={graphData}
        width={width}
        height={height}
        linkDirectionalArrowLength={4}
      />
    </Box>
  );
}

export const Route = createFileRoute("/graph-explorer/")({
  component: GraphExplorer,
});
