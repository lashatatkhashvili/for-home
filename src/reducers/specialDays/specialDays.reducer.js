import * as types from './specialDays.actionTypes';

const initialState = {
  specialDays: [],
  selectedSpecialDay: null,
  total: 0,
  currentPage: 1,

  isFetchingSpecialDAys: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SPECIAL_DAYS_REQUEST:
      return {
        ...state,
        isFetchingSpecialDAys: true,
      };
    case types.FETCH_SPECIAL_DAYS_SUCCESS:
      return {
        ...state,
        total: action.total,
        specialDays: action.specialDays,
        isFetchingSpecialDAys: false,
        currentPage: action.currentPage,
      };
    case types.FETCH_SPECIAL_DAYS_FAILURE:
      return {
        ...state,
        isFetchingSpecialDAys: false,
      };

    default:
      return state;
  }
};
