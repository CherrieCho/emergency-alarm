import { Box, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { styled } from '@mui/system';

const AlertCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '12px',
  padding: '16px',
  // marginBottom: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '300px',
}));

const AlertHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.palette.text.primary,
  fontWeight: 600,
}));

const DisasterSlide = () => {
  const alerts = Array(2).fill({
    region: '창녕군',
    time: '2025/06/25 20:33:50',
    message:
      '오늘 19:18 창녕군 영산휴게소(하행선)에서 발생한 화학사고의 대응이 완료되었습니다. 휴게소 이용객 및 인근 주민은 일상생활로 돌아가시기 바랍니다.',
  });
  return (
    <>
      DisasterSlide
      <Box flex={1} display='flex' alignItems='center' justifyContent='center'>
        <Box
          display='grid'
          gridTemplateColumns='repeat(2, 1fr)'
          padding='10px'
          justifyItems='center'
          width='60%'
        >
          {alerts.map((alert, index) => (
            <AlertCard key={index}>
              <AlertHeader>
                <WarningIcon />
                <Typography variant='subtitle1'>[{alert.region}]</Typography>
              </AlertHeader>
              <Typography variant='body1'>{alert.message}</Typography>
              <Typography variant='subtitle1'>
                발송일시: {alert.time}
              </Typography>
            </AlertCard>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default DisasterSlide;
