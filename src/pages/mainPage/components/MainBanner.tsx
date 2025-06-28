import { Box } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Link } from 'react-router-dom';
import banner1 from '../../../assets/banners/heavyRain_banner.png';
// import banner2 from '../../../assets/banners/bannerHotWeather.png';
// import banner3 from '../../../assets/banners/wildFire_banner.png';
import '../styles/banner.style.css';

const MainBanner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        maxWidth: '1200px',
        height: 'auto',
      }}
    >
      <Box>
        <img src={banner1} />
      </Box>
      {/* <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Link to={'/guideline/호우'}>
            <img src={banner1} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/guideline/폭염'}>
            <img src={banner2} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/guideline/산불'}>
            <img src={banner3} />
          </Link>
        </SwiperSlide>
      </Swiper> */}
    </Box>
  );
};

export default MainBanner;
