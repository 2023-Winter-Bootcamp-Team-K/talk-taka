import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingFallback from './LoadingFallback'; // LoadingFallback 컴포넌트 임포트

const LoginPage = lazy(() => import('./pages/LogInPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const IntroPage = lazy(() => import('./pages/IntroPage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage'));
const BookCover = lazy(() => import('./pages/BookCover'));
const MainPage = lazy(() => import('./pages/MainPage'));
const ChatPage = lazy(() => import('./pages/ChatPage'));
const Result = lazy(() => import('./pages/Result'));
const CameraModal = lazy(() => import('./components/modal/CameraModal'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <IntroPage />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/signup',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <SignupPage />
      </Suspense>
    ),
  },
  {
    path: '/bookcover',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <BookCover />
      </Suspense>
    ),
  },
  {
    path: '/diary',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <DiaryPage />
      </Suspense>
    ),
  },
  {
    path: '/main',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: '/chat',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <ChatPage />
      </Suspense>
    ),
  },
  {
    path: '/result',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Result />
      </Suspense>
    ),
  },
  {
    path: '/test',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <CameraModal />
      </Suspense>
    ),
  },
]);

export default router;