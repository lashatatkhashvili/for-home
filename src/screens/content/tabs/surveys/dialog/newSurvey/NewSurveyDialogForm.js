import { surveySchema } from '../../../../../../validation/surveySchemas';

const formValues = (buildingId, currentSurvey) => {
  let values = {
    title: '',
    description: '',
    publishedAt: null,
    buildingId,
    fields: [],
  };

  if (currentSurvey) {
    values = {
      ...values,
      ...currentSurvey,
    };
  }

  return values;
};

export default (buildingId, currentSurvey, action) => {
  return {
    enableReinitialize: true,

    initialValues: formValues(buildingId, currentSurvey),

    validationSchema: surveySchema,

    onSubmit: values => {
      let { publishedAt } = values;

      const survey = {
        ...values,
        buildingId: values.buildingId,
        title: values.title,
        description: values.description,
        isTemplate : true,
        publishedAt,
        fields: values.fields.map(field => {
          if (currentSurvey) {
            field.surveyId = currentSurvey.id;
          }
          return field;
        }),
      };
      if (action) {
        action(survey);
      }
    },
  };
};
