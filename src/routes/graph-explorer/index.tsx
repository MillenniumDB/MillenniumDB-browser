import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import ForceGraph2D, {
  type ForceGraphMethods,
  type LinkObject,
  type NodeObject,
} from "react-force-graph-2d";
import {
  ActionIcon,
  Box,
  Divider,
  FileButton,
  Menu,
  Tooltip,
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
  IconListDetails,
  IconArrowsMaximize,
  IconFileExport,
  IconFileImport,
  IconDownload,
  IconUpload,
} from "@tabler/icons-react";
import { Toolbar } from "@/components/graph-explorer/toolbar";
import { HEADER_HEIGHT, NAVBAR_WIDTH } from "@/layout/app-layout";
import { Split } from "@gfazioli/mantine-split-pane";
import { GraphSidebar } from "@/components/graph-explorer/graph-sidebar";
import {
  exportGraphData,
  processImportedGraph,
} from "@/utils/graph-explorer-io";
import { notifications } from "@mantine/notifications";

// Example graph data, replace with actual data fetching logic
const graphDatabase = {
  nodes: [
    {
      id: "n0",
      name: "Chile",
      types: ["Country"],
      properties: {
        population: 19000000,
        area: 756102,
        capital: "Santiago",
      },
    },
    {
      id: "n1",
      name: "Santiago",
      types: ["City"],
      properties: {
        population: 7000000,
        area: 641.4,
        country: "Chile",
      },
    },
    {
      id: "n2",
      name: "Pontificia Universidad Católica de Chile",
      types: ["University", "Private"],
      properties: {
        founded: 1888,
        students: 30000,
        location: "Santiago",
      },
    },
    {
      id: "n3",
      name: "Universidad de Chile",
      types: ["University", "Public"],
      properties: {
        founded: 1842,
        students: 40000,
        location: "Santiago",
      },
    },
    {
      id: "n4",
      name: "Juan Pérez",
      types: ["Person", "Male", "Student"],
      properties: {
        age: 22,
        major: "Computer Science",
        university: "Pontificia Universidad Católica de Chile",
        hobbies: "Programming, Reading",
        veryLongProperty:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi at accusamus rem quos cumque id sapiente repellendus architecto ratione natus error iste consequuntur, est facere vero maxime dolores quaerat consequatur. Voluptas, cum optio neque eaque quas saepe magni vitae nulla nostrum quo aspernatur unde libero odio ipsam nam minima ab iste blanditiis praesentium! Nesciunt quaerat suscipit voluptatum voluptas perspiciatis nulla alias doloribus ducimus cum neque numquam accusantium ut odio ullam officia inventore praesentium harum molestiae eum architecto veritatis culpa sed, nihil expedita? Voluptates velit ea minima recusandae nesciunt excepturi aliquam asperiores vel. A, incidunt reiciendis. Vero voluptates praesentium fugit dolor.",
        exampleProperty1: "Example value 1",
        exampleProperty2: "Example value 2",
        exampleProperty3: "Example value 3",
        exampleProperty4: "Example value 4",
      },
    },
    {
      id: "n5",
      name: "María González",
      types: ["Person", "Female", "Student"],
      properties: {
        age: 21,
        major: "Engineering",
        university: "Universidad de Chile",
      },
    },
    {
      id: "n6",
      name: "Ana López",
      types: ["Person", "Female", "Professor"],
      properties: {
        age: 45,
        department: "Computer Science",
        university: "Pontificia Universidad Católica de Chile",
      },
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
      properties: {
        since: 1541,
      },
    },
    {
      id: "l1",
      source: "n2",
      target: "n1",
      name: "Located in",
      properties: {
        since: 1888,
      },
    },
    {
      id: "l2",
      source: "n3",
      target: "n1",
      name: "Located in",
      properties: {
        since: 1842,
      },
    },
    {
      id: "l3",
      source: "n4",
      target: "n2",
      name: "Student at",
      properties: {
        since: 2020,
      },
    },
    {
      id: "l4",
      source: "n5",
      target: "n3",
      name: "Student at",
      properties: {
        since: 2019,
      },
    },
    {
      id: "l5",
      source: "n6",
      target: "n2",
      name: "Student at",
      properties: {
        since: 2021,
      },
    },
    {
      id: "l6",
      source: "n4",
      target: "n5",
      name: "Friends with",
      properties: {
        since: 2022,
      },
    },
    {
      id: "l7",
      source: "n5",
      target: "n4",
      name: "Friends with",
      properties: {
        since: 2022,
      },
    },
    {
      id: "l8",
      source: "n4",
      target: "n6",
      name: "Friends with",
      properties: {
        since: 2023,
      },
    },
    {
      id: "l9",
      source: "n6",
      target: "n4",
      name: "Friends with",
      properties: {
        since: 2023,
      },
    },
  ],
};

export type CursorMode =
  | "default"
  | "box-select"
  | "object-details"
  | "expand-node";

export type SelectionState = {
  selectedNodeIds: Set<string>;
  boxSelectedNodeIds: Set<string>;
  boxSelectionActive: boolean;
};

type SidebarObjectDetails =
  | { type: "node"; data: MDBNode }
  | { type: "edge"; data: MDBLink }
  | null;

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

  const { graphData, addNode, addLink, update, getNode, clear } = useGraphData({
    initialGraphData: { nodes: [graphDatabase.nodes[4]], links: [] },
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

      // source/target can be either a string or converted to a MDBLink afterwards
      const sourceId: string =
        typeof source === "string" ? source : (source as { id: string }).id;
      const targetId: string =
        typeof target === "string" ? target : (target as { id: string }).id;

      if (sourceId === targetId) {
        // self links
        const count = numSelfConnectionsMap.get(sourceId) ?? 0;

        const index = Math.floor(count / 2) + 1; // 1, 1, 2, 2, ...
        const sign = count % 2 === 1 ? 1 : -1; // 1, -1, 1, -1, ...
        curvature = sign * index * selfCurvatureDelta;

        numSelfConnectionsMap.set(sourceId, count + 1);
      } else {
        // other links
        const [a, b] = [sourceId, targetId].sort();
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
  }, [graphData]);

  const [sidebarObjectDetails, setSidebarObjectDetails] =
    useState<SidebarObjectDetails>(null);

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
        case "object-details":
          setSidebarObjectDetails({ type: "node", data: node });
          break;
        case "expand-node":
          {
            const outgoingNodes = getOutgoingNodes(node.id, graphDatabase);
            outgoingNodes.forEach((outNode) => addNode(outNode));
            const outgoingLinks = getOutgoingLinks(node.id, graphDatabase);
            outgoingLinks.forEach((link) => addLink(link));
            update();
          }
          break;
      }
    },
    [cursorMode, addNode, addLink, update],
  );

  const handleLinkClick = useCallback(
    (link: LinkObject<MDBNode, MDBLink>) => {
      if (cursorMode === "object-details")
        setSidebarObjectDetails({ type: "edge", data: link });
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

  const handleExportGraphState = () => {
    const filename = exportGraphData(graphData);

    notifications.show({
      color: "green",
      title: `Successfully exported as "${filename}"`,
      message: "", // TODO: report nubmer of exported things
      withCloseButton: true,
      withBorder: true,
    });
  };

  const handleImportGraphState = (file: File | null) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);

        const processed = processImportedGraph(parsed);

        clear();
        for (const node of processed.nodes) {
          addNode(node);
        }
        for (const link of processed.links) {
          addLink(link);
        }

        update();

        notifications.show({
          color: "green",
          title: `Successfully imported`,
          message: "", // TODO: report number of imported things
          withCloseButton: true,
          withBorder: true,
        });
      } catch (err) {
        console.error("Failed to import graph data:", err);
        notifications.show({
          color: "red",
          title: "MillenniumDB Error",
          message: `Import error: ${err}`,
          withCloseButton: true,
          withBorder: true,
        });
      }
    };

    reader.onerror = () => {
      console.error("Failed to read the file");
      notifications.show({
        color: "red",
        title: "MillenniumDB Error",
        message: "Failed to read file",
        withCloseButton: true,
        withBorder: true,
      });
    };

    reader.readAsText(file);
  };

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
              onLinkClick={handleLinkClick}
            />
            <Toolbar
              cursorToolbarItems={[
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
                {
                  onClick: () => setCursorMode("object-details"),
                  icon: IconListDetails,
                  label: "Object details",
                  cursorMode: "object-details",
                },
                {
                  onClick: () => setCursorMode("expand-node"),
                  icon: IconArrowsMaximize,
                  label: "Expand node",
                  cursorMode: "expand-node",
                },
              ]}
              rightSection={
                <>
                  <Divider orientation="vertical" />
                  <Tooltip label="Export graph data">
                    <ActionIcon
                      variant="default"
                      onClick={handleExportGraphState}
                    >
                      <IconDownload size={20} stroke={1.5} />
                    </ActionIcon>
                  </Tooltip>
                  <Tooltip label="Import graph data">
                    <FileButton
                      onChange={handleImportGraphState}
                      accept="application/json"
                    >
                      {(props) => (
                        <ActionIcon {...props} variant="default">
                          <IconUpload size={20} stroke={1.5} />
                        </ActionIcon>
                      )}
                    </FileButton>
                  </Tooltip>
                </>
              }
              activeCursorMode={cursorMode}
            />
          </Box>
        </Split.Pane>

        <Split.Resizer />

        <Split.Pane initialWidth="33%" style={{ overflowY: "auto" }}>
          <GraphSidebar
            objectDetails={sidebarObjectDetails}
            getColorForType={getColorForType}
          />
        </Split.Pane>
      </Split>
    </Box>
  );
}

export const Route = createFileRoute("/graph-explorer/")({
  component: GraphExplorer,
});
