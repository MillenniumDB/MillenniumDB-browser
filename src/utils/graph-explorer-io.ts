import type { GraphLink, GraphNode } from "@/hooks/use-graph-data";
import type { GraphData } from "react-force-graph-2d";

type ExportNode = {
  id: string;
  name: string;
  x?: number;
  y?: number;
  fx?: number;
  fy?: number;
};

type ExportLink = {
  id: string;
  name: string;
  source: string;
  target: string;
};

type ExportGraph = {
  nodes: ExportNode[];
  links: ExportLink[];
};

export const exportGraphData = (graphData: GraphData<GraphNode, GraphLink>) :string=> {
  const toExport: ExportGraph = { nodes: [], links: [] };

  for (const { id, name, types, x, y, fx, fy } of graphData.nodes) {
    toExport.nodes.push({
      id,
      name,
      ...(types !== undefined && { types }),
      ...(x !== undefined && { x }),
      ...(y !== undefined && { y }),
      ...(fx !== undefined && { fx }),
      ...(fy !== undefined && { fy }),
    });
  }

  for (const { id, source, target, name } of graphData.links) {
    const sourceId =
      typeof source === "string" ? source : (source as { id: string }).id;
    const targetId =
      typeof target === "string" ? target : (target as { id: string }).id;

    toExport.links.push({
      id,
      name,
      source: sourceId,
      target: targetId,
    });
  }

  const toExportStr = JSON.stringify(toExport);
  const blob = new Blob([toExportStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `graph-data-${Date.now()}.json`;
  a.click();

  URL.revokeObjectURL(url); // cleanup

  return a.download;
};

export const processImportedGraph = (data: ExportGraph): ExportGraph => {
  if (
    typeof data !== "object" ||
    data === null ||
    !Array.isArray(data.nodes) ||
    !Array.isArray(data.links)
  ) {
    // invalid root structure
    throw new Error(
      "Error in graph data json. Expected { nodes: [], links: [] }",
    );
  }

  // TODO: format nodes/links (remove unused entries if there were additional ones)
  // TODO: exclude malformed nodes/links
  // TODO: validate nodes/links
  // TODO: validate existance in database

  return data;
};
