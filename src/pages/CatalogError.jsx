import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CatalogError() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ pt: 8, pb: 4 }}>
      <Stack sx={{ gap: 2 }}>
        <Typography variant="h3" color="error" textAlign="center">
          {'Connection Error'}
        </Typography>
        <Typography variant="body1" textAlign="justify">
          {`Could not fetch the remote MillenniumDB's catalog. Please check the connection to the server at "${
            import.meta.env.VITE_MDB_SERVER_URL
          }" and try again.`}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Button variant="contained" onClick={() => navigate(0)}>
            {'Try again'}
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
