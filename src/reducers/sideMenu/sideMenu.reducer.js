import * as types from './sideMenu.actionTypes';

const initState = {
  isSideMenuOpen: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.OPEN_SIDE_MENU:
      return {
        ...state,
        isSideMenuOpen: true
      };
    case types.CLOSE_SIDE_MENU:
      return {
        ...state,
        isSideMenuOpen: false
      };
    default:
      return state;
  }
};
