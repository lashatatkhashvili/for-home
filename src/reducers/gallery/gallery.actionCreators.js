import * as types from './gallery.actionTypes';

export const getGalleryItemsRequestActionCreator = () => {
  return { type: types.GET_GALLERY_ITEMS_REQUEST };
};
export const getGalleryItemsSuccessActionCreator = gallery => {
  return {
    type: types.GET_GALLERY_ITEMS_SUCCESS,
    gallery
  };
};
export const getGalleryItemsFailureActionCreator = () => {
  return { type: types.GET_GALLERY_ITEMS_FAILURE }
};

export const createGalleryItemRequestActionCreator = () => {
  return { type: types.CREATE_GALLERY_ITEM_REQUEST };
};
export const createGalleryItemSuccessActionCreator = gallery => {
  return {
    type: types.CREATE_GALLERY_ITEM_SUCCESS,
    gallery
  };
};
export const createGalleryItemFailureActionCreator = () => {
  return { type: types.CREATE_GALLERY_ITEM_SUCCESS };
};

export const deleteGalleryImageSuccessActionCreator = id => {
  return {
    type: types.DELETE_GALLERY_IMAGE_SUCCESS,
    id
  };
};
export const updateGalleryItemSuccessActionCreator = gallery => {
  return {
    type: types.UPDATE_GALLERY_ITEM_SUCCESS,
    gallery
  };
};
