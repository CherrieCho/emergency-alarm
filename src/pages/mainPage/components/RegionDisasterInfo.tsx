import { Box, styled } from '@mui/material';

const RegionCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const RegionDisasterInfo = () => {
  return (
    <>
      RegionDisasterInfo
      <Box flex={2}>
        <RegionCard>경기도</RegionCard>
        <RegionCard>부산광역시</RegionCard>
        <RegionCard>서울특별시</RegionCard>
        <RegionCard>인천광역시</RegionCard>
      </Box>
      ;
    </>
  );
};

export default RegionDisasterInfo;
