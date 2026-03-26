import { Box, Container, Divider, Stack, Typography } from '@mui/material';

import { OverlapBarChart } from './components/charts/OverlapBarChart';
import { ProgressScatterChart } from './components/charts/ProgressScatterChart';

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={6}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Chart.js Overlap Demo
          </Typography>
          <Typography color="text.secondary">
            블로그 포스팅 기반으로, 겹치는 막대 그래프와 진행률 기반 scatter 그래프를
            React + Chart.js로 재구성한 데모입니다.
          </Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" gutterBottom>
            1. Overlap Bar Chart
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            현재 물량과 전체/추정 물량을 같은 stack 그룹으로 겹쳐 표현합니다.
          </Typography>
          <OverlapBarChart />
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            2. Progress Scatter Chart
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            진행률 0%부터 시작해, 현재 시점까지는 실선으로 표시하고 이후 구간은
            점선으로 이어지도록 데이터를 가공했습니다. 실행 예산은 최대값 기준의
            수평 기준선으로 표현합니다.
          </Typography>
          <ProgressScatterChart />
        </Box>
      </Stack>
    </Container>
  );
}

export default App;