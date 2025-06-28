import { Box, styled, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { regionMap } from './config/regionMap';
import { useState } from 'react';

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
  '.star-icon': {
    opacity: 0,
    transition: 'opacity 0.2s ease',
  },
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#f5f5f5',
    img: {
      transform: 'translateY(-5px)',
    },
    '.star-icon': {
      opacity: 1,
    },
  },
}));

/**
 * backgroundColor: theme.palette.background.default,
  fontFamily: theme.typography.fontFamily,
 */

const RegionDisasterInfo = () => {
  // 즐겨찾기 기능 DB 로 관리? 아니면 로컬?
  // 데이터 가져올때 즐겨찾기 true 면 앞으로 보내는 로직 만들기
  const sortedRegions = regionMap.sort(
    (a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0)
  );
  const [regions, setRegions] = useState(sortedRegions);
  const theme = useTheme();

  const handleFavoriteToggle = (id: number) => {
    const updatedRegions = regions.map((region) =>
      region.id === id ? { ...region, isFavorite: !region.isFavorite } : region
    );
    updatedRegions.sort(
      (a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0)
    );

    setRegions(updatedRegions);
  };

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
        {regions.map((regin) => (
          <motion.div layout transition={{ duration: 0.4 }} key={regin.id}>
            <RegionCard>
              <img src={regin.src} />
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                width='100%'
                marginTop='10px'
                height='30%'
              >
                <Typography
                  variant='body1'
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    marginLeft: '5px',
                  }}
                >
                  {regin.name}
                </Typography>
                {regin.isFavorite ? (
                  <StarIcon
                    className='star-icon'
                    onClick={() => {
                      handleFavoriteToggle(regin.id);
                    }}
                  />
                ) : (
                  <StarBorderIcon
                    className='star-icon'
                    onClick={() => {
                      handleFavoriteToggle(regin.id);
                    }}
                  />
                )}
              </Box>
            </RegionCard>
          </motion.div>
        ))}
      </RegionBox>
    </Box>
  );
};

export default RegionDisasterInfo;
