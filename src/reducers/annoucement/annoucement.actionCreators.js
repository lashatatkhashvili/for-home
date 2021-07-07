import * as types from './annoucement.actionTypes';

export const getAnnoucementsRequestActionCreator = () => {
  return { type: types.GET_ANNOUCEMENTS_REQUEST };
};
export const getAnnoucementsSuccessActionCreator = annoucements => {
  return {
    type: types.GET_ANNOUCEMENTS_SUCCESS,
    annoucements
  };
};
export const getAnnoucementsFailureActionCreator = () => {
  return { type: types.GET_ANNOUCEMENTS_FAILURE };
};


export const createAnnoucementsRequestActionCreator = () => {
  return { type: types.CREATE_ANNOUCEMENT_REQUEST };
};
export const createAnnoucementsSuccessActionCreator = annoucement => {
  return {
    type: types.CREATE_ANNOUCEMENT_SUCCESS,
    annoucement
  };
};
export const createAnnoucementsFailureActionCreator = () => {
  return { type: types.CREATE_ANNOUCEMENT_FAILURE };
};


export const updateAnnoucementRequestActionCreator = () => {
  return { type: types.UPDATE_ANNOUCEMENT_REQUEST };
};
export const updateAnnoucementSuccessActionCreator = annoucement => {
  return {
    type: types.UPDATE_ANNOUCEMENT_SUCCESS,
    annoucement
  };
};
export const updateAnnoucementFailureActionCreator = () => {
  return { type: types.UPDATE_ANNOUCEMENT_SUCCESS };
};



export const deleteAnnoucementRequestActionCreator = () => {
  return { type: types.DELETE_ANNOUCEMENT_REQUEST };
};
export const deleteAnnoucementSuccessActionCreator = id => {
  return {
    type: types.DELETE_ANNOUCEMENT_SUCCESS,
    id
  };
};
export const deleteAnnoucementFailureActionCreator = () => {
  return { type: types.DELETE_ANNOUCEMENT_FAILURE };
};

