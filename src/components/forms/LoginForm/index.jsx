import React from 'react';
import TitleForLogin from './TitleForLogin';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import styles from './LoginForm.module.sass';
function LoginForm () {
  const initialValues = { email: '', password: '' };
  const onSubmit = (values, formik) => {
    console.log(values);
    formik.resetForm();
  };
  const LOGIN_VALIDATION_SCHEMA = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6, 'min 6 symbols').required(),
  });

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
            <Field
              className={styles.input}
              type='email'
              name='email'
              placeholder='Email'
              autoFocus
            />
            <ErrorMessage
              className={styles.error}
              name='email'
              component='div'
            />
            <Field
              className={styles.input}
              type='password'
              name='password'
              placeholder='Password'
            />
            <ErrorMessage
              className={styles.error}
              name='password'
              component='div'
            />
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
