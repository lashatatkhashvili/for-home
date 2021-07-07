import * as types from './mixed.actionTypes';

export const setGlobalMessageActionCreator = (type, message) => {
  return {
    type: types.SET_GLOBAL_MESSAGE,
    payload : {
      type,
      message
    }
  };
};

export const clearGlobalMessageActionCreator = () => {
  return { type: types.CLEAR_GLOBAL_MESSAGE };
};
