import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Box, Button, Chip, Link, Pagination, Typography } from '@mui/material';
import {
  DataGrid,
  gridPageCountSelector,
  GridPagination,
  GridToolbarContainer,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { types } from 'millenniumdb-driver';
import { Fragment } from 'react';

// TODO: Custom component for better performance?

/**
 * JSON Stringify that handles special cases like BigInt
 *
 * @param {object} obj the object to stringify
 * @returns the stringified object
 */
function JSONStringifyObject(obj) {
  return JSON.stringify(
    obj,
    (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
  );
}

/**
 * Format the value to a string for the CSV export
 *
 * @param {any} value the value to format
 * @returns the string representation of the value
 */
function valueFormatter(value) {
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

/**
 * Render a cell in the DataGrid
 *
 * @param {any} params
 * @returns the rendered cell
 */
function renderCell(params) {
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
            <Link href={`/node/${value.name}`} target="_blank">
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
              <Link href={`/node/${value.start.name}`} target="_blank">
                <Chip color="primary" size="small" label={value.start.name} />
              </Link>
              {value.segments.map((segment, segmentIdx) => (
                <Fragment key={segmentIdx}>
                  {segment.reverse ? (
                    <ArrowBackIcon fontSize="small" />
                  ) : (
                    <HorizontalRuleIcon fontSize="small" />
                  )}
                  <Link href={`/node/${segment.type.name}`} target="_blank">
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
                  <Link href={`/node/${segment.to.name}`} target="_blank">
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

function CustomActions({ page, onPageChange, className }) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <Pagination
      sx={{
        '& .MuiPaginationItem-root': { borderRadius: 0 },
      }}
      color="primary"
      shape="rounded"
      // variant="outlined"
      className={className}
      page={page + 1}
      count={pageCount}
      onChange={(event, newPage) => onPageChange(event, newPage - 1)}
    />
  );
}

function CustomPagination(props) {
  return (
    <GridPagination
      sx={{
        userSelect: 'none',
        '& .MuiPaginationItem-root': { borderRadius: 0 },
      }}
      ActionsComponent={CustomActions}
      {...props}
    />
  );
}

function CustomNoRowsOverlay() {
  return (
    <Box
      sx={{
        userSelect: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Typography variant="h6">No results</Typography>
    </Box>
  );
}

function CustomToolbar({ running }) {
  const apiRef = useGridApiContext();

  return (
    <GridToolbarContainer
      sx={{ display: 'flex', justifyContent: 'flex-end'}}
    >
      <Button
        disabled={running || apiRef.current.getRowsCount() === 0}
        color="primary"
        size="small"
        variant="text"
        startIcon={<SaveAltIcon />}
        onClick={() =>
          apiRef.current.exportDataAsCsv({
            fileName: `millenniumdb-${Date.now()}`,
            utf88WithBom: true,
          })
        }
      >
        Export as CSV
      </Button>
    </GridToolbarContainer>
  );
}

export default function Results({ columns, rows, running }) {
  return (
    <DataGrid
      slots={{
        toolbar: CustomToolbar,
        pagination: CustomPagination,
        noRowsOverlay: CustomNoRowsOverlay,
      }}
      slotProps={{
        toolbar: { running },
      }}
      disableColumnMenu
      disableColumnSorting
      disableRowSelectionOnClick
      autoPageSize={true}
      sx={{
        borderRadius: 0,
      }}
      rows={rows}
      columns={columns.map((column) => ({
        ...column,
        renderCell: (params) => renderCell(params),
        valueFormatter: (value) => valueFormatter(value),
        flex: 1,
      }))}
    />
  );
}
