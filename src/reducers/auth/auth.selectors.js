import { SUPER_ADMIN } from '../../constants/roles';

export const selectRoleId = state => {
  if (!state.auth.auth) return null;

  if (state.auth.auth.user.isAdmin) return SUPER_ADMIN;

  return state.auth.auth.roleId;
};

export const selectAuth = state => {
  return state.auth.auth;
};

export const selectUserId = state => {
  return state.auth.auth ? state.auth.auth.user.id : null;
};

export const selectAuthUser = state => {
  return state.auth.auth.user;
};

export const selectIsLoadingUpdateUserInfo = state => {
  return state.auth.isLoadingUpdateUserInfo;
};
export const selectIsLoadingUpdateUserPassword = state => {
  return state.auth.isLoadingUpdateUserPassword;
};
