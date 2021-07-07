import * as types from './emailTemplates.actionTypes';

export const fetchEmailTemplatesRequestActionCreator = () => {
  return { type: types.FETCH_EMAIL_TEMPLATES_REQUEST };
};

export const fetchEmailTemplatesSuccessActionCreator = templates => {
  return { type: types.FETCH_EMAIL_TEMPLATES_SUCCESS, templates };
};

export const fetchEmailTemplatesFailureActionCreator = () => {
  return { type: types.FETCH_EMAIL_TEMPLATES_FAILURE };
};

export const fetchGlobalEmailTemplatesRequestActionCreator = () => {
  return { type: types.FETCH_GLOBAL_EMAIL_TEMPLATES_REQUEST };
};

export const fetchGlobalEmailTemplatesSuccessActionCreator = templates => {
  return { type: types.FETCH_GLOBAL_EMAIL_TEMPLATES_SUCCESS, templates };
};

export const fetchGlobalEmailTemplatesFailureActionCreator = () => {
  return { type: types.FETCH_GLOBAL_EMAIL_TEMPLATES_FAILURE };
};

export const fetchCurrentEmailTemplateRequestActionCreator = () => {
  return { type: types.FETCH_CURRENT_EMAIL_TEMPLATE_REQUEST };
};

export const fetchCurrentEmailTemplateSuccessActionCreator = template => {
  return { type: types.FETCH_CURRENT_EMAIL_TEMPLATE_SUCCESS, template };
};

export const fetchCurrentEmailTemplateFailureActionCreator = () => {
  return { type: types.FETCH_CURRENT_EMAIL_TEMPLATE_FAILURE };
};

export const removeEmailTemplateRequestActionCreator = () => {
  return { type: types.REMOVE_EMAIL_TEMPLATE_REQUEST };
};

export const removeEmailTemplateSuccessActionCreator = templateId => {
  return { type: types.REMOVE_EMAIL_TEMPLATE_SUCCESS, templateId };
};

export const removeEmailTemplateFailureActionCreator = () => {
  return { type: types.REMOVE_EMAIL_TEMPLATE_FAILURE };
};

export const updateEmailTemplateRequestActionCreator = () => {
  return { type: types.UPDATE_EMAIL_TEMPLATE_REQUEST };
};

export const updateEmailTemplateSuccessActionCreator = template => {
  return { type: types.UPDATE_EMAIL_TEMPLATE_SUCCESS, template };
};

export const updateEmailTemplateFailureActionCreator = () => {
  return { type: types.UPDATE_EMAIL_TEMPLATE_FAILURE };
};

export const createEmailTemplateRequestActionCreator = () => {
  return { type: types.CREATE_EMAIL_TEMPLATE_REQUEST };
};

export const createEmailTemplateSuccessActionCreator = template => {
  return { type: types.CREATE_EMAIL_TEMPLATE_SUCCESS, template };
};

export const createEmailTemplateFailureActionCreator = template => {
  return { type: types.CREATE_EMAIL_TEMPLATE_FAILURE };
};

export const resetCurrentTemplateActionCreator = () => {
  return { type: types.RESET_CURRENT_TEMPLATE };
};
