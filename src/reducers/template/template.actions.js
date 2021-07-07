import {
  getTemplatesRequestActionCreator,
  getTemplatesSuccessActionCreator,
  getTemplatesFailureActionCreator,
  createTemplateRequestActionCreator,
  createTemplateSuccessActionCreator,
  createTemplateFailureActionCreator,
  updateTemplateRequestActionCreator,
  updateTemplateSuccessActionCreator,
  updateTemplateFailureActionCreator,
  deleteTemplateRequestActionCreator,
  deleteTemplateSuccessActionCreator,
  deleteTemplateFailureActionCreator,
  toggleTemplateStatusRequestActionCreator,
  toggleTemplateStatusSuccessActionCreator,
  toggleTemplateStatusFailureActionCreator,
  getTemplatesCategoriesRequestActionCreator,
  getTemplatesCategoriesSuccessActionCreator,
  getTemplatesCategoriesFailureActionCreator,

  getMilestonesRequestActionCreator,
  getMilestonesSuccessActionCreator,
  getMilestonesFailureActionCreator


} from './template.actionCreators';
import templateService from '../../services/templateService';
import {
  serializeAnnouncementPost,
  serializeTemplateFilesUpload,
  serializeTemplateUpdate,
} from '../../serializers/Template.serializer';
import objectToFormData from 'object-to-formdata';
import postService from '../../services/postService';

// Get All Templates
export const getTemplatesAction = (page, category, sortField, sortDirection, type) => {
  return async dispatch => {
    try {
      dispatch(getTemplatesRequestActionCreator());

      const templates = await templateService.getTemplates(page, category, sortField, sortDirection, type);

      dispatch(getTemplatesSuccessActionCreator(templates));
    } catch (err) {
      dispatch(getTemplatesFailureActionCreator(err));
    }
  };
};


// Create New Template
export const createTemplateAction = data => {
  return async dispatch => {
    try {
      dispatch(createTemplateRequestActionCreator());

      const serializedData = objectToFormData(serializeTemplateFilesUpload(data), { indices: true });

      const template = await templateService.createTemplate(serializedData);

      dispatch(createTemplateSuccessActionCreator(template));
    } catch (err) {
      dispatch(createTemplateFailureActionCreator(err));
    }
  };
};

export const createAnnouncement = data => {
  return async dispatch => {
    try {
      dispatch(createTemplateRequestActionCreator());

      const serializedData = objectToFormData(serializeTemplateFilesUpload(data), { indices: true });

      const template = await templateService.createTemplate(serializedData);

      const serializeDataForAnnouncement = objectToFormData(
        serializeAnnouncementPost({ ...data, contentTemplateId: template.id }, { indices: true })
      );

      await postService.createPost(serializeDataForAnnouncement);

      dispatch(createTemplateSuccessActionCreator(template));
    } catch (err) {
      dispatch(createTemplateFailureActionCreator(err));
    }
  };
};

// Update Template
export const udateTemplateAction = (data, id) => {
  return async dispatch => {
    try {
      dispatch(updateTemplateRequestActionCreator());

      const serializedData = objectToFormData(serializeTemplateUpdate(data));

      const template = await templateService.updateTemplate(serializedData, id);

      dispatch(updateTemplateSuccessActionCreator(template));
    } catch (err) {
      dispatch(updateTemplateFailureActionCreator(err));
    }
  };
};

// Delete Template
export const deleteTemplateAction = id => {
  return async dispatch => {
    try {
      dispatch(deleteTemplateRequestActionCreator());

      await templateService.deleteTemplate(id);

      dispatch(deleteTemplateSuccessActionCreator(id));
    } catch (err) {
      dispatch(deleteTemplateFailureActionCreator(err));
    }
  };
};

// Toggle Template Status
export const toggleTemplateStatusAction = id => {
  return async dispatch => {
    try {
      dispatch(toggleTemplateStatusRequestActionCreator());

      const template = await templateService.toggleTemplateStatus(id);

      dispatch(toggleTemplateStatusSuccessActionCreator(template));
    } catch (err) {
      dispatch(toggleTemplateStatusFailureActionCreator(err));
    }
  };
};

// Get Template Categories
export const getTemplatesCategoriesAction = () => {
  return async dispatch => {
    try {
      dispatch(getTemplatesCategoriesRequestActionCreator());

      const categories = await templateService.getTemplateCategories();

      dispatch(getTemplatesCategoriesSuccessActionCreator(categories));
    } catch (err) {
      dispatch(getTemplatesCategoriesFailureActionCreator(err));
    }
  };
};



// Get Global Milestones
export const getMilestonesAction = () => {
  return async (dispatch) => {
    try{
      dispatch(getMilestonesRequestActionCreator());

      const milestones = await templateService.getMilestones();
      dispatch(getMilestonesSuccessActionCreator(milestones));

    }catch(err){
      dispatch(getMilestonesFailureActionCreator(err))
    }

  };
};