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
} from "millenniumdb-driver";

export function MDBValueToString(value: unknown): string {
  if (value === null || value === undefined) {
    return "NULL";
  }

  // nodes
  if (value instanceof GraphNode) {
    return value.id;
  } else if (value instanceof GraphAnon) {
    return value.id;
  }

  // edge
  if (value instanceof GraphEdge) {
    return value.id;
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

  // array
  if (Array.isArray(value)) {
    return `[${value}]`;
  }

  // fallback
  const object = value as object;
  return JSON.stringify(object);
}

export function MDBProcessCsv(params: ProcessCellForExportParams): string {
  const { value } = params;
  return MDBValueToString(value);
}
