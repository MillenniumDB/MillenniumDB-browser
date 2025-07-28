import { useCallback, useRef, useState } from "react";
import {
  type LinkObject,
  type GraphData,
  type NodeObject,
} from "react-force-graph-2d";

export type NodeId = string;
export type LinkId = string;

export type MDBNode = {
  id: NodeId;
  name: string;
  types?: string[];
};

export type MDBLink = {
  id: LinkId;
  name: string;
  source: NodeId;
  target: NodeId;
};

type UseGraphDataOptions = {
  initialGraphData?: GraphData<MDBNode, MDBLink>;
};

export function useGraphData({
  initialGraphData = { nodes: [], links: [] },
}: UseGraphDataOptions = {}) {
  const [graphData, setGraphData] =
    useState<GraphData<MDBNode, MDBLink>>(initialGraphData);

  const nodeMap = useRef(new Map<NodeId, NodeObject<MDBNode>>());
  const linkMap = useRef(new Map<LinkId, LinkObject<MDBNode, MDBLink>>());
  const outgoing = useRef(new Map<NodeId, Set<NodeId>>());
  const incoming = useRef(new Map<NodeId, Set<NodeId>>());

  // updates the graphData state according to the maps
  const update = useCallback(() => {
    setGraphData({
      nodes: Array.from(nodeMap.current.values()),
      links: Array.from(linkMap.current.values()),
    });
  }, []);

  // clear all the data structures
  const clear = useCallback(() => {
    nodeMap.current.clear();
    linkMap.current.clear();
    outgoing.current.clear();
    incoming.current.clear();
  }, []);

  const getNodeById = useCallback((id: string)=> {
    return nodeMap.current.get(id);
  }, [nodeMap])

  const addNode = useCallback((node: MDBNode) => {
    const { id } = node;
    if (!nodeMap.current.has(id)) {
      nodeMap.current.set(id, node);
      outgoing.current.set(id, new Set());
      incoming.current.set(id, new Set());
    }
  }, []);

  // TODO: fix remove link logic
  const removeLink = useCallback((source: NodeId, target: NodeId) => {
    const id: LinkId = `${source}->${target}`;
    if (!linkMap.current.has(id)) return;

    linkMap.current.delete(id);
    outgoing.current.get(source)?.delete(target);
    incoming.current.get(target)?.delete(source);
  }, []);

  const removeNode = useCallback(
    (id: NodeId) => {
      if (!nodeMap.current.has(id)) return;

      // remove all its links
      const out = outgoing.current.get(id) || new Set();
      for (const target of out) {
        removeLink(id, target);
      }
      const inc = incoming.current.get(id) || new Set();
      for (const source of inc) {
        removeLink(source, id);
      }

      // remove node
      nodeMap.current.delete(id);
      outgoing.current.delete(id);
      incoming.current.delete(id);
    },
    [removeLink],
  );

  const addLink = useCallback((link: LinkObject<MDBNode, MDBLink>) => {
    const { id, source, target } = link;

    if (linkMap.current.has(id)) return;

    // cannot create link because either source or target does not exist
    if (!nodeMap.current.has(source) || !nodeMap.current.has(target)) return;

    linkMap.current.set(id, link);
    outgoing.current.get(source)?.add(target);
    incoming.current.get(target)?.add(source);
  }, []);

  const getOutgoing = useCallback((id: NodeId): NodeObject<MDBNode>[] => {
    return Array.from(outgoing.current.get(id) || []).map(
      (id) => nodeMap.current.get(id)!,
    );
  }, []);

  const getIncoming = useCallback((id: NodeId): NodeObject<MDBNode>[] => {
    return Array.from(incoming.current.get(id) || []).map(
      (id) => nodeMap.current.get(id)!,
    );
  }, []);

  // Initialize data structures with initial graph data
  initialGraphData.nodes.forEach((node) => addNode(node));
  initialGraphData.links.forEach((link) => addLink(link));

  return {
    graphData,
    getNodeById,
    update,
    clear,
    addNode,
    removeNode,
    addLink,
    getOutgoing,
    getIncoming,
  };
}
