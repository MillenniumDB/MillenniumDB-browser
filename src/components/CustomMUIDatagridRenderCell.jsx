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

export default function CustomMUIDatagridRenderCell(
  params,
  targetBlank = true
) {
  const { value } = params;

  if (value === null) {
    return <span>null</span>;
  }

  switch (typeof value) {
    case 'number':
    case 'bigint':
    case 'boolean': {
      return <span>{value.toString()}</span>;
    }
    case 'string': {
      return <span>{`"${value}"`}</span>;
    }
    case 'object': {
      switch (value.constructor) {
        case types.Node: {
          return (
            <Link
              href={`/node/${value.name}`}
              target={targetBlank ? '_blank' : undefined}
            >
              {value.name}
            </Link>
          );
        }
        case types.Edge: {
          return <span>{value.name}</span>;
        }
        case types.DateTime: {
          return <span>{value.toString()}</span>;
        }
        case types.Path: {
          return (
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <PathNode
                targetBlank={targetBlank}
                color="primary"
                name={value.start.name}
              />
              {value.segments.map((segment, segmentIdx) => {
                return (
                  <Fragment key={segmentIdx}>
                    {segment.reverse ? (
                      <ArrowBackIcon fontSize="small" />
                    ) : (
                      <HorizontalRuleIcon fontSize="small" />
                    )}
                    <PathNode
                      targetBlank={targetBlank}
                      color="secondary"
                      name={segment.type.name}
                    />
                    {segment.reverse ? (
                      <HorizontalRuleIcon fontSize="small" />
                    ) : (
                      <ArrowForwardIcon fontSize="small" />
                    )}
                    <PathNode
                      targetBlank={targetBlank}
                      color="primary"
                      name={segment.to.name}
                    />
                  </Fragment>
                );
              })}
            </Box>
          );
        }
        default: {
          return <span>{JSONStringifyObject(value)}</span>;
        }
      }
    }
    default: {
      return <span>{'unknown'}</span>;
    }
  }
}
