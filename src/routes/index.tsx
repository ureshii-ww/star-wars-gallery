import { RouteObject, Navigate } from 'react-router-dom';
import RouteNames from './route-names.enum';
import PeoplePage from '../pages/PeoplePage';
import MainPage from '../pages/MainPage';
import PersonPage from '../pages/PersonPage';

const routesList: RouteObject[] = [
  {
    path: RouteNames.MAIN,
    element: <MainPage />,
  },
  {
    index: true,
    element: <Navigate to={RouteNames.MAIN} />,
  },
  {
    path: RouteNames.PEOPLE,
    element: <PeoplePage />,
  },
  {
    path: RouteNames.PERSON,
    element: <PersonPage />
  }
];

export default routesList;