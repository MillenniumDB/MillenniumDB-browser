import type { ProcessCellForExportParams } from "ag-grid-community";
import {
  DateTime,
  Decimal,
  GraphAnon,
  GraphEdge,
  GraphNode,
  GraphPath,
  IRI,
  SimpleDate,
  StringDatatype,
  StringLang,
  Time,
} from "@millenniumdb/driver";

export function MDBValueToString(value: unknown): string {
  if (value === null || value === undefined) {
    return "NULL";
  }

  // nodes
  if (value instanceof GraphNode) {
    return value.toString();
  } else if (value instanceof GraphAnon) {
    return value.toString();
  }

  // edge
  if (value instanceof GraphEdge) {
    return value.toString();
  }

  // iri
  if (value instanceof IRI) {
    const { iri } = value;
    return `<${iri}>`;
  }

  // rdf literal
  if (value instanceof StringDatatype) {
    return value.toString();
  } else if (value instanceof StringLang) {
    return value.toString();
  }

  // date
  if (
    value instanceof SimpleDate ||
    value instanceof DateTime ||
    value instanceof Time
  ) {
    return value.toString();
  } else if (value instanceof Decimal) {
    return value.toString();
  }

  // path
  if (value instanceof GraphPath) {
    let res = `(${value.start})`;
    if (!value.length) {
      return res;
    }

    for (const segment of value.segments) {
      const typeStr = segment.type.id;
      switch (segment.direction) {
        case "left":
          res += `<-[:${typeStr}]-`;
          break;
        case "right":
          res += `-[:${typeStr}]->`;
          break;
        default: // case "undirected":
          res += `-[:${typeStr}]-`;
          break;
      }
      res += `(${segment.to})`;
    }

    return res;
  }

  // builtin
  const type = typeof value;
  if (type === "string") {
    return `"${value}"`;
  } else if (type === "boolean") {
    return value.toString();
  } else if (type === "bigint" || type === "number") {
    return value.toString();
  }

  // tensor
  if (value instanceof Float32Array || value instanceof Float64Array) {
    return `[${value.join(" ")}]`;
  }

  // array
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const elements = value.map((v) => MDBValueToString(v));
    return `[${elements.join(", ")}]`;
  }

  // object
  if (typeof value === "object") {
    const entries = Object.entries(value);
    if (entries.length === 0) return "{}";
    const parts = entries.map(([k, v]) => `${k}: ${MDBValueToString(v)}`);
    return `{${parts.join(", ")}}`;
  }

  // fallback
  return String(value);
}

export function MDBProcessCsv(params: ProcessCellForExportParams): string {
  const { value } = params;
  return MDBValueToString(value);
}
