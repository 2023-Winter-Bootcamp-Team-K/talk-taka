import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LogInPage';
import SignupPage from './pages/SignupPage';
import IntroPage from './pages/IntroPage';
import MainPage from './pages/MainPage';
import CameraBox from './components/common/Camera';
import ChatPage from './pages/ChatPage';

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
    element: '',
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
]);

export default router;
