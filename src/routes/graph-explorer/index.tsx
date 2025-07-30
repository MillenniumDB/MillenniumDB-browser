import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import ForceGraph2D, {
  type ForceGraphMethods,
  type LinkObject,
  type NodeObject,
} from "react-force-graph-2d";
import {
  Box,
  Menu,
  useComputedColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useElementSize, useMediaQuery } from "@mantine/hooks";
import {
  useGraphData,
  type LinkId,
  type MDBLink,
  type MDBNode,
  type NodeId,
} from "@/hooks/use-graph-data";
import { useGraphColorPalette } from "@/hooks/use-graph-color-palette";
import { ContextMenu } from "@/components/graph-explorer/context-menu";
import {
  BoxSelection,
  type OnBoxSelectionEnd,
  type OnBoxSelectionMove,
  type OnBoxSelectionStart,
} from "@/components/graph-explorer/box-selection";
import {
  IconFileDescription,
  IconNewSection,
  IconPointer,
  IconTrash,
} from "@tabler/icons-react";
import { Toolbar } from "@/components/graph-explorer/toolbar";
import { HEADER_HEIGHT, NAVBAR_WIDTH } from "@/layout/app-layout";
import { Split } from "@gfazioli/mantine-split-pane";

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
      id: "x",
      source: "n3",
      target: "n1",
      name: "Likes",
    },
    {
      id: "a",
      source: "n3",
      target: "n1",
      name: "Comment",
    },
    {
      id: "b",
      source: "n3",
      target: "n1",
      name: "Follow",
    },
    {
      id: "c",
      source: "n3",
      target: "n1",
      name: "isFriendsWith",
    },
    {
      id: "d",
      source: "n3",
      target: "n1",
      name: "wasWith",
    },
    {
      id: "e",
      source: "n3",
      target: "n1",
      name: "isFriendsWith",
    },
    {
      id: "f",
      source: "n3",
      target: "n1",
      name: "F",
    },
    {
      id: "self1",
      source: "n0",
      target: "n0",
      name: "Self1",
    },
    {
      id: "self2",
      source: "n0",
      target: "n0",
      name: "Self2",
    },
    {
      id: "self3",
      source: "n0",
      target: "n0",
      name: "Self3",
    },
    {
      id: "self4",
      source: "n0",
      target: "n0",
      name: "Self4",
    },
    {
      id: "self5",
      source: "n0",
      target: "n0",
      name: "Self5",
    },
    {
      id: "self6",
      source: "n0",
      target: "n0",
      name: "Self6",
    },
    {
      id: "self7",
      source: "n0",
      target: "n0",
      name: "Self7",
    },
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

export type CursorMode = "default" | "box-select";

export type SelectionState = {
  selectedNodeIds: Set<string>;
  boxSelectedNodeIds: Set<string>;
  boxSelectionActive: boolean;
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

function GraphExplorer() {
  const fgRef = useRef<
    | ForceGraphMethods<NodeObject<MDBNode>, LinkObject<MDBNode, MDBLink>>
    | undefined
  >(undefined);

  const { ref: graphBoxRef, width, height } = useElementSize();

  const theme = useMantineTheme();
  const colorPalette = useGraphColorPalette();
  const smallerThanXs = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);

  const computedColorScheme = useComputedColorScheme();
  const isDarkMode = useMemo(() => {
    return computedColorScheme === "dark";
  }, [computedColorScheme]);

  const { graphData, addNode, addLink, update, getNode } = useGraphData({
    initialGraphData: graphDatabase,
  });

  const [contextMenuState, setContextMenuState] = useState({
    opened: false,
    x: 0,
    y: 0,
  });

  const [selection, setSelection] = useState<SelectionState>({
    selectedNodeIds: new Set(),
    boxSelectedNodeIds: new Set(),
    boxSelectionActive: false,
  });

  const [cursorMode, setCursorMode] = useState<CursorMode>("default");

  // maps LinkIds to their curvature
  const curvatureMap = useMemo<Map<LinkId, number>>(() => {
    const numConnectionsMap: Map<string, number> = new Map();
    const numSelfConnectionsMap: Map<string, number> = new Map();

    const nextCurvatureMap: Map<LinkId, number> = new Map();
    for (const { id, source, target } of graphData.links) {
      const selfCurvatureDelta = 0.3; // factor for self links
      const curvatureDelta = 0.2; // factor for other links

      let curvature = 0;

      if (source === target) {
        // self links
        const count = numSelfConnectionsMap.get(source) ?? 0;

        const index = Math.floor(count / 2) + 1; // 1, 1, 2, 2, ...
        const sign = count % 2 === 1 ? 1 : -1; // 1, -1, 1, -1, ...
        curvature = sign * index * selfCurvatureDelta;

        numSelfConnectionsMap.set(source, count + 1);
      } else {
        // other links
        const [a, b] = [source, target].sort();
        const key = `${a}-${b}`;
        const count = numConnectionsMap.get(key) ?? 0;

        if (count > 0) {
          const index = Math.floor((count - 1) / 2) + 1; // 0, 1, 1, 2, 2, ...
          const sign = count % 2 === 1 ? 1 : -1; // 1, -1, 1, -1, 1, ...
          curvature = sign * index * curvatureDelta;
        }

        numConnectionsMap.set(key, count + 1);
      }

      nextCurvatureMap.set(id, curvature);
    }
    return nextCurvatureMap;
  }, [graphData.links]);

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
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);

    if (selection.selectedNodeIds.has(node.id)) {
      ctx.strokeStyle = "red";
    } else if (selection.boxSelectedNodeIds.has(node.id)) {
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
  };

  const linkCanvasObject = useCallback(
    (
      link: LinkObject<MDBNode, MDBLink>,
      ctx: CanvasRenderingContext2D,
      globalScale: number,
    ) => {
      const { id, source, target } = link as {
        id: LinkId;
        source: NodeObject<MDBNode>;
        target: NodeObject<MDBNode>;
      };

      if (!source.x || !source.y || !target.x || !target.y) return;

      const curvature = curvatureMap.get(id) ?? 0;
      const fontSize = Math.max(10 / globalScale, 2); // TODO: could be a fixed value instead
      const text = link.name;

      ctx.save();

      ctx.font = `${fontSize}px Sans-Serif`;

      const textWidth = ctx.measureText(text).width;
      const [bgWidth, bgHeight] = [textWidth, fontSize].map(
        (n) => n + 0.5 * fontSize,
      );

      // bezier midpoint
      let bx: number;
      let by: number;
      let textAngle: number = 0;

      if (source.id === target.id) {
        // self link
        const curvature = curvatureMap.get(id) ?? 0;

        // loop parameters
        const radius = 75 * Math.abs(curvature);
        const angle = curvature > 0 ? -Math.PI / 4 : (3 * Math.PI) / 4;

        // bezier control point (offset from node center)
        const cx = source.x + Math.cos(angle) * radius;
        const cy = source.y + Math.sin(angle) * radius;

        // bezier midpoint at t = 0.5
        const t = 0.5;
        bx = (1 - t) ** 2 * source.x + 2 * (1 - t) * t * cx + t ** 2 * source.x;
        by = (1 - t) ** 2 * source.y + 2 * (1 - t) * t * cy + t ** 2 * source.y;
      } else {
        // other links

        // normal vector
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const nx = -dy / len;
        const ny = dx / len;

        // bezier control point
        const mx = (source.x + target.x) / 2;
        const my = (source.y + target.y) / 2;
        const cx = mx - curvature * len * nx;
        const cy = my - curvature * len * ny;

        // bézier midpoint at t = 0.5
        const t = 0.5;
        bx = (1 - t) ** 2 * source.x + 2 * (1 - t) * t * cx + t ** 2 * target.x;
        by = (1 - t) ** 2 * source.y + 2 * (1 - t) * t * cy + t ** 2 * target.y;

        // tangent vector at t = 0.5
        const dxdt = 2 * (1 - t) * (cx - source.x) + 2 * t * (target.x - cx);
        const dydt = 2 * (1 - t) * (cy - source.y) + 2 * t * (target.y - cy);
        textAngle = Math.atan2(dydt, dxdt);

        if (textAngle > Math.PI / 2 || textAngle < -Math.PI / 2) {
          // adjust angle to be always left-right/top-down
          textAngle += Math.PI;
        }
      }

      ctx.translate(bx, by);
      ctx.rotate(textAngle);

      if (isDarkMode) {
        ctx.fillStyle = "rgba(0,0,0,0.75)";
      } else {
        ctx.fillStyle = "rgba(255,255,255,.75)";
      }

      ctx.fillRect(-bgWidth / 2, -bgHeight / 2, bgWidth, bgHeight);

      ctx.fillStyle = isDarkMode ? "#fff" : "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 0, 0);

      ctx.restore();
    },
    [curvatureMap, isDarkMode],
  );

  const handleBackgroundClick = useCallback(() => {
    setSelection((prev) => ({ ...prev, selectedNodeIds: new Set() }));
  }, []);

  const handleNodeClick = useCallback(
    (node: NodeObject<MDBNode>, event: MouseEvent) => {
      switch (cursorMode) {
        case "default":
          setSelection((prev) => {
            if (event.ctrlKey || event.altKey || event.shiftKey) {
              return {
                ...prev,
                selectedNodeIds: new Set([...prev.selectedNodeIds, node.id]),
              };
            } else {
              return {
                ...prev,
                selectedNodeIds: new Set([node.id]),
              };
            }
          });
          break;
        case "box-select":
          break;
      }
    },
    [cursorMode],
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
      if (selection.selectedNodeIds.has(node.id)) {
        for (const selectedNodeId of selection.selectedNodeIds) {
          if (selectedNodeId === node.id) continue;

          const selectedNode = getNode(selectedNodeId);
          if (!selectedNode) continue;

          if (!selectedNode.x || !selectedNode.y) continue;
          selectedNode.fx = selectedNode.x + translate.x;
          selectedNode.fy = selectedNode.y + translate.y;
        }
      }
    },
    [getNode, selection.selectedNodeIds],
  );

  const handleNodeDragEnd = useCallback((node: NodeObject<MDBNode>) => {
    // fix nodes after drag
    node.fx = node.x;
    node.fy = node.y;
  }, []);

  const handleBoxSelectionStart = useCallback<OnBoxSelectionStart>(
    (_, event) => {
      if (event.ctrlKey || event.shiftKey || event.altKey) return;
      setSelection((prev) => ({ ...prev, selectedNodeIds: new Set() }));
    },
    [],
  );

  const handleBoxSelectionMove = useCallback<OnBoxSelectionMove>(
    ({ minX, maxX, minY, maxY }) => {
      if (!fgRef.current) return;

      const xOffset = smallerThanXs ? 0 : NAVBAR_WIDTH;

      const minGraphCoords = fgRef.current.screen2GraphCoords(
        minX - xOffset,
        minY - HEADER_HEIGHT,
      );
      const maxGraphCoords = fgRef.current.screen2GraphCoords(
        maxX - xOffset,
        maxY - HEADER_HEIGHT,
      );

      setSelection((prev) => {
        const nextBoxSelectedNodeIds: Set<NodeId> = new Set();
        for (const node of graphData.nodes) {
          const { id, x, y } = node;

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

          if (!prev.selectedNodeIds.has(node.id)) {
            // node is not selected yet
            nextBoxSelectedNodeIds.add(id);
          }
        }

        return { ...prev, boxSelectedNodeIds: nextBoxSelectedNodeIds };
      });
    },
    [graphData.nodes, smallerThanXs],
  );

  const handleBoxSelectionEnd = useCallback<OnBoxSelectionEnd>(() => {
    setSelection((prev) => ({
      selectedNodeIds: new Set([
        ...prev.selectedNodeIds,
        ...prev.boxSelectedNodeIds,
      ]),
      boxSelectedNodeIds: new Set(),
      boxSelectionActive: false,
    }));
    setCursorMode("default");
  }, []);

  useEffect(() => {
    fgRef.current?.d3Force("center", null);
  }, []);

  const handleLinkCurvature = useCallback(
    (link: LinkObject<MDBLink>) => {
      const { id } = link;
      return curvatureMap.get(id) ?? 0;
    },
    [curvatureMap],
  );

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
            {selection.boxSelectionActive && (
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
                selection.selectedNodeIds.size > 1 ? (
                  <>
                    {/* Selection menu */}
                    <Menu.Item
                      color="red"
                      onClick={() => console.log("TODO: Selected nodes remove")}
                      leftSection={<IconTrash size={14} />}
                    >
                      {"Remove selected nodes"}
                    </Menu.Item>
                  </>
                ) : (
                  <>
                    {/* Single node menu */}
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
            <ForceGraph2D<MDBNode, MDBLink>
              ref={fgRef}
              graphData={graphData}
              width={width}
              height={height}
              linkDirectionalArrowLength={4}
              nodeCanvasObject={nodeCanvasObject}
              linkCanvasObject={linkCanvasObject}
              linkCanvasObjectMode={() => "after"}
              onBackgroundRightClick={() => {}}
              linkColor={() => theme.colors.gray[4]}
              linkDirectionalArrowRelPos={1}
              linkCurvature={handleLinkCurvature}
              onBackgroundClick={handleBackgroundClick}
              onNodeClick={handleNodeClick}
              onNodeRightClick={handleNodeRightClick}
              onNodeDrag={handleNodeDrag}
              onNodeDragEnd={handleNodeDragEnd}
            />
            <Toolbar
              toolbarItems={[
                {
                  onClick: () => setCursorMode("default"),
                  icon: IconPointer,
                  label: "Default",
                  cursorMode: "default",
                },
                {
                  onClick: () => {
                    setCursorMode("box-select");
                    setSelection((prev) => ({
                      ...prev,
                      boxSelectionActive: true,
                    }));
                  },
                  icon: IconNewSection,
                  label: "Box selection",
                  cursorMode: "box-select",
                },
              ]}
              activeCursorMode={cursorMode}
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
