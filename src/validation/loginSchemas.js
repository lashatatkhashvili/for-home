import Yup from '../utils/yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
});
