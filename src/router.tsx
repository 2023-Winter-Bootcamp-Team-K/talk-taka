import LoginPage from './pages/LogInPage';
import SignupPage from './pages/SignupPage';
import IntroPage from './pages/IntroPage';
import MainPage from './pages/MainPage';
import CameraBox from './components/common/Camera';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IntroPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/test',
    element: <CameraBox />,
  },
]);

export default router;
