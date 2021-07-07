import {
  getAnnoucementsRequestActionCreator,
  getAnnoucementsSuccessActionCreator,
  getAnnoucementsFailureActionCreator,

  createAnnoucementsRequestActionCreator,
  createAnnoucementsSuccessActionCreator,
  createAnnoucementsFailureActionCreator,

  updateAnnoucementRequestActionCreator,
  updateAnnoucementSuccessActionCreator,
  updateAnnoucementFailureActionCreator,

  deleteAnnoucementRequestActionCreator,
  deleteAnnoucementSuccessActionCreator,
  deleteAnnoucementFailureActionCreator

} from './annoucement.actionCreators';
import annoucementService from '../../services/annoucementService';
import { serializeAnnoucementFilesUpload , serializeAnnoucementUpdate  } from '../../serializers/Annoucements.serializer';
import objectToFormData from "object-to-formdata";


// Get All Annoucements
export const getAnnoucementsAction = page => {
  return async (dispatch) => {
    try{

      dispatch(getAnnoucementsRequestActionCreator());

      const annoucements = await annoucementService.getAnnoucements(page);

      dispatch(getAnnoucementsSuccessActionCreator(annoucements));

    }catch(err){
      dispatch(getAnnoucementsFailureActionCreator(err))
    }

  };
};

// Create New Annoucement
export const createAnnoucementAction = data => {
  return async (dispatch) => {
    try{

      dispatch(createAnnoucementsRequestActionCreator());

      const serializedData = objectToFormData(serializeAnnoucementFilesUpload(data));

      const annoucement = await annoucementService.createAnnoucement(serializedData);

      dispatch(createAnnoucementsSuccessActionCreator(annoucement));

    }catch(err){
      dispatch(createAnnoucementsFailureActionCreator(err))
    }

  };
};

// Update Annoucement
export const updateAnnoucementAction = (data , id) => {
  return async (dispatch) => {
    try{

      dispatch(updateAnnoucementRequestActionCreator());
      const serializedData = objectToFormData(serializeAnnoucementUpdate(data));

      const annoucement = await annoucementService.updateAnnoucement(serializedData , id);

      dispatch(updateAnnoucementSuccessActionCreator(annoucement));

    }catch(err){
      dispatch(updateAnnoucementFailureActionCreator(err))
    }

  };
};

// Delete Annoucement
export const deleteAnnoucementAction = id => {
  return async (dispatch) => {
    try{

      dispatch(deleteAnnoucementRequestActionCreator());


      await annoucementService.deleteAnnoucement(id);

      dispatch(deleteAnnoucementSuccessActionCreator(id));

    }catch(err){
      dispatch(deleteAnnoucementFailureActionCreator(err))
    }

  };
};
