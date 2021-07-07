import {
  createEmailTemplateFailureActionCreator,
  createEmailTemplateRequestActionCreator,
  createEmailTemplateSuccessActionCreator,
  fetchCurrentEmailTemplateFailureActionCreator,
  fetchCurrentEmailTemplateRequestActionCreator,
  fetchCurrentEmailTemplateSuccessActionCreator,
  fetchEmailTemplatesFailureActionCreator,
  fetchEmailTemplatesRequestActionCreator,
  fetchEmailTemplatesSuccessActionCreator,
  fetchGlobalEmailTemplatesFailureActionCreator,
  fetchGlobalEmailTemplatesRequestActionCreator,
  fetchGlobalEmailTemplatesSuccessActionCreator,
  removeEmailTemplateFailureActionCreator,
  removeEmailTemplateRequestActionCreator,
  removeEmailTemplateSuccessActionCreator,
  resetCurrentTemplateActionCreator,
  updateEmailTemplateFailureActionCreator,
  updateEmailTemplateRequestActionCreator,
  updateEmailTemplateSuccessActionCreator,
} from './emailTemplates.actionCreators';
import emailTemplatesService from '../../services/emailTemplatesService';
import objectToFormData from 'object-to-formdata';
import { serializeNewEmailTemplate } from '../../serializers/EmailTemplates.serializer';

export const fetchEmailTemplates = params => {
  return async dispatch => {
    try {
      dispatch(fetchEmailTemplatesRequestActionCreator());

      const templates = await emailTemplatesService.fetchEmailTemplates(params);

      dispatch(fetchEmailTemplatesSuccessActionCreator(templates));

      return templates;
    } catch (ex) {
      dispatch(fetchEmailTemplatesFailureActionCreator());
      throw ex;
    }
  };
};

export const fetchGlobalEmailTemplates = params => {
  return async dispatch => {
    try {
      dispatch(fetchGlobalEmailTemplatesRequestActionCreator());

      const templates = await emailTemplatesService.fetchEmailTemplates(params);

      dispatch(fetchGlobalEmailTemplatesSuccessActionCreator(templates));

      return templates;
    } catch (ex) {
      dispatch(fetchGlobalEmailTemplatesFailureActionCreator());
      throw ex;
    }
  };
};

export const fetchEmailTemplate = templateId => {
  return async dispatch => {
    try {
      dispatch(fetchCurrentEmailTemplateRequestActionCreator());

      const template = await emailTemplatesService.fetchEmailTemplate(templateId);

      dispatch(fetchCurrentEmailTemplateSuccessActionCreator(template));

      return template;
    } catch (ex) {
      dispatch(fetchCurrentEmailTemplateFailureActionCreator());
      throw ex;
    }
  };
};

export const removeEmailTemplate = templateId => {
  return async dispatch => {
    try {
      dispatch(removeEmailTemplateRequestActionCreator());

      await emailTemplatesService.removeEmailTemplate(templateId);

      dispatch(removeEmailTemplateSuccessActionCreator(templateId));
    } catch (ex) {
      dispatch(removeEmailTemplateFailureActionCreator());
      throw ex;
    }
  };
};

export const updateEmailTemplate = (templateId, data) => {
  return async dispatch => {
    try {
      dispatch(updateEmailTemplateRequestActionCreator());

      const updatedTemplate = objectToFormData(serializeNewEmailTemplate(data));

      const template = await emailTemplatesService.updateEmailTemplate(templateId, updatedTemplate);

      dispatch(updateEmailTemplateSuccessActionCreator(template));

      return template;
    } catch (ex) {
      dispatch(updateEmailTemplateFailureActionCreator());
      throw ex;
    }
  };
};

export const createEmailTemplate = data => {
  return async dispatch => {
    try {
      dispatch(createEmailTemplateRequestActionCreator());

      const newTemplate = objectToFormData(serializeNewEmailTemplate(data));

      const template = await emailTemplatesService.createEmailTemplate(newTemplate);

      dispatch(createEmailTemplateSuccessActionCreator(template));

      return template;
    } catch (ex) {
      dispatch(createEmailTemplateFailureActionCreator());
      throw ex;
    }
  };
};

export const resetCurrentTemplate = () => {
  return resetCurrentTemplateActionCreator();
};
