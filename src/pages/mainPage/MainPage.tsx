import React from 'react';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import useSafetyDisasterMessages from '../../hooks/useDisasterMessages';

const MainPage = () => {
  const { data, isLoading, error } = useSafetyDisasterMessages();

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">에러 발생</Typography>;

  return (
    <Box p={4}>
      <Typography variant="h1" gutterBottom>
        긴급 재난 문자
      </Typography>

      {data?.body?.map((item: any, index: number) => (
        <Paper key={item.SN ?? index} sx={{ mb: 2, p: 2 }}>
          <Typography variant="h2" gutterBottom>
            {item.RCPTN_RGN_NM} {/* 지역명 */}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {item.MSG_CN} {/* 메시지 본문 */}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {item.CRT_DT} {/* 수신일시 */}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default MainPage;
