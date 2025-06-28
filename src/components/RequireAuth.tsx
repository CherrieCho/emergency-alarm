import type { JSX } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const RequireAuth = ({ children }: Props) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname, alert: '로그인 후 이용 바랍니다' }} // ✅ 메시지 전달
      />
    );
  }

  return children;
};

export default RequireAuth;