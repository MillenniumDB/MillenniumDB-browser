import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Button } from '@mui/material';
import { GridToolbarContainer, useGridApiContext } from '@mui/x-data-grid';
import { useThemeContext } from '../context/ThemeContext';

export default function CustomMUIDatagridToolbar({ loading }) {
  const apiRef = useGridApiContext();
  const themeContext = useThemeContext();

  return (
    <GridToolbarContainer
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        borderBottom: 1,
        pb: 0.5,
        borderColor: themeContext.darkMode
          ? 'rgba(81,81,81,1)'
          : 'rgba(224,224,224,1)',
      }}
    >
      <Button
        disabled={loading || apiRef.current.getRowsCount() === 0}
        color="primary"
        size="small"
        variant="text"
        startIcon={<SaveAltIcon />}
        onClick={() =>
          apiRef.current.exportDataAsCsv({
            fileName: `millenniumdb-${Date.now()}`,
            utf8WithBom: true,
          })
        }
      >
        Export as CSV
      </Button>
    </GridToolbarContainer>
  );
}
