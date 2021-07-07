import {
  getGalleryItemsRequestActionCreator,
  getGalleryItemsSuccessActionCreator,
  getGalleryItemsFailureActionCreator,

  createGalleryItemRequestActionCreator,
  createGalleryItemSuccessActionCreator,
  createGalleryItemFailureActionCreator,

  deleteGalleryImageSuccessActionCreator,
  updateGalleryItemSuccessActionCreator

} from './gallery.actionCreators';
import galleryServices from '../../services/galleryServices';
import objectToFormData from "object-to-formdata";
import { serializeGalleryFilesUpload , serializeGalleryUpdate } from '../../serializers/Gallery.serializer';

// Get All Items
export const getGalleryItemsAction = () => {
  return async (dispatch) => {
    try{

      dispatch(getGalleryItemsRequestActionCreator());

      const gallery = await galleryServices.getGalleryItems();

      dispatch(getGalleryItemsSuccessActionCreator(gallery));

    }catch(err){
      dispatch(getGalleryItemsFailureActionCreator(err))
    }

  };
};

// Create Gallery Item
export const createGalleryItemAction = (data , current) => {
  return async (dispatch) => {
    try{

      dispatch(createGalleryItemRequestActionCreator());
      if(current){
        const serializedData = objectToFormData(serializeGalleryUpdate(data ,current));
        const item = await galleryServices.createGalleryItems(serializedData);
        dispatch(updateGalleryItemSuccessActionCreator(item));
      }else{
        const serializedData = objectToFormData(serializeGalleryFilesUpload(data));
        const item = await galleryServices.createGalleryItems(serializedData);
        dispatch(createGalleryItemSuccessActionCreator(item));

      }


    }catch(err){
      dispatch(createGalleryItemFailureActionCreator(err))
    }

  };
};

// Delete Gallery Image
export const deleteGalleryImageAction = id => {
  return async (dispatch) => {
    try{

      dispatch(createGalleryItemRequestActionCreator());

      await galleryServices.deleteGalleryImages(id);

      dispatch(deleteGalleryImageSuccessActionCreator(id));

    }catch(err){
      dispatch(createGalleryItemFailureActionCreator(err))
    }

  };
};
