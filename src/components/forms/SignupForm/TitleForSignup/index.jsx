import React from 'react';
import styles from './TitleForSignup.module.sass';
function TitleForSignup ({ title }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <p>We always keep your name and email address private.</p>
    </>
  );
}

export default TitleForSignup;
