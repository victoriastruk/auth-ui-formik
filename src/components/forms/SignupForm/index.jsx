import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
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
    displayName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    email: yup.string().email('check email').required('Required'),
    password: yup.string().min(6, 'min 6 symbols').required(),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        'confirmation pass must match password'
      )
      .required(),
    picked: yup.string().required(),
    toggle: yup.bool().oneOf([true], 'You must accept the Terms of Service.'),
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
          picked: 'Join as a buyer',
          toggle: false,
        }}
        initialTouched={{ toggle: true }}
        validationSchema={SIGNUP_VALIDATION_SCHEMA}
        onSubmit={(values, formik) => {
          console.log(values);
          formik.resetForm();
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className={styles.form}>
            <div className={styles.inputWrapper}>
              <Field name='firstName'>
                {({ field, form }) => (
                  <input
                    {...field}
                    type='text'
                    placeholder='Your name'
                    autoFocus
                    className={classNames(styles.input, {
                      [styles.invalid]:
                        form.errors.firstName && form.values.firstName,
                      [styles.valid]:
                        !form.errors.firstName && form.values.firstName,
                    })}
                  />
                )}
              </Field>
              <ErrorMessage
                className={styles.error}
                name='firstName'
                component='div'
              />
            </div>
            <div className={styles.inputWrapper}>
              <Field name='lastName'>
                {({ field, form }) => (
                  <input
                    {...field}
                    type='text'
                    placeholder='Surname'
                    className={classNames(styles.input, {
                      [styles.invalid]:
                        form.errors.lastName && form.values.lastName,
                      [styles.valid]:
                        !form.errors.lastName && form.values.lastName,
                    })}
                  />
                )}
              </Field>
              <ErrorMessage
                className={styles.error}
                name='lastName'
                component='div'
              />
            </div>
            <div className={styles.inputWrapper}>
              <Field name='displayName'>
                {({ field, form }) => (
                  <input
                    {...field}
                    type='text'
                    placeholder='Your nickname'
                    className={classNames(styles.input, {
                      [styles.invalid]:
                        form.errors.displayName && form.values.displayName,
                      [styles.valid]:
                        !form.errors.displayName && form.values.displayName,
                    })}
                  />
                )}
              </Field>
              <ErrorMessage
                className={styles.error}
                name='displayName'
                component='div'
              />
            </div>
            <div className={styles.inputWrapper}>
              <Field name='email'>
                {({ field, form }) => (
                  <input
                    {...field}
                    type='email'
                    placeholder='Email'
                    className={classNames(styles.input, {
                      [styles.invalid]: form.errors.email && form.values.email,
                      [styles.valid]: !form.errors.email && form.values.email,
                    })}
                  />
                )}
              </Field>
              <ErrorMessage
                className={styles.error}
                name='email'
                component='div'
              />
            </div>
            <div className={styles.inputWrapper}>
              <Field name='password'>
                {({ field, form }) => (
                  <input
                    {...field}
                    type='password'
                    placeholder='Password'
                    className={classNames(styles.input, {
                      [styles.invalid]:
                        form.errors.password && form.values.password,
                      [styles.valid]:
                        !form.errors.password && form.values.password,
                    })}
                  />
                )}
              </Field>
              <ErrorMessage
                className={styles.error}
                name='password'
                component='div'
              />
            </div>
            <div className={styles.inputWrapper}>
              <Field name='confirmPassword'>
                {({ field, form }) => (
                  <input
                    {...field}
                    type='password'
                    placeholder='Confirm password'
                    className={classNames(styles.input, {
                      [styles.invalid]:
                        form.errors.confirmPassword &&
                        form.values.confirmPassword,
                      [styles.valid]:
                        !form.errors.confirmPassword &&
                        form.values.confirmPassword,
                    })}
                  />
                )}
              </Field>
              <ErrorMessage
                className={styles.error}
                name='confirmPassword'
                component='div'
              />
            </div>
            <div className={styles.radioBtnWrapper}>
              <label className={styles.value}>
                <Field
                  className={styles.inputRadio}
                  type='radio'
                  name='picked'
                  value='Join as a buyer'
                />
                Join As a Buyer
              </label>
              <span className={styles.description}>
                I am looking for Name, Logo or Tagline for my business, brend or
                product.
              </span>
            </div>
            <div className={styles.radioBtnWrapper}>
              <label className={styles.value}>
                <Field
                  className={styles.inputRadio}
                  type='radio'
                  name='picked'
                  value='Join as a creative'
                />
                Join As a Creative
              </label>
              <span className={styles.description}>
                I plan to submit name ideas, Logo designs or sell names in
                Domain Marketplace.
              </span>
            </div>
            <label className={styles.checkBox}>
              <Field
                className={styles.checkBox}
                type='checkbox'
                name='toggle'
              />
              By clicking this checkbox, you agree to our{' '}
              <a className={styles.linkOnTerms} href='#'>
                Terms of Service.
              </a>
            </label>
            <ErrorMessage
              className={styles.error}
              name='toggle'
              component='div'
            />
            <button
              className={styles.btn}
              type='submit'
              disabled={isSubmitting || !isValid || !dirty}
            >
              Create Account
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignupForm;
