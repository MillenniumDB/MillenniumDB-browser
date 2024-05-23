import { types } from 'millenniumdb-driver';

function JSONStringifyObject(obj) {
  return JSON.stringify(
    obj,
    (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
  );
}

export default function CustomMUIDatagridValueFormatter(value) {
  if (value === null) {
    return 'null';
  }

  switch (typeof value) {
    case 'number':
    case 'bigint':
    case 'boolean':
    case 'string': {
      return value;
    }
    case 'object': {
      switch (value.constructor) {
        case types.Node:
        case types.Edge: {
          return value.name;
        }
        case types.DateTime: {
          return value.toString();
        }
        case types.Path: {
          let res = `(${value.start.name})`;
          value.segments.forEach((segment) => {
            if (segment.reverse) {
              res += `<-[${segment.type.name}]-(${segment.to.name})`;
            } else {
              res += `-[${segment.type.name}]->(${segment.to.name})`;
            }
          });
          return res;
        }
        default:
          return JSONStringifyObject(value);
      }
    }
    default:
      return 'unknown';
  }
}
