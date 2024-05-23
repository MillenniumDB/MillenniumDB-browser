import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Button } from '@mui/material';
import { GridToolbarContainer, useGridApiContext } from '@mui/x-data-grid';

export default function CustomMUIDatagridToolbar({ loading }) {
  const apiRef = useGridApiContext();

  return (
    <GridToolbarContainer sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        disabled={loading || apiRef.current.getRowsCount() === 0}
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
