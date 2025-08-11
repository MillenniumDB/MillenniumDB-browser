import type { NodeConfig } from '@/routes/graph-explorer';

export function valueToString(value: unknown): string | null {
  if (value == null) return null;

  switch (typeof value) {
    case "string": {
      const string = value.trim();
      return string === "" ? null : string;
    }
    case "number":
      return Number.isFinite(value) ? String(value) : null;
    case "bigint":
      return value.toString();
    case "boolean":
      return value ? "true" : "false";
    case "symbol":
      return value.description ? `Symbol(${value.description})` : "Symbol()";
    case "function":
      return value.name ? `[Function ${value.name}]` : "[Function]";
    case "object": {
      if (Array.isArray(value)) {
        if (value.length === 0) return null;
        try {
          return JSON.stringify(value);
        } catch {
          return null;
        }
      }

      if (value instanceof Date) {
        return isNaN(value.getTime()) ? null : value.toISOString();
      }

      if (value instanceof Map) {
        try {
          return JSON.stringify(Object.fromEntries(value));
        } catch {
          return null;
        }
      }
      if (value instanceof Set) {
        try {
          return JSON.stringify(Array.from(value));
        } catch {
          return null;
        }
      }

      try {
        const string = JSON.stringify(value);
        return string === "{}" ? null : string;
      } catch {
        return null;
      }
    }
    default:
      return null;
  }
}

export function getNodeDisplayName(
  id: string,
  properties: Record<string, unknown>,
  nodeConfig: NodeConfig
): string {
  const { namePropertiesKeys } = nodeConfig;

  for (const key of namePropertiesKeys) {
    const raw = properties?.[key];
    const text = valueToString(raw);
    if (text) return text;
  }
  return id;
}
