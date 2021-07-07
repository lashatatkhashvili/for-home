import Yup from '../utils/yup';

export const articleSchema = Yup.object().shape({
  title: Yup.string().trim().required(),
  category: Yup.number().required().moreThan(0),
  description: Yup.string().trim().required('Description is required field'),
  url: Yup.string().required(),
  images: Yup.array().required(),
});

