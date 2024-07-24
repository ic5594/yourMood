import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import RootLayout from './pages/RootLayout.jsx';
import NotFound from './pages/NotFound.jsx';
import MainHomePage from './components/main/MainHomePage.jsx';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
