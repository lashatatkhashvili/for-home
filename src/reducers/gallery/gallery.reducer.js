import * as types from './gallery.actionTypes';

const initState = {
  images : [],
  tags : [],
  name : 'Gallery',
  isFetchingGallery : false,
  isCreatingGallery : false

};

export default (state = initState, action) => {
  switch (action.type) {

    // Get Gallery Items
    case types.GET_GALLERY_ITEMS_REQUEST:
      return {
        ...state,
        isFetchingGallery: true
      };
    case types.GET_GALLERY_ITEMS_SUCCESS:
      return {
        ...state,
        images: action.gallery.images,
        tags: action.gallery.tags,
        name: action.gallery.name,
        isFetchingGallery: false
      };
    case types.GET_GALLERY_ITEMS_FAILURE:
      return {
        ...state,
        isFetchingGallery: false
      };

    // Create Gallery Item
    case types.CREATE_GALLERY_ITEM_REQUEST:
      return {
        ...state,
        isCreatingGallery: true
      };
    case types.CREATE_GALLERY_ITEM_SUCCESS:
      const imagesNewArray = [action.gallery].concat(state.images );
      return {
        ...state,
        images : imagesNewArray,
        isCreatingGallery: false
      };
    case types.CREATE_GALLERY_ITEM_FAILURE:
      return {
        ...state,
        isCreatingGallery: false
      };

    // Update Gallery Item
    case types.UPDATE_GALLERY_ITEM_SUCCESS:
      const { images } = state;
      const { gallery } = action;

      const oldOne = images.find(x => x.id === gallery.id);
      const index = images.indexOf(oldOne);
      images[index] = gallery;

      return {
        ...state,
        images,
        isCreatingGallery: false
      };

    // Delete Gallery Item
    case types.DELETE_GALLERY_IMAGE_SUCCESS:
      const imgArray = state.images;

      let imgIndex = imgArray.findIndex(i => i.id === action.id);
      imgArray.splice(imgIndex, 1)

      return {
        ...state,
        images : imgArray,
        isCreatingGallery: false
      };

    default:
      return state;
  }
};
