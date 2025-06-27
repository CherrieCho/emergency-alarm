import React from 'react';
import GuidelineDetail from './GuidelineDetail';
import { Box } from '@mui/material';

//재해 목록
const disaster = [
  {
    name: '태풍',
    cateId: '01001',
    pageNo: 1,
  },
  {
    name: '호우',
    cateId: '01003',
    pageNo: 2,
  },
  { name: '가뭄' },
  { name: '폭염' },
  { name: '한파' },
  { name: '대설' },
  { name: '지진' },
  { name: '황사' },
  { name: '홍수' },
  { name: '화재' },
  { name: '산불' },
  { name: '붕괴' },
  {
    name: '폭발',
    cateId: '02015',
    pageNo: 1,
  },
  { name: '감염병' },
  { name: '원전사고' },
];

// import CycloneIcon from '@mui/icons-material/Cyclone';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import FloodIcon from '@mui/icons-material/Flood';
// import LandslideIcon from '@mui/icons-material/Landslide';
// import SunnyIcon from '@mui/icons-material/Sunny';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import SevereColdIcon from '@mui/icons-material/SevereCold';
// import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
// import ForestIcon from '@mui/icons-material/Forest';
// import CoronavirusIcon from '@mui/icons-material/Coronavirus';
//가뭄, 지진, 황사, 폭발, 원전사고는 fontawsome

const Guidelines = () => {
  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: '0px auto',
      }}
    >
      <Box
        sx={{
          marginTop: '3rem',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>제목</div>
        <div>
          {disaster.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
        <Box sx={{ flex: 1 }}>
          <GuidelineDetail />
        </Box>
      </Box>
    </Box>
  );
};

export default Guidelines;
