import LoginPage from './pages/LogInPage';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
]);

export default router;
