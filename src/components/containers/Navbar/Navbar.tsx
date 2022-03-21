import React from 'react';
import { Link } from 'react-router-dom';
import RouteNames from '../../../routes/route-names.enum';

const Navbar = () => {
  return (
    <div>
      <Link to={RouteNames.MAIN}>Main Page</Link>
      <Link to={RouteNames.PEOPLE}>People</Link>
      <Link to={`${RouteNames.PERSON_BASE}/1`}>Person</Link>
    </div>
  );
};

export default Navbar;