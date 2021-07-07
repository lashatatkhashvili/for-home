import * as types from './auth.actionTypes';

export const loginUserRequestActionCreator = () => {
  return { type: types.LOGIN_USER_REQUEST };
};

export const loginUserSuccessActionCreator = user => {
  return { type: types.LOGIN_USER_SUCCESS, user };
};

export const loginUserFailureActionCreator = () => {
  return { type: types.LOGIN_USER_FAILURE };
};

export const logoutUserActionCreator = () => {
  return { type: types.LOGOUT_USER };
};

export const getCurrentUserActionCreator = user => {
  return { type: types.GET_CURRENT_USER, user };
};




export const updateUserInfoRequestActionCreator = () => {
  return { type: types.UPDATE_USER_INFO_REQUEST };
};

export const updateUserInfoSuccessActionCreator = user => {
  return { type: types.UPDATE_USER_INFO_SUCCESS, user };
};

export const updateUserInfoFailureActionCreator = () => {
  return { type: types.UPDATE_USER_INFO_FAILURE };
};




export const updateUserPasswordRequestActionCreator = () => {
  return { type: types.UPDATE_USER_PASSWORD_REQUEST };
};

export const updateUserPasswordSuccessActionCreator = user => {
  return { type: types.UPDATE_USER_PASSWORD_SUCCESS, user };
};

export const updateUserPasswordFailureActionCreator = () => {
  return { type: types.UPDATE_USER_PASSWORD_FAILURE };
};


export const userChangedProfileImageActionCreator = () => {
  return { type: types.USER_CHANGED_PROFILE_IMAGE };
};
