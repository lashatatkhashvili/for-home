import * as types from './template.actionTypes';

export const getTemplatesRequestActionCreator = () => {
  return { type: types.GET_TEMPLATES_REQUEST };
};
export const getTemplatesSuccessActionCreator = templates => {
  return {
    type: types.GET_TEMPLATES_SUCCESS,
    templates
  };
};
export const getTemplatesFailureActionCreator = () => {
  return { type: types.GET_TEMPLATES_FAILURE };
};

export const createTemplateRequestActionCreator = () => {
  return { type: types.CREATE_TEMPLATE_REQUEST };
};
export const createTemplateSuccessActionCreator = template => {
  return {
    type: types.CREATE_TEMPLATE_SUCCESS,
    template
  };
};
export const createTemplateFailureActionCreator = () => {
  return { type: types.CREATE_TEMPLATE_FAILURE };
};

export const updateTemplateRequestActionCreator = () => {
  return { type: types.UPDATE_TEMPLATE_REQUEST };
};
export const updateTemplateSuccessActionCreator = template => {
  return {
    type: types.UPDATE_TEMPLATE_SUCCESS,
    template
  };
};
export const updateTemplateFailureActionCreator = () => {
  return { type: types.UPDATE_TEMPLATE_FAILURE };
};

export const deleteTemplateRequestActionCreator = () => {
  return { type: types.DELETE_TEMPLATE_REQUEST };
};
export const deleteTemplateSuccessActionCreator = id => {
  return {
    type: types.DELETE_TEMPLATE_SUCCESS,
    id
  };
};
export const deleteTemplateFailureActionCreator = () => {
  return { type: types.DELETE_TEMPLATE_FAILURE };
};

export const toggleTemplateStatusRequestActionCreator = () => {
  return { type: types.TOGGLE_TEMPLATE_STATUS_REQUEST };
};
export const toggleTemplateStatusSuccessActionCreator = template => {
  return {
    type: types.TOGGLE_TEMPLATE_STATUS_SUCCESS,
    template
  };
};
export const toggleTemplateStatusFailureActionCreator = () => {
  return { type: types.TOGGLE_TEMPLATE_STATUS_FAILURE };
};

export const getTemplatesCategoriesRequestActionCreator = () => {
  return { type: types.GET_TEMPLATES_CATEGORIES_REQUEST };
};
export const getTemplatesCategoriesSuccessActionCreator = categories => {
  return {
    type: types.GET_TEMPLATES_CATEGORIES_SUCCESS,
    categories
  };
};
export const getTemplatesCategoriesFailureActionCreator = () => {
  return { type: types.GET_TEMPLATES_CATEGORIES_FAILURE };
};



export const getMilestonesRequestActionCreator = () => {
  return { type: types.GET_MILESTONES_REQUEST };
};
export const getMilestonesSuccessActionCreator = milestones => {
  return {
    type: types.GET_MILESTONES_SUCCESS,
    milestones
  };
};
export const getMilestonesFailureActionCreator = () => {
  return { type: types.GET_MILESTONES_FAILURE };
};