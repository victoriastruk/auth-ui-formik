import React from 'react';
import { useField, ErrorMessage } from 'formik';
import styles from './Checkbox.module.sass';
function Checkbox ({ children, ...props }) {
  const [field] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className={styles.checkBox}>
        <input
          {...field}
          {...props}
          className={styles.checkBox}
          type='checkbox'
        />
        {children}
      </label>
      <ErrorMessage
        className={styles.error}
        name={field.name}
        component='div'
      />
    </>
  );
}

export default Checkbox;
