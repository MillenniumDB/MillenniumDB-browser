import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import ForceGraph2D, {
  type ForceGraphMethods,
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
  type GraphLink,
  type GraphNode,
  type LinkId,
  type NodeId,
} from "@/hooks/use-graph-data";
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
  IconArrowsMaximize,
  IconDownload,
  IconUpload,
} from "@tabler/icons-react";
import { Toolbar } from "@/components/graph-explorer/toolbar";
import { HEADER_HEIGHT, NAVBAR_WIDTH } from "@/layout/app-layout";
import { Split } from "@gfazioli/mantine-split-pane";
import { GraphSidebar } from "@/components/graph-explorer/graph-sidebar";
import { getGraphTheme, type GraphTheme } from "@/theme/custom-graph-theme";
import {
  exportGraphData,
  processImportedGraph,
} from "@/utils/graph-explorer-io";
import { notifications } from "@mantine/notifications";
import { fetchOutgoingConnections } from "@/lib/queries";
import { useMDB } from "@/providers/mdb-provider";
import { fetchNodeDetails } from "@/lib/queries";
import NodeSearch from "@/components/graph-explorer/node-search";

export type CursorMode =
  | "default"
  | "box-select"
  | "expand-node";

export type SelectionState = {
  selectedNodeIds: Set<string>;
  boxSelectedNodeIds: Set<string>;
  boxSelectionActive: boolean;
};

function GraphExplorer() {
  const { driver } = useMDB();
  const { graphData, addNode, addLink, update, getNode, clear } = useGraphData();

  useEffect(() => {
    const loadInitialNode = async () => {
      const nodeDetails = await fetchNodeDetails(driver, "Q1");
      if (nodeDetails) {
        addNode({
          id: nodeDetails.id,
          name: nodeDetails.name,
          labels: nodeDetails.labels,
        });
        update();
      }
    };

    loadInitialNode();
  }, [driver, addNode, update]);

  const fgRef = useRef<
    | ForceGraphMethods<GraphNode, GraphLink>
    | undefined
  >(undefined);
  const { ref: graphBoxRef, width, height } = useElementSize();

  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme();
  const graphTheme: GraphTheme = useMemo(() => {
    return getGraphTheme(computedColorScheme, theme);
  }, [computedColorScheme, theme]);

  const labelColorMap = useRef(new Map<string, string>());
  const smallerThanXs = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);

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
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
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

  const getColorForLabel = useCallback(
    (label?: string) => {
      if (!label) return graphTheme.node.defaultColor;
      if (!labelColorMap.current.has(label)) {
        const nextColor =
          graphTheme.node.colorPalette[
            labelColorMap.current.size % graphTheme.node.colorPalette.length
          ];
        labelColorMap.current.set(label, nextColor);
      }
      return labelColorMap.current.get(label)!;
    },
    [graphTheme.node.colorPalette, graphTheme.node.defaultColor],
  );

  const nodeCanvasObject = (
    node: GraphNode,
    ctx: CanvasRenderingContext2D,
    globalScale: number
  ) => {
    const radius = 4;
    const labels = node.labels ?? [];
    const label = node.name;
    const fontSize = 12 / globalScale;

    // Draw the node as a pie chart
    const slices = labels.length > 0 ? labels.length : 1;
    const anglePerSlice = (2 * Math.PI) / slices;

    for (let i = 0; i < slices; i++) {
      const label = labels[i] ?? undefined;
      const color = getColorForLabel(label);

      const startAngle = i * anglePerSlice;
      const endAngle = startAngle + anglePerSlice;

      ctx.beginPath();
      ctx.moveTo(node.x!, node.y!);
      ctx.arc(node.x!, node.y!, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }

    // Draw the border
    const isSelected = selection.selectedNodeIds.has(node.id);
    const isBoxSelected = selection.boxSelectedNodeIds.has(node.id);
    const isHovered = node.id === hoveredNodeId;

    if (isSelected || isBoxSelected || isHovered) {
      ctx.beginPath();
      ctx.arc(node.x!, node.y!, radius + 1, 0, 2 * Math.PI);

      ctx.strokeStyle = graphTheme.node.selectedBorderColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw the label
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = graphTheme.node.fontColor;
    ctx.fillText(label, node.x!, node.y! + radius + 1);

    // Set the background dimensions for the node
    node.__bckgDimensions = [radius * 2, fontSize + 4];
  };

  const linkCanvasObject = useCallback(
    (
      link: GraphLink,
      ctx: CanvasRenderingContext2D,
      globalScale: number,
    ) => {
      const { id, source, target } = link as {
        id: LinkId;
        source: GraphNode;
        target: GraphNode;
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

      ctx.fillStyle = graphTheme.edge.backgroundColor;

      ctx.fillRect(-bgWidth / 2, -bgHeight / 2, bgWidth, bgHeight);

      ctx.fillStyle = graphTheme.edge.fontColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 0, 0);

      ctx.restore();
    },
    [curvatureMap, graphTheme.edge.backgroundColor, graphTheme.edge.fontColor],
  );

  const handleBackgroundClick = useCallback(() => {
    setSelection((prev) => ({ ...prev, selectedNodeIds: new Set() }));
  }, []);

  const handleNodeClick = useCallback(
    async (node: GraphNode, event: MouseEvent) => {
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
        case "expand-node": {
          const outgoing = await fetchOutgoingConnections(driver, node.id);
          console.log(outgoing);
          for (const { edge, target } of outgoing) {
            addNode(target);
            addLink(edge);
          }
          update();
          break;
        }
      }
    },
    [cursorMode, addNode, addLink, update, driver],
  );

  const handleNodeRightClick = useCallback(
    (_node: GraphNode, event: MouseEvent) => {
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

  const handleNodeHover = useCallback(
    (node: GraphNode | null) => {
      if (cursorMode === "default") {
        setHoveredNodeId(node ? node.id : null);
      } else if (cursorMode === "expand-node") {
        graphBoxRef.current?.style.setProperty("cursor", node ? "pointer" : "default");
      }
    },
    [cursorMode, graphBoxRef],
  );

  const handleNodeDrag = useCallback(
    (node: GraphNode, translate: { x: number; y: number }) => {
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

  const handleNodeDragEnd = useCallback((node: GraphNode) => {
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
    (link: GraphLink) => {
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
            <NodeSearch addNode={addNode} update={update} />
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
            <ForceGraph2D<GraphNode, GraphLink>
              ref={fgRef}
              graphData={graphData}
              width={width}
              height={height}
              backgroundColor={graphTheme.backgroundColor}
              linkDirectionalArrowLength={4}
              nodeCanvasObject={nodeCanvasObject}
              linkCanvasObject={linkCanvasObject}
              linkCanvasObjectMode={() => "after"}
              onBackgroundRightClick={() => {}}
              linkColor={() => graphTheme.edge.color}
              linkDirectionalArrowRelPos={1}
              linkCurvature={handleLinkCurvature}
              onBackgroundClick={handleBackgroundClick}
              onNodeClick={handleNodeClick}
              onNodeHover={handleNodeHover}
              onNodeRightClick={handleNodeRightClick}
              onNodeDrag={handleNodeDrag}
              onNodeDragEnd={handleNodeDragEnd}
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

        <Split.Pane initialWidth="25%">
          <GraphSidebar
            selectedNodes={selection.selectedNodeIds}
            getColorForLabel={getColorForLabel}
          />
        </Split.Pane>
      </Split>
    </Box>
  );
}

export const Route = createFileRoute("/graph-explorer/")({
  component: GraphExplorer,
});
