import { Box, Stack } from '@mui/material';
import MainBanner from './components/MainBanner';
import DisasterSlide from './components/DisasterSlide';
import RegionDisasterInfo from './components/RegionDisasterInfo';
import DisasterTypeInfo from './components/DisasterTypeInfo';

// 데이터 가져와서 보내주기
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
const MainPage = () => {
  return (
    <>
      <Stack spacing={2} width='100%' height='100vh'>
        <MainBanner />
        <DisasterSlide />
        <RegionDisasterInfo />
        <DisasterTypeInfo />
      </Stack>
    </>
  );
};

export default MainPage;
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
