import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LuMenuSquare } from 'react-icons/lu';

import Logo from '@/assets/images/Logo.jpg';
import { useState } from 'react';
import Navbar from '../UI/Navbar';

const MainHeader = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleMenuOpen = () => {
    setNavbarOpen(true);
  };

  const handleDone = () => {
    console.log('done');
    setNavbarOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {navbarOpen && <Navbar onDone={handleDone} />}
      </AnimatePresence>
      <header className="header">
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
      </header>
    </>
  );
};

export default MainHeader;
