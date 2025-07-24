import { useCallback, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import ForceGraph2D from "react-force-graph-2d";
import { Box, useMantineTheme } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { useGraphData } from "@/hooks/use-graph-data";
import { useGraphColorPalette } from "@/hooks/use-graph-color-palette";

function GraphExplorer() {
  const { ref, width, height } = useElementSize();
  const theme = useMantineTheme();
  const colorPalette = useGraphColorPalette();
  const { graphData } = useGraphData();

  const typeColorMap = useRef(new Map<string, string>());

  const getColorForType = useCallback((type?: string) => {
    if (!type) return theme.colors.gray[6]; // default color
    if (!typeColorMap.current.has(type)) {
      const nextColor = colorPalette[typeColorMap.current.size % colorPalette.length];
      typeColorMap.current.set(type, nextColor);
    }
    return typeColorMap.current.get(type)!;
  }, [colorPalette, theme.colors.gray]);

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
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = theme.colors.dark[6];
    ctx.lineWidth = 2 / globalScale;
    ctx.stroke();

    // Draw the label
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = "black";
    ctx.fillText(label, node.x, node.y + radius + 1);

    // Set the background dimensions for the node
    node.__bckgDimensions = [radius * 2, fontSize + 4];
  };

  return (
    <Box ref={ref} h="calc(100vh - var(--app-shell-header-height))" bg="white">
      <ForceGraph2D
        graphData={graphData}
        width={width}
        height={height}
        linkDirectionalArrowLength={4}
        nodeCanvasObject={nodeCanvasObject}
      />
    </Box>
  );
}

export const Route = createFileRoute("/graph-explorer/")({
  component: GraphExplorer,
});
