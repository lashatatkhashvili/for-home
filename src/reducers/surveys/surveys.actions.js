import {
  fetchSurveysRequestActionCreator,
  fetchSurveysSuccessActionCreator,
  fetchSurveysFailureActionCreator,
  getSurveysRequestActionCreator,
  getSurveysSuccessActionCreator,
  getSurveysFailureActionCreator,
  createSurveyRequestActionCreator,
  createSurveySuccessActionCreator,
  createSurveyFailureActionCreator,
  updateSurveySuccessActionCreator,
  updateSurveyFailureActionCreator,
  updateSurveyRequestActionCreator,
  deselectSurveyActionCreator,
  deleteSurveyRequestActionCreator,
  deleteSurveySuccessActionCreator,
  deleteSurveyFailureActionCreator,
  changeSurveysCurrentPage,
  expireSurveyFailureActionCreator,
  expireSurveyRequestActionCreator,
  expireSurveySuccessActionCreator,
} from './surveys.actionCretors';
import { serializeCreateSurveyRequest } from '../../serializers/Surveys.serializer';
import SurveyService from '../../services/surveyService';

export const fetchSurveys = (buildingId, page = 1) => {
  return async dispatch => {
    try {
      dispatch(fetchSurveysRequestActionCreator());
      const { surveys, total, currentPage } = await SurveyService.fetchSurveys(buildingId, page);

      dispatch(fetchSurveysSuccessActionCreator(surveys, total, currentPage));
    } catch (error) {
      dispatch(fetchSurveysFailureActionCreator());
    }
  };
};

export const createSurvey = survey => {
  return async dispatch => {
    try {
      dispatch(createSurveyRequestActionCreator());

      const newSurvey = serializeCreateSurveyRequest(survey);
      const addedSurvey = await SurveyService.createSurvey(newSurvey);
      dispatch(createSurveySuccessActionCreator(addedSurvey));
    } catch (error) {
      dispatch(createSurveyFailureActionCreator());
    }
  };
};

export const updateSurvey = (survey, id) => {
  return async dispatch => {
    try {
      dispatch(updateSurveyRequestActionCreator());

      const updatedSurvey = serializeCreateSurveyRequest(survey);
      const addedSurvey = await SurveyService.updateSurvey(updatedSurvey, id);

      dispatch(updateSurveySuccessActionCreator(addedSurvey));
    } catch (error) {
      dispatch(updateSurveyFailureActionCreator());
    }
  };
};

export const getSurvey = id => {
  return async dispatch => {
    try {
      dispatch(getSurveysRequestActionCreator());
      const survey = await SurveyService.getSurvey(id);

      dispatch(getSurveysSuccessActionCreator(survey));
    } catch (error) {
      dispatch(getSurveysFailureActionCreator());
    }
  };
};

export const deselectSurvey = () => {
  return dispatch => {
    dispatch(deselectSurveyActionCreator());
  };
};

export const deleteSurvey = id => {
  return async dispatch => {
    try {
      dispatch(deleteSurveyRequestActionCreator());

      const delId = await SurveyService.deleteSurvey(id);
      dispatch(deleteSurveySuccessActionCreator(id));

      return delId;
    } catch (error) {
      dispatch(deleteSurveyFailureActionCreator());
    }
  };
};
export const expireSurvey = id => {
  return async dispatch => {
    try {
      dispatch(expireSurveyRequestActionCreator());

      const response = await SurveyService.expireSurvey(id);
      dispatch(expireSurveySuccessActionCreator());

      return response;
    } catch (error) {
      dispatch(expireSurveyFailureActionCreator());
    }
  };
};

export const changeCurrentPage = page => {
  return dispatch => {
    dispatch(changeSurveysCurrentPage(page));
  };
};
