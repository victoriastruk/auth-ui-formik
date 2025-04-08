import * as yup from 'yup';

export const LOGIN_VALIDATION_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6, 'min 6 symbols').required(),
});

export const SIGNUP_VALIDATION_SCHEMA = yup.object({
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
    .oneOf([yup.ref('password'), null], 'confirmation pass must match password')
    .required(),
  picked: yup.string().required(),
  toggle: yup.bool().oneOf([true], 'You must accept the Terms of Service.'),
});
