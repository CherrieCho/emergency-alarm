import { Box, Typography, styled } from '@mui/material';

const Bubble = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: '16px',
  borderRadius: '16px',
  margin: '12px 0',
  maxWidth: '70%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '20px',
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: `10px solid ${theme.palette.secondary.main}`,
  },
}));

const SpeechBubble = () => {
  const dumy = {
    message: '[행정안전부] 오늘 11시10분 부산 호우경보...',
    region: '부산광역시',
    subInfo: '호우 · 안전안내 · 2023-09-16',
  };
  return (
    <Bubble>
      {dumy.region && (
        <Typography fontWeight='bold' mb={1}>
          {dumy.region}
        </Typography>
      )}
      <Typography variant='body1'>{dumy.message}</Typography>

      <Typography variant='caption' color='text.secondary'>
        {dumy.subInfo}
      </Typography>
    </Bubble>
  );
};

export default SpeechBubble;
