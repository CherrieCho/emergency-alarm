import { useMediaQuery, useTheme } from '@mui/material';
import { REGION_FULL_NAMES } from '../constants';

const formatRegionNames = (regionNames: string, selectedRegion?: string) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const regions = regionNames.split(',').map((region) => region.trim());
  const maxRegions = isMobile ? 2 : 3;

  // 선택된 지역이 있고 '전체'가 아닌 경우, 해당 지역만 필터링
  if (selectedRegion && selectedRegion !== '전체') {
    const filteredRegions = regions.filter((region) => {
      // 지역명의 앞부분만 추출 (띄어쓰기 전까지)
      const regionPrefix = region.split(' ')[0];

      return regionPrefix === REGION_FULL_NAMES[selectedRegion];
    });

    if (filteredRegions.length > 0) {
      return `[${filteredRegions.join(', ')}]`;
    }
  }

  // 선택된 지역이 없거나 '전체'인 경우, 기존 로직 적용
  if (regions.length <= maxRegions) {
    return `[${regions.join(', ')}]`;
  }
  return `[${regions.slice(0, maxRegions).join(', ')}...]`;
};

export default formatRegionNames;
