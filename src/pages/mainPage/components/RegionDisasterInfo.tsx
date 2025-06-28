import { Box, styled, Typography, useTheme } from '@mui/material';
import { regionMap } from './config/regionMap';

const RegionBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  padding: '5px',
  gap: '5px',
  rowGap: '30px',
  gridTemplateColumns: 'repeat(6, 1fr)',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

const RegionCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  fontFamily: theme.typography.fontFamily,
  width: '150px',
  height: '180px',
  padding: '10px',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid rgba(0,0,0,0.1)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  img: {
    width: '100%',
    height: '100px',
    objectFit: 'contain',
    padding: '10px',
    borderRadius: '10px',
    transition: 'transform 0.2s ease',
  },
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#f5f5f5',
    img: {
      transform: 'translateY(-5px)',
    },
  },
}));

const RegionDisasterInfo = () => {
  const theme = useTheme();

  return (
    <Box flex={2} padding='40px'>
      <Typography
        variant='h1'
        sx={{
          marginBottom: '2em',
        }}
      >
        지역별 정보조회
      </Typography>
      <RegionBox>
        {regionMap.map((region) => (
          <RegionCard key={region.id}>
            <img src={region.src} alt={region.name} />
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              width='100%'
              marginTop='10px'
              height='30%'
            >
              <Typography
                variant='body1'
                sx={{
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                {region.name}
              </Typography>
            </Box>
          </RegionCard>
        ))}
      </RegionBox>
    </Box>
  );
};

export default RegionDisasterInfo;
