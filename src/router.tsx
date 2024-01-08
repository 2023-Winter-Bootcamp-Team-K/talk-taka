// import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LogInPage';
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
