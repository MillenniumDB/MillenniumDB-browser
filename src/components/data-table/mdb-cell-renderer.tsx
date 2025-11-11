import classes from "./mdb-cell-renderer.module.css";

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
} from "@millenniumdb/driver";
import type { JSX } from "react";
import React from "react";

export const MDBCellRenderer = React.memo(({ value }: { value: unknown }) => {
  return renderJsxInternal(value);
});

const renderJsxInternal = (value: unknown): JSX.Element | null => {
  if (value === null || value === undefined) {
    return <span className={classes.null}>{"NULL"}</span>;
  }

  // nodes
  if (value instanceof GraphNode) {
    return <span className={classes.node}>{`${value}`}</span>;
  } else if (value instanceof GraphAnon) {
    return <span className={classes.node}>{`${value}`}</span>;
  }

  // edge
  if (value instanceof GraphEdge) {
    return <span className={classes.edge}>{`${value}`}</span>;
  }

  // iri
  if (value instanceof IRI) {
    const { iri } = value;
    return (
      <a className={classes.iri} href={iri} target="_blank">
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
        <span className={classes.string}>{`"${str}"`}</span>
        <span>{"^^"}</span>
        <a className={classes.iri} href={iri} target="_blank">
          {`<${iri}>`}
        </a>
      </span>
    );
  } else if (value instanceof StringLang) {
    const { str, lang } = value;
    return (
      <span>
        <span className={classes.string}>{`"${str}"`}</span>
        <span className={classes.langtag}>{`@${lang}`}</span>
      </span>
    );
  }

  // date
  if (
    value instanceof SimpleDate ||
    value instanceof DateTime ||
    value instanceof Time
  ) {
    return <span className={classes.string}>{`${value}`}</span>;
  } else if (value instanceof Decimal) {
    return <span className={classes.numeric}>{`${value}`}</span>;
  }

  // path
  if (value instanceof GraphPath) {
    return (
      <span>
        <span className={classes.function}>{"Path"}</span>
        <span>{`<${value.length}>`}</span>
      </span>
    );
  }

  // builtin
  const type = typeof value;
  if (type === "string") {
    return <span className={classes.string}>{`"${value}"`}</span>;
  } else if (type === "boolean") {
    return <span className={classes.boolean}>{`${value}`}</span>;
  } else if (type === "bigint" || type === "number") {
    return <span className={classes.numeric}>{`${value}`}</span>;
  }

  // tensor
  if (value instanceof Float32Array || value instanceof Float64Array) {
    return <span className={classes.numeric}>{`[${value.join(" ")}]`}</span>;
  }

  // array
  if (Array.isArray(value)) {
    if (value.length === 0) return <span>{"[]"}</span>;
    return (
      <span>
        {"["}
        {value.map((v, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <span>{", "}</span>}
            <MDBCellRenderer value={v} />
          </React.Fragment>
        ))}
        {"]"}
      </span>
    );
  }

  // object fallback
  if (typeof value === "object") {
    const entries = Object.entries(value);
    if (entries.length === 0) return <span>{"{}"}</span>;

    return (
      <span>
        {"{"}
        {entries.map(([k, v], idx) => (
          <React.Fragment key={k}>
            {idx > 0 && <span>{", "}</span>}
            <span>{`${k}:`}</span>
            <MDBCellRenderer value={v} />
          </React.Fragment>
        ))}
        {"}"}
      </span>
    );
  }

  return null;
};
