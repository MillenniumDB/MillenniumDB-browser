import { Anchor, Text } from "@mantine/core";
import type { CustomCellRendererProps } from "ag-grid-react";
import {
  DateTime,
  Decimal,
  IRI,
  SimpleDate,
  Time,
  StringDatatype,
  StringLang,
  GraphAnon,
  GraphNode,
  GraphEdge,
  GraphPath,
} from "millenniumdb-driver";

export function MDBCellRenderer(props: CustomCellRendererProps) {
  const { value } = props;

  if (value === null) {
    return (
      <Text span className="mdb-null">
        {"NULL"}
      </Text>
    );
  }

  // nodes
  if (value instanceof GraphNode) {
    return <Text span className="mdb-node">{`${value}`}</Text>;
  } else if (value instanceof GraphAnon) {
    return <Text span className="mdb-node">{`${value}`}</Text>;
  }

  // edge
  if (value instanceof GraphEdge) {
    return <Text span className="mdb-edge">{`${value}`}</Text>;
  }

  // iri
  if (value instanceof IRI) {
    const { iri } = value;
    return (
      <Anchor className="mdb-iri" href={iri} target="_blank">
        {iri}
      </Anchor>
    );
  }

  // rdf literal
  if (value instanceof StringDatatype) {
    const { str, datatype } = value;
    const { iri } = datatype;
    return (
      <Text span>
        <Text span className="mdb-string">{`"${str}"`}</Text>
        <Text span className="mdb-punctuation">
          {"^^"}
        </Text>
        <Anchor className="mdb-iri" href={iri} target="_blank">
          {iri}
        </Anchor>
      </Text>
    );
  } else if (value instanceof StringLang) {
    const { str, lang } = value;
    return (
      <Text span>
        <Text span className="mdb-string">{`"${str}"`}</Text>
        <Text span className="mdb-language">{`@${lang}`}</Text>
      </Text>
    );
  }

  // date
  if (value instanceof SimpleDate || value instanceof DateTime || value instanceof Time) {
    return <Text span className="mdb-string">{`${value}`}</Text>;
  } else if (value instanceof Decimal) {
    return <Text span className="mdb-number">{`${value}`}</Text>;
  }

  // path
  if (value instanceof GraphPath) {
    // TODO:
    return null;
  }

  // builtin
  const type = typeof value;
  if (type === "string") {
    return <Text span className="mdb-string">{`"${value}"`}</Text>;
  } else if (type === "boolean") {
    return <Text span className="mdb-boolean">{`${value}`}</Text>;
  } else if (type === "bigint" || type === "number") {
    return <Text span className="mdb-number">{`${value}`}</Text>;
  }

  // TODO: arrays and objects with recursive highlight?

  // array
  if (Array.isArray(value)) {
    return <Text span>{`[${value}]`}</Text>;
  }

  // fallback
  return <Text span>{value.toString()}</Text>;
}
