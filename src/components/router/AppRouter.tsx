import React from 'react';
import { useRoutes } from 'react-router-dom';
import routesList from '../../routes';

const AppRouter = () => {
  return useRoutes(routesList);
};

export default AppRouter;
