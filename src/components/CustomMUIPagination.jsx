import { Pagination } from '@mui/material';
import {
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';

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
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1);
      }}
    />
  );
}

export default function CustomMUIPagination(props) {
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
