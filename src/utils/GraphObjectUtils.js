import { types } from 'millenniumdb-driver';

export const JSONStringifyObject = (obj) => {
  return JSON.stringify(
    obj,
    (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
  );
};

export const graphObjectToTypeString = (value) => {
  if (value === null || value === undefined) return 'Null';

  switch (typeof value) {
    case 'number':
    case 'bigint':
      return 'Numeric';
    case 'boolean':
      return 'Boolean';
    case 'string':
      return 'String';
    case 'object': {
      switch (value.constructor) {
        case types.DateTime:
          return 'DateTime';
        case types.Decimal:
          return 'Decimal';
        case types.GraphAnon:
          return 'Anonymous Node';
        case types.GraphEdge:
          return 'Edge';
        case types.SimpleDate:
          return 'Date';
        case types.StringLang:
          return 'String with Language Tag';
        case types.StringDatatype:
          return 'String with Datatype';
        case types.Time:
          return 'Time';
        case types.GraphNode:
          return 'Named Node';
        case types.IRI:
          return 'IRI';
        default:
          return 'Unknown type';
      }
    }
    default:
      return 'Unknown type';
  }
};

export const graphObjectToString = (value) => {
  if (value === null || value === undefined) return 'null';

  switch (typeof value) {
    case 'number':
    case 'bigint':
      return value.toString();
    case 'boolean':
      return value.toString();
    case 'string':
      return `"${value}"`;
    case 'object': {
      switch (value.constructor) {
        case types.DateTime:
          return value.toString();
        case types.Decimal:
          return value.toString();
        case types.GraphAnon:
          return value.toString();
        case types.GraphEdge:
          return value.toString();
        case types.SimpleDate:
          return value.toString();
        case types.StringLang:
          return value.toString();
        case types.StringDatatype:
          return value.toString();
        case types.Time:
          return value.toString();
        case types.GraphNode:
          return value.toString();
        case types.IRI:
          return value.toString();
        default:
          return JSONStringifyObject(value);
      }
    }
    default:
      return 'unknown';
  }
};
