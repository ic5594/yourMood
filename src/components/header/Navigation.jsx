import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = ({ index, children }) => {
  const path = useSelector((state) => state.menu.path);

  const setMenu = index < 3;
  const yourmoodInstaUrl =
    'https://www.instagram.com/cafeyourmood/p/Ct23jDKvaV9/?img_index=1';

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
        <motion.li
          className="menu"
          whileHover={initMotion.whileHover}
          transition={initMotion.transition}
          onClick={() => window.open(yourmoodInstaUrl)}
        >
          {children}
        </motion.li>
      )}
    </>
  );
};

export default Navigation;
