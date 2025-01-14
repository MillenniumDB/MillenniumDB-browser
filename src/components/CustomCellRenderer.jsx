import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box, Chip, Link, Tooltip } from '@mui/material';
import { types } from 'millenniumdb-driver';
import { useRef, useState, Fragment, useEffect } from 'react';
import { JSONStringifyObject } from '../utils/GraphObjectUtils';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';

const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
});

function PathNode({ value, color, onObjectClick, onIriClick }) {
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
            <Link onClick={() => onObjectClick(nodeId)}>
              <Chip color={color} size="small" label={nodeId} />
            </Link>
          );
        }
        case types.IRI: {
          const iriStr = value.toString();
          return (
            <Link onClick={() => onIriClick(value)}>
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

export default function CustomCellRenderer(props, onObjectClick, onIriClick) {
  const { value } = props;

  const wrapper = useRef(null);
  const [tooltip, setTooltip] = useState(false);
  const [cellContent, setCellContent] = useState(null);

  useEffect(() => {
    switch (typeof value) {
      case 'number':
      case 'bigint':
      case 'boolean': {
        return setCellContent(<>{value.toString()}</>);
      }
      case 'string': {
        return setCellContent(`"${value}"`);
      }
      case 'object': {
        switch (value.constructor) {
          case types.DateTime:
          case types.Decimal:
          case types.GraphAnon:
          case types.SimpleDate:
          case types.StringLang:
          case types.Time: {
            return setCellContent(<>{value.toString()}</>);
          }
          case types.GraphNode: {
            const nodeId = value.toString();
            return setCellContent(
              <Link onClick={() => onObjectClick(value)}>
                {nodeId}
              </Link>
            );
          }
          case types.GraphEdge: {
            return setCellContent(
              <Link color="secondary" onClick={() => onObjectClick(value)}>
                {value.toString()}
              </Link>
            );
          }
          case types.GraphPath: {
            return setCellContent(
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
                  onObjectClick={() => onObjectClick(value.start)}
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
                        onObjectClick={() => onObjectClick(segment.type)}
                      />
                      {segment.reverse ? (
                        <HorizontalRuleIcon color="secondary" fontSize="small" />
                      ) : (
                        <ArrowForwardIcon color="secondary" fontSize="small" />
                      )}
                      <PathNode
                        color="primary"
                        value={segment.to}
                        onObjectClick={() => onObjectClick(segment.to)}
                      />
                    </Fragment>
                  );
                })}
              </Box>
            );
          }
          case types.IRI: {
            const iriStr = value.toString();
            return setCellContent(<Link onClick={() => onIriClick(value)}>{`<${iriStr}>`}</Link>);
          }
          case types.StringDatatype: {
            return setCellContent(
              <>
                {`"${value.str}"^^`}
                <Link
                  onClick={(e) => e.stopPropagation()}
                  href={value.datatype.toString()}
                  target="_blank"
                >
                  {`<${value.datatype.toString()}>`}
                </Link>
              </>
            );
          }
          default: {
            return setCellContent(<>{JSONStringifyObject(value)}</>);
          }
        }
      }
      default: {
        return setCellContent(<>{'unknown'}</>);
      }
    }
  }, [value, onObjectClick, onIriClick]);

  const tooltipProps = {
    title: cellContent,
    open: tooltip,
    onOpen: () => {
      setTooltip(wrapper.current.scrollWidth > wrapper.current.clientWidth);
    },
    onClose: () => setTooltip(false),
    enterDelay: 600,
    enterNextDelay: 400,
    placement: 'bottom-start',
    slotProps: {
      popper: { modifiers: [{ name: 'offset', options: { offset: [0, -14] } }] },
    },
  };

  return value.constructor === types.GraphPath ? (
    <NoMaxWidthTooltip {...tooltipProps}>
      <Box
        ref={wrapper}
        sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
      >
        {cellContent}
      </Box>
    </NoMaxWidthTooltip>
  ) : (
    <Tooltip {...tooltipProps}>
      <Box
        ref={wrapper}
        sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
      >
        {cellContent}
      </Box>
    </Tooltip>
  );
}
