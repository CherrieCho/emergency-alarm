import GuidelineDetail from './components/GuidelineDetail';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  type SelectChangeEvent,
} from '@mui/material';
import type { DisasterItem } from '../../models/guideline';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//재해 목록
const naturalDisasters: DisasterItem[] = [
  { name: '태풍', cateId: '01001', pageNo: 1 },
  { name: '호우', cateId: '01003', pageNo: 2 },
  { name: '가뭄' },
  { name: '폭염' },
  { name: '한파' },
  { name: '대설' },
  { name: '지진' },
  { name: '황사' },
  { name: '홍수' },
];

const socialDisasters: DisasterItem[] = [
  { name: '화재' },
  { name: '산불' },
  { name: '붕괴' },
  { name: '폭발', cateId: '02015', pageNo: 1 },
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
  const navigate = useNavigate();
  //카테고리 1, 2
  const [category, setCategory] = useState<string>('');
  const [disaster, setDisaster] = useState<string>('');

  //카테고리 선택
  const handleCategoryChange = (event: SelectChangeEvent) => {
    const selected = event.target.value as string;
    setCategory(selected);
    setDisaster(''); // 두 번째 select박스 초기화
  };

  const handleDisasterChange = (event: SelectChangeEvent) => {
    const selected = event.target.value as string;
    setDisaster(selected);
    navigate(`/guideline/${selected}`); // URL 변경
  };

  //카테고리1에서 뭘 선택했냐에 따라 다른 재난 보여주기
  const currentDisasters: DisasterItem[] =
    category === '자연 재난'
      ? naturalDisasters
      : category === '사회 재난'
        ? socialDisasters
        : [];

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
        <Box>
          <Typography variant='h1' sx={{ marginLeft: '10px' }}>
            재난 행동요령
          </Typography>
        </Box>
        <Box sx={{ margin: '2em 0' }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={category}
              onChange={(event) => handleCategoryChange(event)}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                '& .MuiSelect-icon': {
                  color: '#333333',
                },
                '.MuiOutlinedInput-notchedOutline': {
                  borderRadius: '30px',
                },
                '& .MuiSelect-select': {
                  padding: '13px 20px',
                  paddingRight: '50px',
                },
              }}
            >
              <MenuItem value='' disabled>
                <Typography>카테고리 선택</Typography>
              </MenuItem>
              <MenuItem value='자연 재난'>자연 재난</MenuItem>
              <MenuItem value='사회 재난'>사회 재난</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              displayEmpty
              value={disaster}
              onChange={(event) => handleDisasterChange(event)}
              disabled={!category}
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                '& .MuiSelect-icon': {
                  color: '#333333',
                },
                '.MuiOutlinedInput-notchedOutline': {
                  borderRadius: '30px',
                },
                '& .MuiSelect-select': {
                  padding: '13px 20px',
                  paddingRight: '50px',
                },
              }}
            >
              <MenuItem value='' disabled>
                재난명 선택
              </MenuItem>
              {currentDisasters.map((d) => (
                <MenuItem key={d.name} value={d.name}>
                  {d.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ flex: 1 }}>
          <GuidelineDetail />
        </Box>
      </Box>
    </Box>
  );
};

export default Guidelines;
