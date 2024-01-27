import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from './utils/cookie';

type PrivateRouteProps = {
  children: ReactElement;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const navigate = useNavigate();
  const isLoggedIn = !!getCookie('token');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? children : null;
}
