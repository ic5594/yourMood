import { Mobile, PC } from '@/hooks/useResponse.jsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import Navigation from '@/components/header/Navigation.jsx';
import Logo from '@/assets/images/Logo.jpg';

const MainHeader = () => {
  const menu = useSelector((state) => state.menu.menu);

  return (
    <>
      <PC>
        <header className="header">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.h1
              className="logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img src={Logo} alt="Logo Img" />
              YourMood
            </motion.h1>
          </Link>
          <nav>
            <ul>
              {menu.map((item, index) => (
                <Navigation key={item} index={index} selected>
                  {item}
                </Navigation>
              ))}
            </ul>
          </nav>
        </header>
      </PC>
      <Mobile>
        <p>모바일 입니다 ..</p>
      </Mobile>
    </>
  );
};

export default MainHeader;
