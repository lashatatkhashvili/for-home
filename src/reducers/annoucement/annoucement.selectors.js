export const selectAnnoucements = state => {
  return state.annoucemenent.annoucements;
};
export const selectIsFetchingAnnoucement = state => {
  return state.annoucemenent.isFetchingAnnoucements;
};
export const selectIsCreatingAnnoucement = state => {
  return state.annoucemenent.isCreatingAnnoucement;
};
export const selectCurrentPage = state => {
  return state.annoucemenent.currentPage;
};
export const selectTotal = state => {
  return state.annoucemenent.total;
};
