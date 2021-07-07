export const selectSurveys = state => {
  return state.surveys.surveys;
};

export const selectSurveysPaginationData = state => {
  return {
    total: state.surveys.total,
    currentPage: state.surveys.currentPage,
  };
};

export const selectIsFetchingSurveys = state => {
  return state.surveys.isFetchingSurveys;
};

export const selectIsCreatingSurvey = state => {
  return state.surveys.isCreatingSurvey;
};

export const selectSelectedSurvey = state => {
  return state.surveys.selectedSurvey;
};

export const selectIsFetchingSurvey = state => {
  return state.surveys.isFetchingSurvey;
};
