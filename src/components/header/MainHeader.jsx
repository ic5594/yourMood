import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LuMenuSquare } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Logo from '@/assets/images/Logo.jpg';
import Navbar from '@/components/header/Navbar.jsx';
import Navigation from './Navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MainHeader = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const menu = useSelector((state) => state.menu.menu); //redux menu

  const handleMenuOpen = () => {
    setNavbarOpen(true);
  };

  const handleDone = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {navbarOpen && <Navbar onDone={handleDone} />}
      </AnimatePresence>
      <header className="header">
        <div className="header_top">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.h1
              className="logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img src={Logo} alt="Logo Img" />
              Yourmood
            </motion.h1>
          </Link>

          <LuMenuSquare size="30" color="#c5423a" onClick={handleMenuOpen} />
        </div>
        <div className="header_below">
          <nav style={{ width: '100%' }}>
            <ul>
              <Swiper
                slidesPerView={4.5}
                centeredSlides={false}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                {menu.map((item, index) => (
                  <SwiperSlide key={item}>
                    <Navigation index={index} item={item}>
                      {item}
                    </Navigation>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
