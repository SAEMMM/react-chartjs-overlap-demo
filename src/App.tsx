import { Box, Container, Divider, Typography } from "@mui/material";

import { OverlapLineChart } from "./components/charts/OverlapLineChart";

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Chart.js Overlapping Chart Demo
      </Typography>

      <Typography color="text.secondary" mb={4}>
        Multiple datasets visualized in a single chart with improved readability
        and interaction.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Overlapping Line Chart
        </Typography>

        <OverlapLineChart />
      </Box>
    </Container>
  );
}

export default App;
