import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';

import NotFound from '@/pages/NotFound.jsx';
import MainHomePage from '@/components/main/MainHomePage.jsx';
import Introduction from '@/pages/introduction/Introduction.jsx';
import Menu from '@/pages/menu/Menu';
import WayMap from '@/pages/waymap/WayMap';

const RootLayout = lazy(() => import('@/pages/RootLayout.jsx'));

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MainHomePage />,
      },
      {
        path: 'introduction',
        element: <Introduction />,
      },
      {
        path: 'menu',
        element: <Menu />,
        id: 'menu',
      },
      {
        path: 'waymap',
        element: <WayMap />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
