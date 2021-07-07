import {
  createUpsaleFailureActionCreator,
  createUpsaleRequestActionCreator,
  createUpsaleSuccessActionCreator,
  deleteUpsaleFailureActionCreator,
  deleteUpsaleRequestActionCreator,
  deleteUpsaleSuccessActionCreator,
  fetchUpsaleFailureActionCreator,
  fetchUpsaleRequestActionCreator,
  fetchUpsalesFailureActionCreator,
  fetchUpsalesRequestActionCreator,
  fetchUpsalesSuccessActionCreator,
  fetchUpsaleSuccessActionCreator,
  updateUpsaleFailureActionCreator,
  updateUpsaleRequestActionCreator,
  updateUpsaleSuccessActionCreator,
} from './upsales.actionCreators';
import upsalesService from '../../services/upsalesService';
import objectToFormData from 'object-to-formdata';
import { serializeCreateUpsale, serializeUpdateUpsale } from '../../serializers/Upsales.serializer';

export const fetchUpsales = () => {
  return async dispatch => {
    try {
      dispatch(fetchUpsalesRequestActionCreator());

      const upsales = await upsalesService.fetchAllUpsales();
      dispatch(fetchUpsalesSuccessActionCreator(upsales));

      return upsales;
    } catch (ex) {
      throw ex;
      dispatch(fetchUpsalesFailureActionCreator());
    }
  };
};

export const fetchUpsale = bannerId => {
  return async dispatch => {
    try {
      dispatch(fetchUpsaleRequestActionCreator());

      const upsale = await upsalesService.fetchUpsale(bannerId);
      dispatch(fetchUpsaleSuccessActionCreator(upsale));

      return upsale;
    } catch (ex) {
      dispatch(fetchUpsaleFailureActionCreator());
      throw ex;
    }
  };
};

export const createUpsale = data => {
  return async dispatch => {
    try {
      dispatch(createUpsaleRequestActionCreator());

      const serializedData = objectToFormData(serializeCreateUpsale(data));

      const newUpsale = await upsalesService.createUpsale(serializedData);
      dispatch(createUpsaleSuccessActionCreator(newUpsale));

      return newUpsale;
    } catch (ex) {
      dispatch(createUpsaleFailureActionCreator());
      throw ex;
    }
  };
};

export const updateUpsale = (bannerId, data) => {
  return async dispatch => {
    try {
      dispatch(updateUpsaleRequestActionCreator());

      const serializedData = objectToFormData(serializeUpdateUpsale(data));

      const updatedUpsale = await upsalesService.updateUpsale(bannerId, serializedData);
      dispatch(updateUpsaleSuccessActionCreator(bannerId, updatedUpsale));

      return updatedUpsale;
    } catch (ex) {
      dispatch(updateUpsaleFailureActionCreator());
      throw ex;
    }
  };
};

export const deleteUpsale = bannerId => {
  return async dispatch => {
    try {
      dispatch(deleteUpsaleRequestActionCreator());

      await upsalesService.deleteUpsale(bannerId);
      dispatch(deleteUpsaleSuccessActionCreator(bannerId));
    } catch (ex) {
      dispatch(deleteUpsaleFailureActionCreator());
      throw ex;
    }
  };
};
