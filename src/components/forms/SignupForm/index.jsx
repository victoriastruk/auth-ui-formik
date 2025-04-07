import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import TitleForSignup from './TitleForSignup';
import styles from './SignupForm.module.sass';
function SignupForm () {
  const SIGNUP_VALIDATION_SCHEMA = yup.object({
    firstName: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    displayName: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(6, 'min 6 symbols').required(),
    confirmPassword: yup.string().matches('???').required(),
  });

  return (
    <div className={styles.wrapper}>
      <TitleForSignup title='Create an account' />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SIGNUP_VALIDATION_SCHEMA}
        onSubmit={values => {
          // same shape as initial values

          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <Field name='firstName' />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name='lastName' />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name='displayName' />
            {errors.displayName && touched.displayName ? (
              <div>{errors.displayName}</div>
            ) : null}
            <Field name='email' type='email' />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name='password' />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <Field name='confirmPassword' />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignupForm;
