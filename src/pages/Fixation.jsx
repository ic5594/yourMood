import { Outlet } from 'react-router-dom';
import MainHeader from '@/components/header/MainHeader.jsx';
import MainFooter from '@/components/footer/MainFooter.jsx';

const Fixation = () => {
  return (
    <div className="app_home">
      <div id="navbar"></div>
      <MainHeader />
      <main id="welcome-content">
        <Outlet />
      </main>
      <MainFooter />
    </div>
  );
};

export default Fixation;
