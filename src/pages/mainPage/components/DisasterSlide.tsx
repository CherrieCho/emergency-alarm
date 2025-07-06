import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import useMainPageDisasterMessages from '../../../hooks/mainPage/useMainPage';
import SafetyDisastermessageCard from '../../locationDetail/components/SafetyDisastermessageCard';
import SkeletonCards from '../../locationDetail/components/SkeletonCards';

const DisasterCarousel = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => swiper?.slidePrev();
  const handleNext = () => swiper?.slideNext();

  const { data: disasterMessages, isPending } = useMainPageDisasterMessages();

  return (
    <Box flex={1} padding='40px'>
      <Typography variant='h1' mb='2em'>
        재난안전 상황정보
      </Typography>
      <Box maxWidth='1000px' margin='0 auto' position='relative'>
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
          {isPending && <SkeletonCards count={2} />}
          {!isPending &&
            disasterMessages?.body.map((message) => (
              <SwiperSlide key={message.SN}>
                <SafetyDisastermessageCard safetyDisasterMessage={message} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default DisasterCarousel;
