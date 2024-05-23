import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box, Chip, Link } from '@mui/material';
import { types } from 'millenniumdb-driver';
import Fragment from 'react';

function JSONStringifyObject(obj) {
  return JSON.stringify(
    obj,
    (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
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
    // TODO: fix path
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
              <Link
                href={`/node/${value.start.name}`}
                target={targetBlank ? '_blank' : undefined}
              >
                <Chip color="primary" size="small" label={value.start.name} />
              </Link>
              {value.segments.map((segment, segmentIdx) => (
                <Fragment key={segmentIdx}>
                  {segment.reverse ? (
                    <ArrowBackIcon fontSize="small" />
                  ) : (
                    <HorizontalRuleIcon fontSize="small" />
                  )}
                  <Link
                    href={`/node/${segment.type.name}`}
                    target={targetBlank ? '_blank' : undefined}
                  >
                    <Chip
                      color="secondary"
                      size="small"
                      label={segment.type.name}
                    />
                  </Link>
                  {segment.reverse ? (
                    <HorizontalRuleIcon fontSize="small" />
                  ) : (
                    <ArrowForwardIcon fontSize="small" />
                  )}
                  <Link
                    href={`/node/${segment.to.name}`}
                    target={targetBlank ? '_blank' : undefined}
                  >
                    <Chip
                      color="primary"
                      size="small"
                      label={segment.to.name}
                    />
                  </Link>
                </Fragment>
              ))}
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
