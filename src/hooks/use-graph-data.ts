import { useCallback, useRef, useState } from "react";
import {
  type LinkObject,
  type GraphData,
  type NodeObject,
} from "react-force-graph-2d";

export type NodeId = string;
export type LinkId = string;

export type GraphNode = NodeObject<{
  id: NodeId;
  name: string;
  labels?: string[];
}>;

export type GraphLink = LinkObject<GraphNode, {
  id: LinkId;
  name: string;
  source: NodeId;
  target: NodeId;
}>;

type UseGraphDataOptions = {
  initialGraphData?: GraphData<GraphNode, GraphLink>;
};

export function useGraphData({
  initialGraphData = { nodes: [], links: [] },
}: UseGraphDataOptions = {}) {
  const [graphData, setGraphData] =
    useState<GraphData<GraphNode, GraphLink>>(initialGraphData);

  const nodeMap = useRef(new Map<NodeId, GraphNode>());
  const linkMap = useRef(new Map<LinkId, GraphLink>());
  const outgoingMap = useRef(new Map<NodeId, Set<NodeId>>());
  const incomingMap = useRef(new Map<NodeId, Set<NodeId>>());

  const getNode = (id: NodeId): GraphNode | undefined => {
    return nodeMap.current.get(id);
  };

  // updates the graphData state according to the maps
  const update = useCallback(() => {
    setGraphData({
      nodes: Array.from(nodeMap.current.values()),
      links: Array.from(linkMap.current.values()),
    });
    console.log(
      {
        nodes: Array.from(nodeMap.current.values()),
        links: Array.from(linkMap.current.values()),
      }
    )
  }, []);

  // clear all the data structures
  const clear = useCallback(() => {
    nodeMap.current.clear();
    linkMap.current.clear();
    outgoingMap.current.clear();
    incomingMap.current.clear();
  }, []);

  const addNode = useCallback((node: GraphNode) => {
    const { id } = node;
    if (!nodeMap.current.has(id)) {
      nodeMap.current.set(id, node);
      outgoingMap.current.set(id, new Set());
      incomingMap.current.set(id, new Set());
    }
  }, []);

  const removeLink = useCallback((id: LinkId) => {
    if (!linkMap.current.has(id)) return;

    const { source, target } = linkMap.current.get(id)!;

    linkMap.current.delete(id);
    outgoingMap.current.get(source)?.delete(target);
    incomingMap.current.get(target)?.delete(source);
  }, []);

  const removeNode = useCallback(
    (id: NodeId) => {
      if (!nodeMap.current.has(id)) return;

      // remove all its links
      for (const link of linkMap.current.values()) {
        if (link.source === id || link.target === id) {
          removeLink(link.id);
        }
      }

      // remove node
      nodeMap.current.delete(id);
      outgoingMap.current.delete(id);
      incomingMap.current.delete(id);
    },
    [removeLink],
  );

  const addLink = useCallback((link: GraphLink) => {
    const { id, source, target } = link;

    if (linkMap.current.has(id)) return;

    // cannot create link because either source or target does not exist
    if (!nodeMap.current.has(source) || !nodeMap.current.has(target)) return;

    linkMap.current.set(id, link);
    outgoingMap.current.get(source)?.add(target);
    incomingMap.current.get(target)?.add(source);
  }, []);

  const getOutgoing = useCallback((id: NodeId): GraphNode[] => {
    return Array.from(outgoingMap.current.get(id) || []).map(
      (id) => nodeMap.current.get(id)!,
    );
  }, []);

  const getIncoming = useCallback((id: NodeId): GraphNode[] => {
    return Array.from(incomingMap.current.get(id) || []).map(
      (id) => nodeMap.current.get(id)!,
    );
  }, []);

  const getNodeIds = useCallback((): NodeId[] => {
    return Array.from(nodeMap.current.keys());
  }, []);

  const updateNodeName = useCallback(
    (id: NodeId, name: string) => {
      const node = nodeMap.current.get(id);
      if (node) {
        node.name = name;
      }
    },
    [],
  );

  // Initialize data structures with initial graph data
  initialGraphData.nodes.forEach((node) => addNode(node));
  initialGraphData.links.forEach((link) => addLink(link));

  return {
    graphData,
    update,
    clear,
    addNode,
    removeNode,
    addLink,
    getOutgoing,
    getIncoming,
    getNode,
    getNodeIds,
    updateNodeName,
  };
}
