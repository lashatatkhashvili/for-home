export const selectUpsales = state => {
  return state.upsales.upsales;
};

export const selectIsFetchingUpsales = state => {
  return state.upsales.isFetchingUpsales;
};

export const selectIsCreatingUpsale = state => {
  return state.upsales.isCreatingUpsale;
};
