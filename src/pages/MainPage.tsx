import React from 'react';
import {Link} from 'react-router-dom';
import RouteNames from '../routes/route-names.enum';

const MainPage = () => {
  return (
    <div>
      Main Page
      <Link to={RouteNames.PEOPLE}>People</Link>
    </div>
  );
};

export default MainPage;