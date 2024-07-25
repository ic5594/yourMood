import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuMenuSquare } from 'react-icons/lu';

import Logo from '@/assets/images/Logo.jpg';

const MainHeader = () => {
  const handleMenuOpen = () => {};

  return (
    <>
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
