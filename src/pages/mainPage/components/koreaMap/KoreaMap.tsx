import { useState } from 'react';
import { koreaPaths } from './koreaMapPathData';
import { Box, styled, Typography, type Theme } from '@mui/material';

interface StyledPathProps {
  isHovered: boolean;
  theme?: Theme;
}

const StyledBox = styled(Box)({
  width: '60vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  marginLeft: '100px',
});

const StyledPath = styled('path')<StyledPathProps>(({ isHovered, theme }) => ({
  cursor: 'pointer',
  //fill: theme.palette.grey[300],
  fill: theme.palette.secondary.main,
  stroke: '#333',
  strokeWidth: 0.5,
  transition: 'all 0.2s ease-in-out',
  transformOrigin: 'center center',
  transformBox: 'fill-box',
  boxShadow: '4px 4px 10px 10px rgba(0, 0, 0, 0.3)',
  filter: isHovered ? 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' : 'none',
  ...(isHovered && {
    fill: '#f66',
    // transform: 'scale(1.05)',
  }),
}));

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

interface PropsType {
  handleRegionClick: (region: string) => void;
}

const KoreaMap = ({ handleRegionClick }: PropsType) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const sortedPaths = [
    ...koreaPaths.filter((r) => r.id !== hoveredId),
    ...koreaPaths.filter((r) => r.id === hoveredId),
  ];
  return (
    <StyledBox>
      {/* <Typography variant='h4'>대한민국 시도별 지도</Typography> */}
      <svg
        viewBox='0 0 524 631'
        width='80%'
        style={{ height: 'auto', display: 'block' }}
      >
        {sortedPaths.map((region) => (
          <StyledPath
            key={region.id}
            d={region.path}
            // onMouseEnter={() => console.log(region.name)}
            onClick={() => handleRegionClick(region.name)}
            isHovered={region.id === hoveredId}
            onMouseEnter={() => setHoveredId(region.id)}
            onMouseLeave={() => setHoveredId(null)}
          />
        ))}
        {/* path로 말풍선 만들어서, 최근 업데이트 5개 재난문자 지도상에 그리기 */}
      </svg>
    </StyledBox>
  );
};

export default KoreaMap;
