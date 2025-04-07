import React from 'react';
import styles from './TitleForLogin.module.sass';

function TitleForLogin ({ title }) {
  return <h2 className={styles.title}>{title}</h2>;
}

export default TitleForLogin;
