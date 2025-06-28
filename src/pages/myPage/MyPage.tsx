// ✅ src/pages/myPage/MyPage.tsx
// import React from 'react';
import { Box, Typography } from '@mui/material';

const MyPage = () => {
  const token = localStorage.getItem('token');

  return (
    <Box mt={4} px={3}>
      <Typography variant='h4' fontWeight={700} gutterBottom>
        마이페이지
      </Typography>
      {token ? (
        <>
          <Typography variant='body1'>로그인된 상태입니다.</Typography>
          <Typography variant='body2'>토큰: {token}</Typography>
        </>
      ) : (
        <Typography variant='body1'>로그인 정보가 없습니다.</Typography>
      )}
    </Box>
  );
};

export default MyPage;
