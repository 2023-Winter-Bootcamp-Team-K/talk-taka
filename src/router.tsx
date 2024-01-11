import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LogInPage';
import SignupPage from './pages/SignupPage';
import IntroPage from './pages/IntroPage';
import Diary from './pages/Diary';
import BookCover from './pages/BookCover';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ChatPage from './pages/ChatPage';
import Modal from './components/modal/Modal';

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
    element: <Diary />,
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/test',
    element: <Modal />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
]);

export default router;
