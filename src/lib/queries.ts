import { GraphNode as MDBGraphNode, type Driver } from "millenniumdb-driver";
import type { GraphNode, GraphLink } from "@/hooks/use-graph-data";
import { getNodeDisplayName } from "@/utils/graph-format";
import type { NodeConfig } from "@/routes/graph-explorer";

const SEARCH_LIMIT = 50;

export type GraphNodeDetails = {
  id: string;
  name: string;
  type: string;
  labels?: string[];
  properties?: Record<string, unknown>;
};

export type GraphNodeSearchResult = {
  id: string;
  result: string;
  category: string;
};

export async function fetchNodeDetails(
  driver: Driver,
  nodeId: string,
  nodeConfig: NodeConfig,
): Promise<GraphNodeDetails | null> {
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

  const name = getNodeDisplayName(
    raw.object.id,
    raw.properties,
    nodeConfig
  );

  return {
    id: raw.object.id,
    name: name,
    type: "Named Node",
    labels: raw.labels,
    properties: raw.properties,
  };
}

export async function fetchGraphNode(
  driver: Driver,
  nodeId: string,
  nodeConfig: NodeConfig
): Promise<GraphNode | null> {
  const details = await fetchNodeDetails(driver, nodeId, nodeConfig);
  if (!details) return null;

  return {
    id: details.id,
    name: details.name,
    labels: details.labels || [],
  };
}

export async function fetchOutgoingConnections(
  driver: Driver,
  nodeId: string,
  nodeConfig: NodeConfig,
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
      const edgeRaw = record.get("e");
      const nodeRaw = record.get("y");
      const edgeTypeRaw = record.get("t");

      const details = await fetchNodeDetails(driver, nodeRaw.id, nodeConfig);

      const target: GraphNode = {
        id: nodeRaw.id,
        name: details?.name || nodeRaw.id,
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
  signal: AbortSignal,
  nodeConfig: NodeConfig
): Promise<GraphNodeSearchResult[]> {
  return new Promise((resolve, reject) => {
    const onAbort = () => reject(new Error("Request aborted"));
    signal.addEventListener("abort", onAbort);

    (async () => {
      const session = driver.session();
      try {
        const results: GraphNodeSearchResult[] = [];
        const seen = new Set<string>();

        // Search by node properties
        const safeKeyword = keyword.replace(/"/g, '\\"');

        for (const prop of nodeConfig.namePropertiesKeys) {
          if (signal.aborted) return;
          const remaining = SEARCH_LIMIT - results.length;
          if (remaining <= 0) break;

          const query = `
            MATCH (?x)
            WHERE REGEX(?x.${prop}, "${safeKeyword}", "i")
            RETURN ?x, ?x.${prop}
            LIMIT ${remaining}
          `;

          const result = await session.run(query);
          const records = await result.records();

          for (const record of records) {
            if (signal.aborted) return;

            const nodeRaw = record.get("x");
            const propValue = record.get(`x.${prop}`);

            if (!(nodeRaw instanceof MDBGraphNode)) continue;
            const id = nodeRaw.id;
            if (seen.has(id)) continue;

            const result = String(propValue);
            if (result == null) continue;

            results.push({ id, category: prop, result });
            seen.add(id);

            if (results.length >= SEARCH_LIMIT) break;
          }
        }

        // Search by node ID
        if (signal.aborted) return;
        const remaining = SEARCH_LIMIT - results.length;
        if (remaining <= 0) {
          resolve(results);
          return;
        }

        const query = keyword === "" ? `
          MATCH (?x)
          RETURN ?x
          LIMIT ${remaining}
        ` : `
          MATCH (?x)
          WHERE ?x == ${keyword}
          RETURN ?x
        `;

        const result = await session.run(query);
        const records = await result.records();
        for (const record of records) {
          if (signal.aborted) return;

          const nodeRaw = record.get("x");
          if (!(nodeRaw instanceof MDBGraphNode)) continue;

          const id = nodeRaw.id;
          if (seen.has(id)) continue;

          results.push({ id, category: "Node Identifier", result: id });
          seen.add(id);

          if (results.length >= SEARCH_LIMIT) break;
        }

        resolve(results);
      } catch (err) {
        reject(err);
      } finally {
        await session.close();
        signal.removeEventListener("abort", onAbort);
      }
    })();
  });
}
