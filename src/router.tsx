import { createBrowserRouter } from 'react-router-dom';
import { lazy, Profiler, Suspense } from 'react';
import LoadingFallback from './LoadingFallback'; // LoadingFallback 컴포넌트 임포트
import PrivateRoute from './PrivateRoute';

const LoginPage = lazy(() => import('./pages/LogInPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const IntroPage = lazy(() => import('./pages/IntroPage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage'));
const BookCover = lazy(() => import('./pages/BookCover'));
const MainPage = lazy(() => import('./pages/MainPage'));
const ChatPage = lazy(() => import('./pages/ChatPage'));
const Result = lazy(() => import('./pages/Result'));
const Forbidden = lazy(() => import('./pages/Forbidden'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <IntroPage />
      </Suspense>
    ),
    errorElement: <Forbidden />,
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <LoginPage />
      </Suspense>
    ),
    errorElement: <Forbidden />,
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
      <PrivateRoute>
        <Suspense fallback={<LoadingFallback />}>
          <BookCover />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: '/diary',
    element: (
      <PrivateRoute>
        <Suspense fallback={<LoadingFallback />}>
          <DiaryPage />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: '/main',
    element: (
      <PrivateRoute>
        <Suspense fallback={<LoadingFallback />}>
          <MainPage />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: '/chat',
    element: (
      <PrivateRoute>
        <Suspense fallback={<LoadingFallback />}>
          <ChatPage />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: '/result',
    element: (
      <PrivateRoute>
        <Suspense fallback={<LoadingFallback />}>
          <Result />
        </Suspense>
      </PrivateRoute>
    ),
  },
]);

export default router;
