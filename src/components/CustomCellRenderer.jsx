import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box, Chip, Link } from '@mui/material';
import { types } from 'millenniumdb-driver';
import { Fragment } from 'react';
import { JSONStringifyObject } from '../utils/GraphObjectUtils';

function PathNode({ value, color, targetBlank }) {
  if (value === null || value === undefined) {
    return <Chip size="small" label="null" />;
  }

  switch (typeof value) {
    case 'number':
    case 'bigint':
    case 'boolean': {
      return <Chip size="small" label={value.toString()} />;
    }
    case 'string': {
      return <Chip size="small" label={value} />;
    }
    case 'object': {
      switch (value.constructor) {
        case types.DateTime:
        case types.Decimal:
        case types.GraphAnon:
        case types.GraphEdge:
        case types.SimpleDate:
        case types.StringLang:
        case types.StringDatatype:
        case types.Time: {
          return <Chip size="small" label={value.toString()} />;
        }
        case types.GraphNode: {
          const nodeId = value.toString();
          return (
            <Link
              href={`/node/${nodeId}`}
              target={targetBlank ? '_blank' : undefined}
            >
              <Chip color={color} size="small" label={nodeId} />
            </Link>
          );
        }
        case types.IRI: {
          const iriStr = value.toString();
          return (
            <Link href={iriStr} target={targetBlank ? '_blank' : undefined}>
              <Chip color={color} size="small" label={iriStr} />
            </Link>
          );
        }
        default: {
          return <Chip size="small" label={JSONStringifyObject(value)} />;
        }
      }
    }
    default: {
      return <Chip size="small" label="unknown" />;
    }
  }
}

export default function CustomCellRenderer(props, targetBlank = true) {
  const { value } = props;

  if (value === null || value === undefined) {
    return <>null</>;
  }

  switch (typeof value) {
    case 'number':
    case 'bigint':
    case 'boolean': {
      return <>{value.toString()}</>;
    }
    case 'string': {
      return <>{`"${value}"`}</>;
    }
    case 'object': {
      switch (value.constructor) {
        case types.DateTime:
        case types.Decimal:
        case types.GraphAnon:
        case types.GraphEdge:
        case types.SimpleDate:
        case types.StringLang:
        case types.Time: {
          return <>{value.toString()}</>;
        }
        case types.GraphNode: {
          const nodeId = value.toString();
          return (
            <Link
              href={`/node/${nodeId}`}
              target={targetBlank ? '_blank' : undefined}
            >
              {nodeId}
            </Link>
          );
        }
        case types.GraphPath: {
          // TODO: Fix this
          return (
            <Box
              sx={{
                display: 'inline',
                height: '100%',
                '& > *': {
                  verticalAlign: 'middle',
                },
              }}
            >
              <PathNode
                color="primary"
                value={value.start}
                targetBlank={targetBlank}
              />
              {value.segments.map((segment, segmentIdx) => {
                return (
                  <Fragment key={segmentIdx}>
                    {segment.reverse ? (
                      <ArrowBackIcon color="secondary" fontSize="small" />
                    ) : (
                      <HorizontalRuleIcon color="secondary" fontSize="small" />
                    )}
                    <PathNode
                      color="secondary"
                      value={segment.type}
                      targetBlank={targetBlank}
                    />
                    {segment.reverse ? (
                      <HorizontalRuleIcon color="secondary" fontSize="small" />
                    ) : (
                      <ArrowForwardIcon color="secondary" fontSize="small" />
                    )}
                    <PathNode
                      color="primary"
                      value={segment.to}
                      targetBlank={targetBlank}
                    />
                  </Fragment>
                );
              })}
            </Box>
          );
        }
        case types.IRI: {
          const iriStr = value.toString();
          return (
            <Link href={iriStr} target="_blank">
              {`<${iriStr}>`}
            </Link>
          );
        }
        case types.StringDatatype: {
          return (
            <>
              {`"${value.str}"^^`}
              <Link href={value.datatype.toString()} target="_blank">
                {`<${value.datatype.toString()}>`}
              </Link>
            </>
          );
        }
        default: {
          return <>{JSONStringifyObject(value)}</>;
        }
      }
    }
    default: {
      return <>{'unknown'}</>;
    }
  }
}
