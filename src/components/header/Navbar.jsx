import Modal from '@/components/UI/Modal.jsx';
import { useSelector } from 'react-redux';
import NavbarItem from './NavbarItem';

const Navbar = ({ onDone }) => {
  const menu = useSelector((state) => state.menu.menu);

  return (
    <>
      <Modal onClose={onDone}>
        <nav>
          <ul className="navbar_left">
            <div className="menu_wrap">
              {menu.map((item, index) => (
                <NavbarItem key={item} index={index} onDone={onDone}>
                  {item}
                </NavbarItem>
              ))}
            </div>
          </ul>
        </nav>
      </Modal>
    </>
  );
};
export default Navbar;
