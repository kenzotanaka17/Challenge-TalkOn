import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Private: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/chat" />;
  }

  return <>{children}</>;
};

export default Private;
