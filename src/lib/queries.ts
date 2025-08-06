import { GraphNode as MDBGraphNode, type Driver } from "millenniumdb-driver";
import type { GraphNode, GraphLink } from "@/hooks/use-graph-data";

export type NodeDetails = {
  id: string;
  name: string;
  type: string;
  labels?: string[];
  properties?: Record<string, unknown>;
};

export async function fetchNodeDetails(
  driver: Driver,
  nodeId: string
): Promise<NodeDetails | null> {
  const session = driver.session();
  const query = `DESCRIBE ${nodeId}`;
  const result = await session.run(query);
  const records = await result.records();
  await session.close();

  if (records.length === 0) {
    return null;
  }

  const raw = records[0].toObject() as {
    object: {
      id: string;
    };
    labels: string[];
    properties: Record<string, unknown>;
  };

  return {
    id: raw.object.id,
    name: raw.object.id,
    type: "Named Node",
    labels: raw.labels,
    properties: raw.properties,
  };
}

export async function fetchOutgoingConnections(
  driver: Driver,
  nodeId: string
): Promise<Array<{ edge: GraphLink; target: GraphNode }>> {
  const session = driver.session();
  const query = `
    MATCH (?x)-[?e :?t]->(?y)
    WHERE ?x == ${nodeId}
    RETURN ?e, ?y, ?t
    LIMIT 10
  `;
  const result = await session.run(query);
  const records = await result.records();
  await session.close();

  const connections = await Promise.all(
    records.map(async (record) => {
      const {
        e: edgeRaw,
        y: nodeRaw,
        t: edgeTypeRaw,
      } = record.toObject() as {
        e: { id: string };
        y: { id: string };
        t: { id: string };
      };

      const details = await fetchNodeDetails(driver, nodeRaw.id);

      const target: GraphNode = {
        id: nodeRaw.id,
        name: nodeRaw.id,
        labels: details?.labels,
      };

      const edge: GraphLink = {
        id: edgeRaw.id,
        name: edgeTypeRaw.id,
        source: nodeId,
        target: nodeRaw.id,
      };

      return { edge, target };
    })
  );

  return connections;
}

export function searchNodes(
  driver: Driver,
  keyword: string,
  signal: AbortSignal
): Promise<GraphNode[]> {
  return new Promise((resolve, reject) => {
    signal.addEventListener("abort", () => {
      reject(new Error("Request aborted"));
    });

    (async () => {
      const session = driver.session();
      const query = `
        MATCH (?x)
        WHERE REGEX(?x.Mister, "${keyword}", "i")
        RETURN ?x, ?x.Mister
        LIMIT 50
      `;
      const result = await session.run(query);
      const records = await result.records();
      console.log(records);
      await session.close();

      const nodes = await Promise.all(
        records.map(async (record): Promise<GraphNode | null> => {
          const { x: nodeRaw } = record.toObject() as { x: { id: string } };

          if (!(nodeRaw instanceof MDBGraphNode)) {
            return null;
          }

          const details = await fetchNodeDetails(driver, nodeRaw.id);
          return {
            id: nodeRaw.id,
            name: nodeRaw.id,
            labels: details?.labels,
          };
        })
      );

      resolve(nodes.filter((n): n is GraphNode => n !== null));
    })().catch(reject);
  });
}
