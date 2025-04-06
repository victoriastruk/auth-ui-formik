import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png';

import styles from './Header.module.sass';

function Header () {
  let location = useLocation();
  const isLogin = location.pathname === '/';
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt='Logo' />
      <Link to={isLogin ? 'signup' : '/'} className={styles.btn}>
        {isLogin ? 'Signup' : 'Login'}
      </Link>
    </div>
  );
}

export default Header;
