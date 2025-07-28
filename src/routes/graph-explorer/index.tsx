import { useCallback, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import ForceGraph2D, {
  type ForceGraphMethods,
  type LinkObject,
  type NodeObject,
} from "react-force-graph-2d";
import { Box, Button, Menu, useMantineTheme } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import {
  useGraphData,
  type MDBLink,
  type MDBNode,
  type NodeId,
} from "@/hooks/use-graph-data";
import { useGraphColorPalette } from "@/hooks/use-graph-color-palette";
import { ContextMenu } from "@/components/graph-explorer/context-menu";
import { IconFileDescription, IconTrash } from "@tabler/icons-react";
import {
  BoxSelection,
  type OnBoxSelectionEnd,
  type OnBoxSelectionMove,
  type OnBoxSelectionStart,
} from "@/components/graph-explorer/box-selection";
import { HEADER_HEIGHT } from "@/layout/app-layout";

// Example graph data, replace with actual data fetching logic
const graphDatabase = {
  nodes: [
    {
      id: "n0",
      name: "Chile",
      types: ["Country"],
    },
    {
      id: "n1",
      name: "Santiago",
      types: ["City"],
    },
    {
      id: "n2",
      name: "Pontificia Universidad Católica de Chile",
      types: ["University", "Private"],
    },
    {
      id: "n3",
      name: "Universidad de Chile",
      types: ["University", "Public"],
    },
    {
      id: "n4",
      name: "Juan Pérez",
      types: ["Person", "Male", "Student"],
    },
    {
      id: "n5",
      name: "María González",
      types: ["Person", "Female", "Student"],
    },
    {
      id: "n6",
      name: "Ana López",
      types: ["Person", "Female", "Professor"],
    },
  ],
  links: [
    {
      id: "l0",
      source: "n1",
      target: "n0",
      name: "Located in",
    },
    {
      id: "l1",
      source: "n2",
      target: "n1",
      name: "Located in",
    },
    {
      id: "l2",
      source: "n3",
      target: "n1",
      name: "Located in",
    },
    {
      id: "l3",
      source: "n4",
      target: "n2",
      name: "Student at",
    },
    {
      id: "l4",
      source: "n5",
      target: "n3",
      name: "Student at",
    },
    {
      id: "l5",
      source: "n6",
      target: "n2",
      name: "Student at",
    },
    {
      id: "l6",
      source: "n4",
      target: "n5",
      name: "Friends with",
    },
    {
      id: "l7",
      source: "n5",
      target: "n4",
      name: "Friends with",
    },
    {
      id: "l8",
      source: "n4",
      target: "n6",
      name: "Friends with",
    },
    {
      id: "l9",
      source: "n6",
      target: "n4",
      name: "Friends with",
    },
  ],
};

function getOutgoingLinks(nodeId: string, graphDatabase) {
  return graphDatabase.links.filter((link) => link.source === nodeId);
}

function getOutgoingNodes(nodeId: string, graphDatabase) {
  const outgoingLinks = getOutgoingLinks(nodeId, graphDatabase);
  return graphDatabase.nodes.filter((node) =>
    outgoingLinks.some((link) => link.target === node.id),
  );
}

type MouseMode = "select" | "expand";

function GraphExplorer() {
  const { ref: boxRef, width, height } = useElementSize();
  const theme = useMantineTheme();
  const colorPalette = useGraphColorPalette();
  const { graphData, addNode, addLink, update, getNodeById } = useGraphData({
    initialGraphData: {
      nodes: graphDatabase.nodes,
      links: graphDatabase.links,
    },
  });

  const graphRef = useRef<
    | ForceGraphMethods<NodeObject<MDBNode>, LinkObject<MDBNode, MDBLink>>
    | undefined
  >(undefined);

  const [mouseMode, setMouseMode] = useState<MouseMode>("select");

  const [selecting, setSelecting] = useState(false);

  const [selectedNodeIds, setSelectedNodeIds] = useState<Set<NodeId>>(
    new Set(),
  );

  const [boxSelectedNodeIds, setBoxSelectedNodeIds] = useState<Set<NodeId>>(
    new Set(),
  );

  const [contextMenuState, setContextMenuState] = useState({
    opened: false,
    x: 0,
    y: 0,
  });

  const handleNodeClick = useCallback(
    (node: MDBNode, event: MouseEvent) => {
      if (!node) return;
      const { id } = node;

      if (mouseMode === "select") {
        if (event.ctrlKey || event.shiftKey || event.altKey) {
          setSelectedNodeIds((prev) => {
            const next = new Set(prev);
            if (prev.has(id)) {
              next.delete(id);
            } else {
              next.add(id);
            }
            return next;
          });
        } else {
          const unselect =
            selectedNodeIds.has(id) && selectedNodeIds.size === 1;
          setSelectedNodeIds(unselect ? new Set() : new Set([id]));
        }
      } else if (mouseMode === "expand") {
        const outgoingNodes = getOutgoingNodes(id, graphDatabase);
        outgoingNodes.forEach((outNode: MDBNode) => addNode(outNode));
        const outgoingLinks = getOutgoingLinks(id, graphDatabase);
        outgoingLinks.forEach((link: MDBLink) => addLink(link));
        update();
      }
    },
    [mouseMode, selectedNodeIds, update, addNode, addLink],
  );

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

  const nodeCanvasObject = useCallback(
    (
      node: NodeObject<MDBNode>,
      ctx: CanvasRenderingContext2D,
      globalScale: number,
    ) => {
      if (node.x === undefined || node.y === undefined) return;

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
      if (selectedNodeIds.has(node.id)) {
        ctx.strokeStyle = "red";
      } else if (boxSelectedNodeIds.has(node.id)) {
        ctx.strokeStyle = "blue";
      } else {
        ctx.strokeStyle = "white";
      }
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw the label
      ctx.font = `${fontSize}px Sans-Serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillStyle = "black";
      ctx.fillText(label, node.x, node.y + radius + 1);

      // Set the background dimensions for the node
      node.__bckgDimensions = [radius * 2, fontSize + 4];
    },
    [boxSelectedNodeIds, getColorForType, selectedNodeIds],
  );

  const handleNodeRightClick = useCallback(
    (_node: NodeObject<MDBNode>, event: MouseEvent) => {
      const { clientX, clientY } = event;
      setContextMenuState((prev) => ({
        ...prev,
        opened: true,
        x: clientX,
        y: clientY,
      }));
    },
    [],
  );

  const handleNodeDrag = useCallback(
    (node: NodeObject<MDBNode>, translate: { x: number; y: number }) => {
      if (selectedNodeIds.has(node.id)) {
        // dragging a selected node
        for (const selectedNodeId of selectedNodeIds) {
          if (selectedNodeId === node.id) continue; // do not modify dragged node

          const selectedNode = getNodeById(selectedNodeId);
          if (!selectedNode) continue;

          if (selectedNode.x === undefined || selectedNode.y === undefined)
            continue;

          // translate all selected nodes the same
          selectedNode.fx = selectedNode.x + translate.x;
          selectedNode.fy = selectedNode.y + translate.y;
        }
      }
    },
    [getNodeById, selectedNodeIds],
  );

  const handleNodeDragEnd = useCallback(
    (node: NodeObject<MDBNode>) => {
      // fix nodes after drag
      node.fx = node.x;
      node.fy = node.y;
    },
    // [getNodeById, selectedNodeIds],
    [],
  );

  const handleBoxSelectionStart = useCallback<OnBoxSelectionStart>(
    (_, event) => {
      if (event.ctrlKey || event.shiftKey || event.altKey) return;
      setSelectedNodeIds(new Set());
    },
    [],
  );

  const handleBoxSelectionMove = useCallback<OnBoxSelectionMove>(
    ({ minX, maxX, minY, maxY }) => {
      if (!graphRef.current) return;

      const minGraphCoords = graphRef.current.screen2GraphCoords(
        minX,
        minY - HEADER_HEIGHT,
      );
      const maxGraphCoords = graphRef.current.screen2GraphCoords(
        maxX,
        maxY - HEADER_HEIGHT,
      );

      setBoxSelectedNodeIds(() => {
        const next: Set<NodeId> = new Set();
        for (const node of graphData.nodes) {
          const { id, x, y } = node;

          if (node.name === "Chile") {
            console.log(minGraphCoords, maxGraphCoords, x, y);
          }

          if (!x || !y) continue;

          if (
            minGraphCoords.x > x ||
            maxGraphCoords.x < x ||
            minGraphCoords.y > y ||
            maxGraphCoords.y < y
          ) {
            // node is out of bounds
            continue;
          }

          if (!selectedNodeIds.has(node.id)) {
            next.add(id);
          }
        }

        return next;
      });
    },
    [graphData.nodes, selectedNodeIds],
  );

  const handleBoxSelectionEnd = useCallback<OnBoxSelectionEnd>(() => {
    setBoxSelectedNodeIds((prevBoxSelectedIds) => {
      setSelectedNodeIds((prevSelectedIds) => {
        return new Set([...prevSelectedIds, ...prevBoxSelectedIds]);
      });

      return new Set();
    });

    setSelecting(false);
  }, []);

  return (
    <Box
      ref={boxRef}
      h="calc(100vh - var(--app-shell-header-height))"
      bg="white"
    >
      {selecting && (
        <BoxSelection
          onBoxSelectionStart={handleBoxSelectionStart}
          onBoxSelectionMove={handleBoxSelectionMove}
          onBoxSelectionEnd={handleBoxSelectionEnd}
        />
      )}
      <ContextMenu
        opened={contextMenuState.opened}
        x={contextMenuState.x}
        y={contextMenuState.y}
        onClose={() =>
          setContextMenuState((prev) => ({ ...prev, opened: false }))
        }
        menuItems={
          selectedNodeIds.size > 1 ? (
            <>
              {/* multiple nodes selected ctx menu */}
              <Menu.Item
                color="red"
                onClick={() => console.log("TODO: Node remove")}
                leftSection={<IconTrash size={14} />}
              >
                {`Remove selected nodes (${selectedNodeIds.size})`}
              </Menu.Item>
            </>
          ) : (
            <>
              {/* single node ctx menu */}
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
          )
        }
      />
      <Button
        style={{ position: "fixed", top: 100, left: "50%", zIndex: 999999 }}
        onClick={() => setSelecting(true)}
      >
        test
      </Button>
      <ForceGraph2D
        ref={graphRef}
        graphData={graphData}
        width={width}
        height={height}
        linkDirectionalArrowLength={4}
        nodeCanvasObject={nodeCanvasObject}
        onBackgroundClick={() => setSelectedNodeIds(new Set())}
        // onNodeClick={onNodeClick}
        linkColor={() => theme.colors.gray[4]}
        linkDirectionalArrowRelPos={1}
        onNodeClick={handleNodeClick}
        onNodeRightClick={handleNodeRightClick}
        onNodeDrag={handleNodeDrag}
        onNodeDragEnd={handleNodeDragEnd}
      />
    </Box>
  );
}

export const Route = createFileRoute("/graph-explorer/")({
  component: GraphExplorer,
});
