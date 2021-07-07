import * as types from './specialDays.actionTypes';

export const fetchSpecialDaysRequestActionCreator = () => {
  return { type: types.FETCH_SPECIAL_DAYS_REQUEST };
};
export const fetchSpecialDaysSuccessActionCreator = (specialDays, total, currentPage) => {
  return { type: types.FETCH_SPECIAL_DAYS_SUCCESS, specialDays, total, currentPage };
};
export const fetchSpecialDaysFailureActionCreator = () => {
  return { type: types.FETCH_SPECIAL_DAYS_FAILURE };
};

////////////////////////////

export const getSurveysRequestActionCreator = () => {
  return { type: types.GET_SURVEY_REQUEST };
};
export const getSurveysSuccessActionCreator = survey => {
  return { type: types.GET_SURVEY_SUCCESS, survey };
};
export const getSurveysFailureActionCreator = () => {
  return { type: types.GET_SURVEY_FAILURE };
};

export const createSurveyRequestActionCreator = () => {
  return { type: types.CREATE_SURVEY_REQUEST };
};
export const createSurveySuccessActionCreator = survey => {
  return { type: types.CREATE_SURVEY_SUCCESS, survey };
};
export const createSurveyFailureActionCreator = () => {
  return { type: types.CREATE_SURVEY_FAILURE };
};

export const updateSurveyRequestActionCreator = () => {
  return { type: types.UPDATE_SURVEY_REQUEST };
};
export const updateSurveySuccessActionCreator = survey => {
  return { type: types.UPDATE_SURVEY_SUCCESS, survey };
};
export const updateSurveyFailureActionCreator = () => {
  return { type: types.UPDATE_SURVEY_FAILURE };
};

export const deleteSurveyRequestActionCreator = () => {
  return { type: types.DELETE_SURVEY_REQUEST };
};
export const deleteSurveySuccessActionCreator = id => {
  return { type: types.DELETE_SURVEY_SUCCESS, id };
};
export const deleteSurveyFailureActionCreator = () => {
  return { type: types.DELETE_SURVEY_FAILURE };
};

export const expireSurveyRequestActionCreator = () => {
  return { type: types.EXPIRE_SURVEY_REQUEST };
};
export const expireSurveySuccessActionCreator = () => {
  return { type: types.EXPIRE_SURVEY_SUCCESS };
};
export const expireSurveyFailureActionCreator = () => {
  return { type: types.EXPIRE_SURVEY_FAILURE };
};

export const deselectSurveyActionCreator = () => {
  return { type: types.DESELECT_SURVEY };
};

export const changeSurveysCurrentPage = page => {
  return { type: types.CHANGE_SURVEYS_CURRENTPAGE, page };
};
