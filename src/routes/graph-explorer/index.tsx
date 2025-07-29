import { useCallback, useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import ForceGraph2D from "react-force-graph-2d";
import { Box, Menu, useMantineTheme } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { useGraphData } from "@/hooks/use-graph-data";
import { useGraphColorPalette } from "@/hooks/use-graph-color-palette";
import { ContextMenu } from "@/components/graph-explorer/context-menu";
import { IconFileDescription, IconTrash } from "@tabler/icons-react";
import { Split } from "@gfazioli/mantine-split-pane";


// Example graph data, replace with actual data fetching logic
const graphDatabase = { nodes: [], links: [] };

function getOutgoingLinks(nodeId: string, graphDatabase) {
  return graphDatabase.links.filter(
    (link) => link.source === nodeId
  );
}

function getOutgoingNodes(nodeId: string, graphDatabase) {
  const outgoingLinks = getOutgoingLinks(nodeId, graphDatabase);
  return graphDatabase.nodes.filter((node) =>
    outgoingLinks.some((link) => link.target === node.id)
  );
}

function GraphExplorer() {
  const { ref: graphBoxRef, width, height } = useElementSize();
  const theme = useMantineTheme();
  const colorPalette = useGraphColorPalette();
  const { graphData, addNode, addLink, update } = useGraphData();

  const [contextMenuState, setContextMenuState] = useState({
    opened: false,
    x: 0,
    y: 0,
  });

  const onNodeClick = useCallback((node) => {
    if (!node) return;
    const outgoingNodes = getOutgoingNodes(node.id, graphDatabase);
    outgoingNodes.forEach((outNode) => addNode(outNode));
    const outgoingLinks = getOutgoingLinks(node.id, graphDatabase);
    outgoingLinks.forEach((link) => addLink(link));
    update();
  }, [addNode, addLink, update]);

  const typeColorMap = useRef(new Map<string, string>());

  const getColorForType = useCallback(
    (type?: string) => {
      if (!type) return theme.colors.gray[6]; // default color
      if (!typeColorMap.current.has(type)) {
        const nextColor =
          colorPalette[typeColorMap.current.size % colorPalette.length];
        typeColorMap.current.set(type, nextColor);
      }
      return typeColorMap.current.get(type)!;
    },
    [colorPalette, theme.colors.gray],
  );

  const nodeCanvasObject = (node, ctx, globalScale) => {
    const radius = 4;
    const types = node.types ?? [];
    const label = node.name;
    const fontSize = 12 / globalScale;

    // Draw the node as a pie chart
    const slices = types.length > 0 ? types.length : 1;
    const anglePerSlice = (2 * Math.PI) / slices;

    for (let i = 0; i < slices; i++) {
      const type = types[i] ?? undefined;
      const color = getColorForType(type);

      const startAngle = i * anglePerSlice;
      const endAngle = startAngle + anglePerSlice;

      ctx.beginPath();
      ctx.moveTo(node.x, node.y);
      ctx.arc(node.x, node.y, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }

    // Draw the border
    // ctx.beginPath();
    // ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
    // ctx.strokeStyle = "white";
    // ctx.lineWidth = 1;
    // ctx.stroke();

    // Draw the label
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = "black";
    ctx.fillText(label, node.x, node.y + radius + 1);

    // Set the background dimensions for the node
    node.__bckgDimensions = [radius * 2, fontSize + 4];
  };

  // const handleZoom = useCallback(() => {
  //   // prevents error on state order
  //   requestAnimationFrame(() => {
  //     setContextMenuState((prev) => ({
  //       ...prev,
  //       opened: false,
  //     }));
  //   });
  // }, []);

  const handleNodeRightClick = useCallback((node, event: MouseEvent) => {
    const { clientX, clientY } = event;
    setContextMenuState((prev) => ({
      ...prev,
      opened: true,
      x: clientX,
      y: clientY,
    }));
  }, []);

  return (
    <Box h="calc(100vh - var(--app-shell-header-height))">
      <Split
        h="100%"
        color="var(--mantine-color-default-border)"
        hoverColor="var(--mantine-primary-color-light-color)"
        radius={0}
        spacing={0}
        variant="default"
      >
        <Split.Pane grow>
          <Box ref={graphBoxRef} h="100%">
            <ContextMenu
              opened={contextMenuState.opened}
              x={contextMenuState.x}
              y={contextMenuState.y}
              onClose={() =>
                setContextMenuState((prev) => ({ ...prev, opened: false }))
              }
              menuItems={
                <>
                  <Menu.Item
                    onClick={() => console.log("TODO: Node details")}
                    leftSection={<IconFileDescription size={14} />}
                  >
                    {"Node details"}
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item
                    color="red"
                    onClick={() => console.log("TODO: Node remove")}
                    leftSection={<IconTrash size={14} />}
                  >
                    {"Remove node"}
                  </Menu.Item>
                </>
              }
            />
            <ForceGraph2D
              graphData={graphData}
              width={width}
              height={height}
              linkDirectionalArrowLength={4}
              nodeCanvasObject={nodeCanvasObject}
              onNodeRightClick={handleNodeRightClick}
              onBackgroundRightClick={() => {}}
              onNodeClick={onNodeClick}
              linkColor={() => theme.colors.gray[4]}
              linkDirectionalArrowRelPos={1}
            />
          </Box>
        </Split.Pane>

        <Split.Resizer />

        <Split.Pane initialWidth="33%">
          <Box h="100%" p="md">
            <h2>Graph Explorer</h2>
            <p>
              Right-click on nodes to explore their details or remove them from
              the graph.
            </p>
          </Box>
        </Split.Pane>
      </Split>
    </Box>
  );
}

export const Route = createFileRoute("/graph-explorer/")({
  component: GraphExplorer,
});
