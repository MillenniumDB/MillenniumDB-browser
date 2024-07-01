import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box, Chip, Link } from '@mui/material';
import { types } from 'millenniumdb-driver';
import { Fragment } from 'react';

function JSONStringifyObject(obj) {
  return JSON.stringify(
    obj,
    (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
  );
}
function PathNode({ color, name, targetBlank }) {
  return (
    <Link href={`/node/${name}`} target={targetBlank ? '_blank' : undefined}>
      <Chip color={color} size="small" label={name} />
    </Link>
  );
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
        case types.DateTime: {
          return <>{value.toString()}</>;
        }
        case types.Decimal: {
          return <>{value.toString()}</>;
        }
        case types.GraphAnon: {
          return <>{value.toString()}</>
        }
        case types.GraphEdge: {
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
                name={value.start.toString()}
                targetBlank={targetBlank}
              />
              {value.segments.map((segment, segmentIdx) => {
                return (
                  <Fragment key={segmentIdx}>
                    {segment.reverse ? (
                      <ArrowBackIcon fontSize="small" sx={{ margin: 'auto' }} />
                    ) : (
                      <HorizontalRuleIcon
                        fontSize="small"
                        sx={{ margin: 'auto' }}
                      />
                    )}
                    <PathNode
                      color="secondary"
                      name={segment.type.toString()}
                      targetBlank={targetBlank}
                    />
                    {segment.reverse ? (
                      <HorizontalRuleIcon fontSize="small" />
                    ) : (
                      <ArrowForwardIcon fontSize="small" />
                    )}
                    <PathNode
                      color="primary"
                      name={segment.to.toString()}
                      targetBlank={targetBlank}
                    />
                  </Fragment>
                );
              })}
            </Box>
          );
        }
        case types.IRI: {
          const iri = value.toString();
          return (
            <Link href={iri} target="_blank">
              {`<${iri}>`}
            </Link>
          );
        }
        case types.SimpleDate: {
          return <>{value.toString()}</>;
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
        case types.StringLang: {
          return <>{value.toString()}</>;
        }
        case types.Time: {
          return <>{value.toString()}</>;
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
