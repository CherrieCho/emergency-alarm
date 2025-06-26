import { Box, Button, List, ListItem, styled, Typography } from '@mui/material';
import React from 'react';

// 데이터 불러와 최근 5가지 재난 발생 5곳 보여주기
// 호버시 지역 이름 보여주기
/*
api 데이터 형태
[
  {
    "SN":"205163",
    "create_date":"2023\/09\/16 11:09:49",
    "msg":"[행정안전부] 오늘 11시10분 부산 호우경보, 산사태ㆍ상습침수 등 위험지역 대피, 외출자제 등 안전에 주의바랍니다",
    "location_name":"부산광역시 전체 ",
    "emergency_level":"안전안내",
    "disaster_type":"호우",
    "reg_date":"2023-09-16",
    "mod_date":"2023-09-16"
  },
  ...
]
*/
const StyledMainBox = styled(Box)({
  border: '1px solid',
  borderRadius: '15px',
  padding: '20px',
});
const MessageBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: '16px',
  borderRadius: '16px',
  margin: '12px 0',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  maxWidth: '80%',
}));

// 문자 메세지, 리스트 형식, 표
const MainDisasterDetailList = () => {
  return (
    <Box width={'40vw'} height={'100vh'} padding={'50px'}>
      문자 메세지 처럼?포스티지, 아니면 리스트 형식, 표
      <StyledMainBox>
        <Typography>부산광역시, 🔴🟠🟢</Typography>

        <MessageBox>
          <Typography variant='body1' fontWeight='bold' mb={1}>
            🔴 [행정안전부] 오늘 11시10분 부산 호우경보, 산사태ㆍ상습침수 등
            위험지역 대피, 외출자제 등 안전에 주의바랍니다
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            부산광역시 전체 · 호우 · 안전안내
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            📅 2023-09-16
          </Typography>
        </MessageBox>
        <MessageBox>
          <Typography variant='body1' fontWeight='bold' mb={1}>
            🟠 [행정안전부] 오늘 11시10분 부산 호우경보, 산사태ㆍ상습침수 등
            위험지역 대피, 외출자제 등 안전에 주의바랍니다
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            부산광역시 전체 · 호우 · 안전안내
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            📅 2023-09-16
          </Typography>
        </MessageBox>
        <MessageBox>
          <Typography variant='body1' fontWeight='bold' mb={1}>
            🟢 [행정안전부] 오늘 11시10분 부산 호우경보, 산사태ㆍ상습침수 등
            위험지역 대피, 외출자제 등 안전에 주의바랍니다
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            부산광역시 전체 · 호우 · 안전안내
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            📅 2023-09-16
          </Typography>
        </MessageBox>
        <List>
          지역 안내문자 리스트
          <ListItem>지진</ListItem>
          <ListItem>강수</ListItem>
          <ListItem>교통</ListItem>
        </List>
        <Button variant='contained'>해당지역 재난상세 보기</Button>
      </StyledMainBox>
    </Box>
  );
};

export default MainDisasterDetailList;
