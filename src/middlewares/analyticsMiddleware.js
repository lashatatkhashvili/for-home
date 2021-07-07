import Analytics from '../network/analytics/Analytics';
import {
  USER_UPDATED_PERSONAL_INFO,
  USER_CHANGED_PASSWORD,
  USER_UPDATED_PROFILE_IMAGE,
} from '../constants/analytics';
import {
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_PASSWORD_SUCCESS, USER_CHANGED_PROFILE_IMAGE,
} from '../reducers/auth/auth.actionTypes';

const analyticsMiddleware = store => next => action => {
  switch (action.type) {
    case UPDATE_USER_INFO_SUCCESS :
      Analytics.logEvent(USER_UPDATED_PERSONAL_INFO, {});
      break;

    case UPDATE_USER_PASSWORD_SUCCESS :
      Analytics.logEvent(USER_CHANGED_PASSWORD, {});
      break;

    case USER_CHANGED_PROFILE_IMAGE :
      Analytics.logEvent(USER_UPDATED_PROFILE_IMAGE, {});
      break;

    default:
      return next(action);
  }

  return next(action);
};

export default analyticsMiddleware;
