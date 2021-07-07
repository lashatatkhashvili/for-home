import Yup from '../utils/yup';
import { CONTENT_TEMPLATE_TYPES } from '../constants/misc';

export const templateSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required(),
  description: Yup.string()
    .trim()
    .required(),
  type: Yup.string().required(),
  locale: Yup.string().required(),
  images: Yup.array().required(),
  metaType: Yup.string().when('type', {
    is: CONTENT_TEMPLATE_TYPES.announcements,
    then: fieldSchema => fieldSchema.required('Field is required'),
  }),
  metaValue: Yup.string().when('type', {
    is: CONTENT_TEMPLATE_TYPES.announcements,
    then: fieldSchema => fieldSchema.required('Field is required').trim(),
  }),
});

export const announcementSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required(),
  description: Yup.string()
    .trim()
    .required(),
  type: Yup.string().required(),
  // locale: Yup.string().required(),
  images: Yup.array().required(),
  metaType: Yup.string()
    .trim()
    .required(),
  metaValue: Yup.string()
    .trim()
    .required(),
});
