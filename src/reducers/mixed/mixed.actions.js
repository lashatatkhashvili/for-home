import { setGlobalMessageActionCreator, clearGlobalMessageActionCreator } from './mixed.actionCreators';

export const setGlobalMessage = (type, message) => {
  return async (dispatch) => {
      dispatch(setGlobalMessageActionCreator(type, message));

      setTimeout(() => {
        dispatch(clearGlobalMessageActionCreator());
      } , 5000)
  };
};

export const clearGlobalMessage = () => {
  return async (dispatch) => {
    dispatch(clearGlobalMessageActionCreator());
  };
};
