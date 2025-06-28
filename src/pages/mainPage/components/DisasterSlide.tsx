import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper';

const disasterData = [
  {
    region: '창녕군1',
    message:
      '오늘 19:18 창녕군 영산휴게소(하행선)에서 발생한 화학사고의 대응이 완료되었습니다. 휴게소 이용객 및 인근 주민은 일상생활로 돌아가시기 바랍니다.',
    time: '2025/06/25 20:33:50',
  },
  {
    region: '창녕군2',
    message:
      '오늘 19:18 창녕군 영산휴게소(하행선)에서 발생한 화학사고의 대응이 완료되었습니다. 휴게소 이용객 및 인근 주민은 일상생활로 돌아가시기 바랍니다.',
    time: '2025/06/25 20:33:50',
  },
  {
    region: '창녕군3',
    message:
      '오늘 19:18 창녕군 영산휴게소(하행선)에서 발생한 화학사고의 대응이 완료되었습니다. 휴게소 이용객 및 인근 주민은 일상생활로 돌아가시기 바랍니다.',
    time: '2025/06/25 20:33:50',
  },
  {
    region: '창녕군4',
    message:
      '오늘 19:18 창녕군 영산휴게소(하행선)에서 발생한 화학사고의 대응이 완료되었습니다. 휴게소 이용객 및 인근 주민은 일상생활로 돌아가시기 바랍니다.',
    time: '2025/06/25 20:33:50',
  },
  {
    region: '창녕군5',
    message:
      '오늘 19:18 창녕군 영산휴게소(하행선)에서 발생한 화학사고의 대응이 완료되었습니다. 휴게소 이용객 및 인근 주민은 일상생활로 돌아가시기 바랍니다.',
    time: '2025/06/25 20:33:50',
  },
];

const DisasterCarousel = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => swiper?.slidePrev();
  const handleNext = () => swiper?.slideNext();

  return (
    <Box flex={1} padding='40px'>
      <Typography variant='h1' mb='2em'>
        재난안전 상황정보
      </Typography>
      <Box maxWidth='1000px' margin='0 auto' position='relative'>
        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrev}
          disabled={isBeginning}
          sx={{
            position: 'absolute',
            left: -50,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            color: '#333333',
            [theme.breakpoints.down('sm')]: {
              left: -40,
            },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          disabled={isEnd}
          sx={{
            position: 'absolute',
            right: -50,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            color: '#333333',
            [theme.breakpoints.down('sm')]: {
              right: -40,
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={isSmDown ? 1 : 2}
          onSwiper={(s) => setSwiper(s)}
          onSlideChange={(s) => {
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
        >
          {disasterData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Box
                sx={{
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '15px',
                  padding: '20px',
                  backgroundColor: '#fff',
                  height: '100%',
                }}
              >
                <Box display='flex' alignItems='center' gap={1} mb={1}>
                  <WarningAmberIcon fontSize='large' />
                  <Typography fontWeight='bold'>[{item.region}]</Typography>
                </Box>
                <Typography>{item.message}</Typography>
                <Typography variant='caption'>발송일시: {item.time}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default DisasterCarousel;
