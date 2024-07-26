import { Outlet } from 'react-router-dom';
import MainHeader from '@/components/header/MainHeader.jsx';
import MainFooter from '@/components/footer/MainFooter.jsx';

export default function WelcomePage() {
  return (
    <div className="app">
      <div className="app_home">
        <MainHeader />
        <main id="welcome-content">
          <Outlet />
        </main>
        <MainFooter />
      </div>
    </div>
  );
}
