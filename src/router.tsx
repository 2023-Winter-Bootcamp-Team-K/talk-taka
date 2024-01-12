import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LogInPage';
import SignupPage from './pages/SignupPage';
import IntroPage from './pages/IntroPage';
import DiaryPage from './pages/DiaryPage';
import BookCover from './pages/BookCover';
import MainPage from './pages/MainPage';
import ChatPage from './pages/ChatPage';
import Result from './pages/Result';
import CameraModal from './components/modal/CameraModal';

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
    path: '/bookcover',
    element: <BookCover />,
  },
  {
    path: '/diary',
    element: <DiaryPage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/test',
    element: <CameraModal />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
  {
    path: '/result',
    element: <Result />,
  },
]);

export default router;
