import * as types from './upsales.actionTypes';

export const fetchUpsalesRequestActionCreator = () => {
  return { type: types.FETCH_UPSALES_REQUEST };
};

export const fetchUpsalesSuccessActionCreator = upsales => {
  return { type: types.FETCH_UPSALES_SUCCESS, upsales };
};

export const fetchUpsalesFailureActionCreator = () => {
  return { type: types.FETCH_UPSALES_FAILURE };
};

export const fetchUpsaleRequestActionCreator = () => {
  return { type: types.FETCH_UPSALE_REQUEST };
};

export const fetchUpsaleSuccessActionCreator = upsale => {
  return { type: types.FETCH_UPSALE_SUCCESS, upsale };
};

export const fetchUpsaleFailureActionCreator = () => {
  return { type: types.FETCH_UPSALE_FAILURE };
};

export const createUpsaleRequestActionCreator = () => {
  return { type: types.CREATE_UPSALE_REQUEST };
};

export const createUpsaleSuccessActionCreator = upsale => {
  return { type: types.CREATE_UPSALE_SUCCESS, upsale };
};

export const createUpsaleFailureActionCreator = () => {
  return { type: types.CREATE_UPSALE_FAILURE };
};

export const updateUpsaleRequestActionCreator = () => {
  return { type: types.UPDATE_UPSALE_REQUEST };
};

export const updateUpsaleSuccessActionCreator = (bannerId, upsale) => {
  return { type: types.UPDATE_UPSALE_SUCCESS, bannerId, upsale };
};

export const updateUpsaleFailureActionCreator = () => {
  return { type: types.UPDATE_UPSALE_FAILURE };
};

export const deleteUpsaleRequestActionCreator = () => {
  return { type: types.DELETE_UPSALE_REQUEST };
};

export const deleteUpsaleSuccessActionCreator = bannerId => {
  return { type: types.DELETE_UPSALE_SUCCESS, bannerId };
};

export const deleteUpsaleFailureActionCreator = () => {
  return { type: types.DELETE_UPSALE_FAILURE };
};
