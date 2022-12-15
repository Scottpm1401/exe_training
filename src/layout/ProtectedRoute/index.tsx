import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';
import { selectors } from '../../redux/reducer';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const accessToken = useAppSelector(selectors.auth.selectAccessToken);

  if (!accessToken) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export default ProtectedRoute;
