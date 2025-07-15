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

const renderJsx = (value: unknown) => {
  if (value === null || value === undefined) {
    return <span className="mdb-null">{"NULL"}</span>;
  }

  // nodes
  if (value instanceof GraphNode) {
    return <span className="mdb-node">{`${value}`}</span>;
  } else if (value instanceof GraphAnon) {
    return <span className="mdb-node">{`${value}`}</span>;
  }

  // edge
  if (value instanceof GraphEdge) {
    return <span className="mdb-edge">{`${value}`}</span>;
  }

  // iri
  if (value instanceof IRI) {
    const { iri } = value;
    return (
      <a className="mdb-iri" href={iri} target="_blank">
        {`<${iri}>`}
      </a>
    );
  }

  // rdf literal
  if (value instanceof StringDatatype) {
    const { str, datatype } = value;
    const { iri } = datatype;
    return (
      <span>
        <span className="mdb-string">{`"${str}"`}</span>
        <span className="mdb-punctuation">{"^^"}</span>
        <a className="mdb-iri" href={iri} target="_blank">
          {`<${iri}>`}
        </a>
      </span>
    );
  } else if (value instanceof StringLang) {
    const { str, lang } = value;
    return (
      <span>
        <span className="mdb-string">{`"${str}"`}</span>
        <span className="mdb-language">{`@${lang}`}</span>
      </span>
    );
  }

  // date
  if (
    value instanceof SimpleDate ||
    value instanceof DateTime ||
    value instanceof Time
  ) {
    return <span className="mdb-string">{`${value}`}</span>;
  } else if (value instanceof Decimal) {
    return <span className="mdb-numeric">{`${value}`}</span>;
  }

  // path
  if (value instanceof GraphPath) {
    // TODO: paths
    return null;
  }

  // builtin
  const type = typeof value;
  if (type === "string") {
    return <span className="mdb-string">{`"${value}"`}</span>;
  } else if (type === "boolean") {
    return <span className="mdb-boolean">{`${value}`}</span>;
  } else if (type === "bigint" || type === "number") {
    return <span className="mdb-numeric">{`${value}`}</span>;
  }

  // array
  if (Array.isArray(value)) {
    return <span>{`List<${value.length}>`}</span>;
  }

  // fallback
  const object = value as object;
  return <span>{`Dict<${Object.keys(object).length}>`}</span>;
};

export function MDBCellRenderer({ value }: CustomCellRendererProps) {
  return renderJsx(value);
}
