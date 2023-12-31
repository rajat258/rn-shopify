import {object} from 'yup';
import * as Yup from 'yup';
const re_email =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

const validationSchema = {
  userDetails: object().shape({
    name: Yup.string()
      .required('This is required field.')
      .not([Yup.number], 'It must be a name.'),
    mobileNo: Yup.number('Mobile Number only have digits')
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .typeError("That doesn't look like a phone number")
      .required('A phone number is required'),
    address: Yup.string().required('This is required field.'),
    pincode: Yup.number()
      .required('This is required field.')
      .integer()
      .positive(),
    city: Yup.string().required('This is required field.'),
    state: Yup.string().required('This is required field.'),
  }),

  login: object().shape({
    email: Yup.string()
      .required('This is required field.')
      .matches(re_email, 'Not an email.'),
    password: Yup.string()
      .required('This is required field.')
      .min(8, 'Password should have minimum 8 characters.'),
  }),

  signup: object().shape({
    email: Yup.string()
      .required('This is required field.')
      .matches(re_email, 'Not an email.'),
    password: Yup.string()
      .required('This is required field.')
      .min(8, 'Password should have minimum 8 characters.'),
    confirmPassword: Yup.string()
      .required('This is required field.')
      .min(8, 'Password should have minimum 8 characters.'),
  }),
};

export default validationSchema;
