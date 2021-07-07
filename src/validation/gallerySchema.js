import Yup from '../utils/yup';

export const gallerySchema = Yup.object().shape({
  title: Yup.string().required(),
  tags: Yup.array().required(),
  images: Yup.array().required(),
});

