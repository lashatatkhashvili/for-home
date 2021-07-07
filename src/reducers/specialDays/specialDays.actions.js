import {
  fetchSpecialDaysRequestActionCreator,
  fetchSpecialDaysSuccessActionCreator,
  fetchSpecialDaysFailureActionCreator,
} from './specialDays.actionCretors';

import SpecialDaysSerive from '../../services/specialDaysService';

export const fetchSpecialDays = (buildingId, page = 1) => {
  return async dispatch => {
    try {
      dispatch(fetchSpecialDaysRequestActionCreator());
      const { specialDays, total, currentPage } = await SpecialDaysSerive.fetchSurveys(buildingId, page);

      dispatch(fetchSpecialDaysSuccessActionCreator(specialDays, total, currentPage));
    } catch (error) {
      dispatch(fetchSpecialDaysFailureActionCreator());
    }
  };
};
