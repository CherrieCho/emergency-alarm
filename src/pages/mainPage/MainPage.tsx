import React from 'react';
import KoreaMap from './components/koreaMap/KoreaMap';
import MainDisasterDetailList from './components/mainDisasterDetailList/MainDisasterDetailList';
import { Box } from '@mui/material';
import SpeechBubble from './components/letter/SpeechBubble';

// 데이터 가져와서 보내주기
export const MainPage = () => {
  const handleRegionClick = (region: string) => {
    alert(region);
    console.log(region);
  };
  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
      <MainDisasterDetailList />
      <Box
        sx={{
          backgroundColor: '#D2D2D2',
          border: '1px solid #ccc', 
        }}
      ></Box>
      <KoreaMap handleRegionClick={handleRegionClick} />
      {/* <div>
        <SpeechBubble />
      </div> */}
    </Box>
  );
};

