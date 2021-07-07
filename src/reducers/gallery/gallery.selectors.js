export const selectGalleryImages = state => {
  return state.gallery.images;
};
export const selectGalleryTags = state => {
  return state.gallery.tags;
};
export const selectGalleryName = state => {
  return state.gallery.name;
};
export const selectIsFetchingGallery = state => {
  return state.gallery.isFetchingGallery;
};
export const selectIsCreatingGallery = state => {
  return state.gallery.isCreatingGallery;
};
