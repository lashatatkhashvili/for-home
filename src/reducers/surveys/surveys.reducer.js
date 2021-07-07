import * as types from './surveys.actionTypes';

const initialState = {
  surveys: [],
  selectedSurvey: null,
  total: 0,
  currentPage: 1,

  isFetchingSurveys: false,
  isCreatingSurvey: false,
  isUpdatingSurvey: false,
  isFetchingSurvey: false,
  isDeletingSurvey: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SURVEYS_REQUEST:
      return {
        ...state,
        isFetchingSurveys: true,
      };
    case types.FETCH_SURVEYS_SUCCESS:
      return {
        ...state,
        total: action.total,
        surveys: action.surveys,
        isFetchingSurveys: false,
        currentPage: action.currentPage,
      };
    case types.FETCH_SURVEYS_FAILURE:
      return {
        ...state,
        isFetchingSurveys: false,
      };

    case types.GET_SURVEY_REQUEST:
      return {
        ...state,
        isFetchingSurvey: true,
      };
    case types.GET_SURVEY_SUCCESS:
      return {
        ...state,
        isFetchingSurvey: false,
        selectedSurvey: action.survey,
      };
    case types.GET_SURVEY_FAILURE:
      return {
        ...state,
        isFetchingSurvey: false,
        selectedSurvey: null,
      };

    case types.CREATE_SURVEY_REQUEST:
      return {
        ...state,
        isCreatingSurvey: true,
      };
    case types.CREATE_SURVEY_SUCCESS:
      return {
        ...state,
        isCreatingSurvey: false,
        surveys: [...state.surveys, action.survey],
        total : state.total + 1
      };
    case types.CREATE_SURVEY_FAILURE:
      return {
        ...state,
        isCreatingSurvey: false,
        selectedSurvey: null,
      };

    case types.UPDATE_SURVEY_REQUEST:
      return {
        ...state,
        isUpdatingSurvey: true,
      };
    case types.UPDATE_SURVEY_SUCCESS:
      return {
        ...state,
        isUpdatingSurvey: false,
        surveys: state.surveys && state.surveys.map(survey =>
          survey.id === action.survey.id ? { ...action.survey } : survey
        )
      };
    case types.UPDATE_SURVEY_FAILURE:
      return {
        ...state,
        isUpdatingSurvey: false,
        selectedSurvey: null,
      };

    case types.DELETE_SURVEY_REQUEST:
      return {
        ...state,
        isDeletingSurvey: true,
      };
    case types.DELETE_SURVEY_SUCCESS:
      return {
        ...state,
        isDeletingSurvey: false,
        surveys: state.surveys.filter(survey => survey.id !== action.id),
        total : state.total - 1
      };
    case types.DELETE_SURVEY_FAILURE:
      return {
        ...state,
        isDeletingSurvey: false,
        selectedSurvey: null,
      };

    case types.DESELECT_SURVEY:
      return {
        ...state,
        selectedSurvey: null,
      };

    case types.CHANGE_SURVEYS_CURRENTPAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    default:
      return state;
  }
};
