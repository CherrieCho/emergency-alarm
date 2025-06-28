import Slider from 'react-slick';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <ArrowForwardIosIcon
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: -25,
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#000',
        zIndex: 1,
      }}
    />
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <ArrowBackIosIcon
      onClick={onClick}
      sx={{
        position: 'absolute',
        left: -25,
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#000',
        zIndex: 1,
      }}
    />
  );
};
/*
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
*/
const DisasterCarousel = () => {
  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: isLgDown ? 1 : 2,
    slidesToScroll: isLgDown ? 1 : 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box flex={1} padding='40px'>
      <Typography
        sx={{
          fontFamily: theme.typography.fontFamily,
          fontWeight: 'bold',
          fontSize: '1.3rem',
        }}
        mb={2}
      >
        재난안전 상황정보
      </Typography>
      <Box maxWidth='1000px' margin='0 auto'>
        <Slider {...settings}>
          {disasterData.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                padding: '0 10px',
                boxSizing: 'border-box',
              }}
            >
              <Box
                key={idx}
                sx={{
                  marginRight: '20px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '15px',
                  padding: '20px',
                  backgroundColor: '#fff',
                }}
              >
                <Box display='flex' alignItems='center' gap={1}>
                  <WarningAmberIcon fontSize='large' />
                  <Typography fontWeight='bold'>[{item.region}]</Typography>
                </Box>
                <Typography>{item.message}</Typography>
                <Typography variant='caption'>발송일시: {item.time}</Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default DisasterCarousel;
