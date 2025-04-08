import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TitleForSignup from './TitleForSignup';
import { SIGNUP_VALIDATION_SCHEMA } from '../../../utils/validate/userSchema';
import Input from '../Input';
import styles from './SignupForm.module.sass';
import RadioGroup from '../RadioGroup';
import Checkbox from '../Checkbox';
function SignupForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    picked: 'Join as a buyer',
    toggle: false,
  };
  const onSubmit = (values, formik) => {
    console.log(values);
    formik.resetForm();
  };
  return (
    <div className={styles.wrapper}>
      <TitleForSignup title='Create an account' />
      <Formik
        initialValues={initialValues}
        initialTouched={{ toggle: true }}
        validationSchema={SIGNUP_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className={styles.form}>
            <Input
              name='firstName'
              type='text'
              placeholder='Your name'
              autoFocus
            />
            <Input name='lastName' type='text' placeholder='Surname' />
            <Input name='displayName' type='text' placeholder='Your nickname' />
            <Input name='email' type='email' placeholder='Email' />
            <Input name='password' type='password' placeholder='Password' />
            <Input
              name='confirmPassword'
              type='password'
              placeholder='Confirm password'
            />
            <RadioGroup
              label='Join As a Buyer'
              type='radio'
              name='picked'
              value='Join as a buyer'
              description='I am looking for Name, Logo or Tagline for my business, brend or
                product.'
            />
            <RadioGroup
              label='Join As a Creative'
              type='radio'
              name='picked'
              value='Join as a creative'
              description='I plan to submit name ideas, Logo designs or sell names in
                Domain Marketplace.'
            />
            <Checkbox name='toggle'>
              By clicking this checkbox, you agree to our{' '}
              <a className={styles.linkOnTerms} href='#'>
                Terms of Service.
              </a>
            </Checkbox>
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
