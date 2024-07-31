import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useSetMenu from '@/hooks/useSetMenu.js';

const Navigation = ({ index, item, children }) => {
  const { path, setMenu, yourmoodInstaUrl, yourmoodKakaoCh } =
    useSetMenu(index);

  const initMotion = {
    whileHover: { scale: 1.1 },
    transition: { type: 'spring', stiffness: 200 },
  };

  return (
    <>
      {setMenu && (
        <Link to={path[index]}>
          <motion.li
            className="menu"
            whileHover={initMotion.whileHover}
            transition={initMotion.transition}
            key={index}
          >
            {children}
          </motion.li>
        </Link>
      )}
      {!setMenu && (
        <a>
          <motion.li
            className="menu"
            whileHover={initMotion.whileHover}
            transition={initMotion.transition}
            onClick={() =>
              window.open(item === 'insta' ? yourmoodInstaUrl : yourmoodKakaoCh)
            }
          >
            {children}
          </motion.li>
        </a>
      )}
    </>
  );
};

export default Navigation;
