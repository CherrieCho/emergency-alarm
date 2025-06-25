// src/components/KoreaMap.tsx
import { koreaPaths } from './koreaMapPathData'; // src/map.ts or map.tsx 파일
import { Box, styled, Typography } from '@mui/material';

const StyledBox = styled(Box)({
  width: '80vw',
  height: '80vh',
});
const StyledPath = styled('path')({
  cursor: 'pointer',
  fill: '#ddd',
  stroke: '#333',
  strokeWidth: 0.5,
  transition: 'all 0.2s ease-in-out',
  transformOrigin: 'center center',
  // transformBox: 'fill-box',
  '&:hover': {
    fill: '#f66',
    transform: 'scale(1.05)',
  },
});

const KoreaMap = () => {
  return (
    <StyledBox>
      <Typography variant='h4'>대한민국 시도별 지도</Typography>
      <svg viewBox='0 0 524 631' width='100%' height='auto'>
        {koreaPaths.map((region) => (
          <StyledPath
            key={region.id}
            d={region.path}
            onMouseEnter={() => console.log(region.name)}
            onClick={() => alert(region.name)}
          />
        ))}
      </svg>
    </StyledBox>
  );
};

export default KoreaMap;
