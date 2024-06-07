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
function PathNode({ color, name }) {
  return (
    <Link href={`/node/${name}`} target="_blank">
      <Chip color={color} size="small" label={name} />
    </Link>
  );
}

export default function CustomCellRenderer(props) {
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
        case types.Node: {
          return (
            <Link href={`/node/${value.name}`} target="_blank">
              {value.name}
            </Link>
          );
        }
        case types.Edge: {
          return <>{value.name}</>;
        }
        case types.DateTime: {
          return <>{value.toString()}</>;
        }
        case types.Path: {
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
              <PathNode color="primary" name={value.start.name} />
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
                    <PathNode color="secondary" name={segment.type.name} />
                    {segment.reverse ? (
                      <HorizontalRuleIcon fontSize="small" />
                    ) : (
                      <ArrowForwardIcon fontSize="small" />
                    )}
                    <PathNode color="primary" name={segment.to.name} />
                  </Fragment>
                );
              })}
            </Box>
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
