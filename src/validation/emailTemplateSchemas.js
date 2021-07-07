import Yup from '../utils/yup';

export const emailTemplateSchema = Yup.object().shape({
  templateName: Yup.string()
    .required()
    .trim(),
  templateSubject: Yup.string()
    .required()
    .trim(),
});
