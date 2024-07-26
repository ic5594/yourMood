import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
// import { useNavigate } from 'react-router-dom';

import ImgNavigation from '@/components/main/ImgNavigation.jsx';
import MainImg1 from '@/assets/images/main_img1.jpg';
import MainImg2 from '@/assets/images/main_img2.jpg';
import MainImg3 from '@/assets/images/main_img3.jpg';
import MainImg4 from '@/assets/images/main_img4.jpg';
import MainImg5 from '@/assets/images/main_img5.jpg';
import MainImg6 from '@/assets/images/main_img6.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MainHomePage = () => {
  // const routerGo = useNavigate;
  const mainImgArray = [
    MainImg1,
    MainImg2,
    MainImg3,
    MainImg4,
    MainImg5,
    MainImg6,
  ];
  const gotoIntroduction = () => {
    // routerGo('/introduction');
  };
  return (
    <div className="main_nav_area">
      <Swiper
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop="true"
        pagination={{
          clickable: true,
        }}
      >
        {mainImgArray.map((item, index) => (
          <SwiperSlide key={index}>
            <ImgNavigation item={item} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text_wrap">
        <div className="fr_view">
          <h1 style={{ textAlign: 'center', opacity: 0.85 }}>
            Your mood <br />
            coffee & desert
          </h1>
          <p
            type="button"
            onClick={gotoIntroduction}
            style={{ fontWeight: 300 }}
            className="btn"
          >
            SEE MORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHomePage;
