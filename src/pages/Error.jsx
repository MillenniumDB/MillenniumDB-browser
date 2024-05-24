import { useRouteError } from 'react-router-dom';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

export default function Error() {
  const response = useRouteError();
  return (
    <Container maxWidth="sm" sx={{ pt: 8, pb: 4 }}>
      <Stack sx={{ gap: 2 }}>
        <Typography variant="h3" color="error" textAlign="center">
          {response.status}
        </Typography>
        <Typography variant="body1" textAlign="justify">
          {response.data}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Button href="/" variant="contained">
            Go home
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
