import * as types from './auth.actionTypes';

const initState = {
  auth: null,
  isAuthorizing: false,
  isLoadingUpdateUserInfo : false,
  isLoadingUpdateUserPassword : false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
        isAuthorizing: true,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        auth: action.user,
        isAuthorizing: false,
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuthorizing: false,
      };

    case types.LOGOUT_USER:
      return {
        ...state,
        auth: null,
      };

    case types.GET_CURRENT_USER:
      return {
        ...state,
        auth: action.user,
      };

    case types.UPDATE_USER_INFO_REQUEST:
      return {
        ...state,
        isLoadingUpdateUserInfo: true
      };
    case types.UPDATE_USER_INFO_SUCCESS:

      const { auth } = state;
      auth.user = action.user;

      return {
        ...state,
        isLoadingUpdateUserInfo: false,
        auth

      };
    case types.UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
        isLoadingUpdateUserInfo: false
      };

    case types.UPDATE_USER_PASSWORD_REQUEST:
      return {
        ...state,
        isLoadingUpdateUserPassword: true
      };
    case types.UPDATE_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoadingUpdateUserPassword: false
      };
    case types.UPDATE_USER_PASSWORD_FAILURE:
      return {
        ...state,
        isLoadingUpdateUserPassword: false
      };
    default:
      return state;
  }
};
