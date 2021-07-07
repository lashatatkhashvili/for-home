import Yup from '../utils/yup';

export const surveySchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .max(30, 'Title can not be more than 30 symbols')
    .required(),
  isPublished: Yup.bool(),
  fields: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string()
          .trim()
          .required(),
        type: Yup.string().required(),
        isMandatory: Yup.bool().required(),
        options: Yup.array().of(
          Yup.object().shape({
            name: Yup.string()
              .trim()
              .required(),
          })
        ),
      })
    )
    .required(),
});
