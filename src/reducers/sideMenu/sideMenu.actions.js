import * as types from './sideMenu.actionTypes';

export const openSideMenu = () => {
  return { type: types.OPEN_SIDE_MENU };
};

export const closeSideMenu = () => {
  return { type: types.CLOSE_SIDE_MENU };
};
