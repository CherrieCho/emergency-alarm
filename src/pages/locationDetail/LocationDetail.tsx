import { Box, Typography, Button, styled, useTheme } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import WarningIcon from '@mui/icons-material/Warning';

const Container = styled(Box)(({ theme }) => ({
  padding: '16px',
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: theme.palette.background.default,
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '16px',
  color: theme.palette.text.primary,
}));

const Tabs = styled(Box)({
  display: 'flex',
  gap: '8px',
  marginBottom: '24px',
});

const TabButton = styled(Button)<{ selected?: boolean }>(
  ({ selected, theme }) => ({
    borderRadius: '9999px',
    color: 'black',
    border: `1px solid ${selected ? theme.palette.primary.main : theme.palette.grey[300]}`,
    padding: '6px 20px',
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  })
);

const AlertCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

const AlertHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.palette.text.primary,
  fontWeight: 600,
}));

const LocationDetail = () => {
  const theme = useTheme();
  const alerts = Array(6).fill({
    region: '창녕군',
    time: '2025/06/25 20:33:50',
    message:
      '오늘 19:18 창녕군 영산휴게소(하행선)에서 발생한 화학사고의 대응이 완료되었습니다. 휴게소 이용객 및 인근 주민은 일상생활로 돌아가시기 바랍니다.',
  });

  return (
    <Container>
      <Header>
        <RoomIcon />
        <Typography variant='h1'>경상북도</Typography>
      </Header>

      <Tabs>
        <TabButton>카테고리</TabButton>
        <TabButton selected>선택됨</TabButton>
        <TabButton>카테고리</TabButton>
      </Tabs>

      <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gap='16px'>
        {alerts.map((alert, index) => (
          <AlertCard key={index}>
            <AlertHeader>
              <WarningIcon />
              <Typography variant='subtitle1'>[{alert.region}]</Typography>
            </AlertHeader>
            <Typography variant='body1'>{alert.message}</Typography>
            <Typography variant='subtitle1'>발송일시: {alert.time}</Typography>
          </AlertCard>
        ))}
      </Box>
    </Container>
  );
};

export default LocationDetail;
