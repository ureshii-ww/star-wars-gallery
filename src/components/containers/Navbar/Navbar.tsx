import React from 'react';
import { Link } from 'react-router-dom';
import RouteNames from '../../../routes/route-names.enum';
import { styles } from './styles';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.item} to={RouteNames.MAIN}>Main Page</Link>
      <Link className={styles.item} to={RouteNames.PEOPLE}>People</Link>
      <Link className={styles.item} to={`${RouteNames.PERSON_BASE}/1`}>Person</Link>
    </div>
  );
};

export default Navbar;