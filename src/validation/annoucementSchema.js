import Yup from '../utils/yup';

export const annoucementSchema = Yup.object().shape({
  title: Yup.string().trim().required(),
  type: Yup.string().required(),
  description: Yup.string().trim().required('Description is required field'),
  data: Yup.string().required(),
  image: Yup.object().required(),
});

