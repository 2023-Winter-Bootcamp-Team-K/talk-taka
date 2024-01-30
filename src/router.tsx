import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense, ReactElement } from 'react';
import LoadingFallback from './LoadingFallback';
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

const withSuspense = (
  Component: React.LazyExoticComponent<React.ComponentType<any>>
): ReactElement => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

const createRoute = (
  path: string,
  Component: React.LazyExoticComponent<React.ComponentType<any>>,
  isPrivate: boolean = false
) => {
  const WrappedComponent = withSuspense(Component);
  return {
    path,
    element: isPrivate ? (
      <PrivateRoute>{WrappedComponent}</PrivateRoute>
    ) : (
      WrappedComponent
    ),
  };
};

const routes = [
  createRoute('', IntroPage),
  createRoute('login', LoginPage),
  createRoute('signup', SignupPage),
  createRoute('bookcover', BookCover, true),
  createRoute('diary', DiaryPage, true),
  createRoute('main', MainPage, true),
  createRoute('chat', ChatPage, true),
  createRoute('result', Result, true),
];

const router = createBrowserRouter([
  {
    path: '/',
    children: routes,
    errorElement: <Forbidden />,
  },
]);

export default router;
