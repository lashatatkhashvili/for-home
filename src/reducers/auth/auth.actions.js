import { closeSideMenu } from '../sideMenu/sideMenu.actions';
import authService from '../../services/authService';
import NetworkManager from '../../network/NetworkManager';
import { getCurrentUserFromLocalStorage } from '../../utils/helpers';
import {
  loginUserRequestActionCreator,
  loginUserSuccessActionCreator,
  loginUserFailureActionCreator,
  logoutUserActionCreator,
  getCurrentUserActionCreator,

  updateUserInfoRequestActionCreator,
  updateUserInfoSuccessActionCreator,
  updateUserInfoFailureActionCreator,

  updateUserPasswordRequestActionCreator,
  updateUserPasswordSuccessActionCreator,
  updateUserPasswordFailureActionCreator,

  userChangedProfileImageActionCreator,

} from './auth.actionCreators';
import { clearDataFromLocalStorage } from '../../utils/localStorage';
import Intercom from '../../utils/intercom';
import Analytics from '../../network/analytics/Analytics';
import objectToFormData from "object-to-formdata";

export const loginUser = (email, password, roleId) => {
  return async dispatch => {
    try {
      dispatch(loginUserRequestActionCreator());

      const loggedUser = await authService.loginUser(email, password, roleId);
      loggedUser.roleId = roleId;
      NetworkManager.setToken(loggedUser);

      dispatch(loginUserSuccessActionCreator(loggedUser));

      return loggedUser;
    } catch (ex) {
      dispatch(loginUserFailureActionCreator());
      throw ex;
    }
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch(closeSideMenu());
    NetworkManager.removeToken();
    clearDataFromLocalStorage();
    Intercom.shutdown();
    Analytics.reset();
    dispatch(logoutUserActionCreator());
  };
};

export const getCurrentUser = () => {
  const user = getCurrentUserFromLocalStorage();
  return getCurrentUserActionCreator(user);
};


export const updateUserInfo = data => {
  return async dispatch => {
    try {
      dispatch((updateUserInfoRequestActionCreator()));

      data = objectToFormData(data);

      const user = await authService.updateUserInfo(data);

      dispatch(updateUserInfoSuccessActionCreator(user));

      NetworkManager.updateUser(user);

      return user;
    } catch (ex) {
      dispatch(updateUserInfoFailureActionCreator());
      throw ex;
    }
  };
};


export const updateUserPassword = (data) => {
  return async dispatch => {
    try {
      dispatch(updateUserPasswordRequestActionCreator());

      const user = await authService.updateUserPassword(data);

      dispatch(updateUserPasswordSuccessActionCreator(user));

      return user;
    } catch (ex) {
      dispatch(updateUserPasswordFailureActionCreator());
      throw ex;
    }
  };
};


export const userChangedProfileImage = () => {
  return async dispatch => {
    try {
      dispatch(userChangedProfileImageActionCreator());
    }catch(ex){
      throw ex;
    }
  }
};
