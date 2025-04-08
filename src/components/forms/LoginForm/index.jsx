import React from 'react';
import TitleForLogin from './TitleForLogin';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from '../Input';
import { LOGIN_VALIDATION_SCHEMA } from '../../../utils/validate/userSchema';

import styles from './LoginForm.module.sass';

function LoginForm () {
  const initialValues = { email: '', password: '' };
  const onSubmit = (values, formik) => {
    console.log(values);
    formik.resetForm();
  };
  return (
    <div className={styles.wrapper}>
      <TitleForLogin title='Login to your account' />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={LOGIN_VALIDATION_SCHEMA}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className={styles.form}>
            <Input name='email' type='email' placeholder='Email' />
            <Input name='password' type='password' placeholder='Password' />
            <button
              className={styles.btn}
              type='submit'
              disabled={isSubmitting || !isValid || !dirty}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
