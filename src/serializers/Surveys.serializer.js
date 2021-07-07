export const serializeFieldAnswersResponse = answer => {
  const { id, user_id, survey_field_id, value } = answer;

  return {
    id,
    userId: user_id,
    surveyFieldId: survey_field_id,
    value,
  };
};

export const serializeFieldOptionResponse = opt => {
  return {
    id: opt.id,
    name: opt.name,
    surveyFieldId: opt.survey_field_id,
    participantsCount: opt.answers_count,
  };
};

export const serializeFieldOptionRequest = (opt, surveyFieldId) => {
  const reqObj = {
    id: opt.id,
    name: opt.name,
    participantsCount: opt.answers_count,
  };

  if (surveyFieldId) {
    reqObj.survey_field_id = surveyFieldId;
  }

  return reqObj;
};

export const serializeSurveyFieldsRequest = field => {
  const reqObj = {
    id: field.id,
    name: field.name,
    type: field.type,
    survey_id: field.surveyId,
    isMandatory: field.isMandatory ? 1 : 0,
  };
  if (field.options) {
    reqObj.options = field.options.map(opt => serializeFieldOptionRequest(opt, field.id));
  }

  return reqObj;
};

export const serializeSurveyFieldResponse = field => {
  const resObj = {
    id: field.id,
    name: field.name,
    type: field.type,
    isMandatory: field.is_mandatory ? 1 : 0,
    participantsCount: field.answers_count,
    average: field.average,
  };
  if (field.options) {
    resObj.options = field.options.map(serializeFieldOptionResponse);
  }
  if (field.answers) {
    resObj.answers = field.answers.map(serializeFieldAnswersResponse);
  }

  return resObj;
};

export const serializeCreateSurveyRequest = survey => {
  const { title, publishedAt, fields, buildingId , description } = survey;

  return {
    title,
    description,
    publishedAt,
    buildingId,
    fields: fields.map(serializeSurveyFieldsRequest),
  };
};

export const serializeSurveyResponse = survey => {
  const { title, fields, published_at, id, answers_count, expired , description , used_in_count } = survey;

  return {
    id,
    title,
    description,
    usedInCount : used_in_count,
    publishedAt: published_at,
    isPublished: !!published_at,
    expired,
    participants: answers_count || 0,
    fields: fields.map(serializeSurveyFieldResponse),
  };
};
