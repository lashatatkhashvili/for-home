import * as types from './upsales.actionTypes';

const initialState = {
  upsales: [],

  isFetchingUpsales: false,
  isCreatingUpsale: false,
  isUpdatingUpsale: false,

  isDeletingUpsale: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_UPSALES_REQUEST:
      return {
        ...state,
        isFetchingUpsales: true,
      };

    case types.FETCH_UPSALES_SUCCESS:
      return {
        ...state,
        isFetchingUpsales: false,
        upsales: action.upsales,
      };

    case types.FETCH_UPSALES_FAILURE:
      return {
        ...state,
        isFetchingUpsales: false,
      };

    case types.CREATE_UPSALE_REQUEST:
      return {
        ...state,
        isCreatingUpsale: true,
      };

    case types.CREATE_UPSALE_SUCCESS:
      return {
        ...state,
        isCreatingUpsale: false,
        upsales: [action.upsale, ...state.upsales],
      };

    case types.CREATE_UPSALE_FAILURE:
      return {
        ...state,
        isCreatingUpsale: false,
      };

    case types.UPDATE_UPSALE_REQUEST:
      return {
        ...state,
        isUpdatingUpsale: true,
      };

    case types.UPDATE_UPSALE_SUCCESS:
      return {
        ...state,
        isUpdatingUpsale: false,
        upsales: state.upsales.map(upsale => (upsale.id === action.bannerId ? action.upsale : upsale)),
      };

    case types.UPDATE_UPSALE_FAILURE:
      return {
        ...state,
        isUpdatingUpsale: false,
      };

    case types.DELETE_UPSALE_REQUEST:
      return {
        ...state,
        isDeletingUpsale: true,
      };

    case types.DELETE_UPSALE_SUCCESS:
      return {
        ...state,
        isDeletingUpsale: false,
        upsales: state.upsales.filter(upsale => upsale.id !== action.bannerId),
      };

    default:
      return state;
  }
};
