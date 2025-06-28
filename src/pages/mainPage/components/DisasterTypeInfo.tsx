import { Box, styled, Typography, useTheme } from '@mui/material';

// fontawesome 아이콘 통일

const DisasterTypeBox = styled(Box)(({ theme }) => ({
  display: 'grid',

  gap: '10px',
  gridTemplateColumns: 'repeat(12, 1fr)',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

const DisasterTypeInfo = () => {
  const theme = useTheme();
  return (
    <Box flex={2} padding='40px'>
      <Typography
        mb={2}
        sx={{
          fontFamily: theme.typography.fontFamily,
          fontWeight: 'bold',
          fontSize: '1.3rem',
        }}
      >
        재난별 정보조회
      </Typography>
      <DisasterTypeBox>
        <Box
          sx={{
            width: '100px',
            height: '100px',
            border: '1px solid rgba(0,0,0,0.4)',
            padding: '10px',
          }}
        >
          태풍 아이콘
          <Typography>태풍</Typography>
        </Box>
        <Box
          sx={{
            width: '100px',
            height: '100px',
            border: '1px solid rgba(0,0,0,0.4)',
            padding: '10px',
          }}
        >
          강수 아이콘
          <Typography>강수</Typography>
        </Box>
        <Box
          sx={{
            width: '100px',
            height: '100px',
            border: '1px solid rgba(0,0,0,0.4)',
            padding: '10px',
          }}
        >
          강수 아이콘
          <Typography>강수</Typography>
        </Box>
        <Box
          sx={{
            width: '100px',
            height: '100px',
            border: '1px solid rgba(0,0,0,0.4)',
            padding: '10px',
          }}
        >
          강수 아이콘
          <Typography>강수</Typography>
        </Box>
      </DisasterTypeBox>
    </Box>
  );
};

export default DisasterTypeInfo;
