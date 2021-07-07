import * as types from './mixed.actionTypes';

const initState = {
  globalMessage: null,
  globalMessageType: {
    success : false,
    error : false
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.SET_GLOBAL_MESSAGE:

      const { globalMessageType } = state;

      if(action.payload.type){
        globalMessageType.success = true;
        globalMessageType.error = false;
      }else{
        globalMessageType.success = false;
        globalMessageType.error = true;
      }

      return {
        ...state,
        globalMessage: action.payload.message,
        globalMessageType: globalMessageType
      };

    case types.CLEAR_GLOBAL_MESSAGE:
      return {
        ...state,
        globalMessage: null,
        globalMessageType: {
          success : false,
          error : false
        }
      };
    default:
      return state;
  }
};
