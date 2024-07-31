import useSetMenu from '@/hooks/useSetMenu';
import { Link } from 'react-router-dom';

const NavbarItem = ({ index, onDone, children }) => {
  const { path, setMenu, yourmoodInstaUrl, yourmoodKakaoCh } =
    useSetMenu(index);

  return (
    <>
      {setMenu && (
        <Link to={path[index]} onClick={onDone}>
          <li className="depth">{children}</li>
        </Link>
      )}
      {!setMenu && (
        <a
          onClick={() => [
            window.open(
              children === 'insta' ? yourmoodInstaUrl : yourmoodKakaoCh
            ),
            onDone,
          ]}
        >
          <li className="depth">{children}</li>
        </a>
      )}
    </>
  );
};

export default NavbarItem;
