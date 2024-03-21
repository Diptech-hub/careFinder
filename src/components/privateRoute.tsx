import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './userContext';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element: Element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Route path={path} element={Element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;


