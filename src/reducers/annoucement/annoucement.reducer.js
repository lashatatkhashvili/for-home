import * as types from './annoucement.actionTypes';
import { getAnnoucementsAction } from './annoucement.actions';

const initState = {
  annoucements : [],
  isFetchingAnnoucements : false,
  isCreatingAnnoucement: false,
  currentPage : 1,
  total : 0

};


export default (state = initState, action) => {


  const updateSignleData = data => {
    const { annoucements } = state;
    const index = annoucements.findIndex(i => i.id === data.id);
    annoucements[index] = data;
    return annoucements;
  }

  switch (action.type) {

    // Get ALl Annoucements
    case types.GET_ANNOUCEMENTS_REQUEST:
      return {
        ...state,
        isFetchingAnnoucements: true
      };
    case types.GET_ANNOUCEMENTS_SUCCESS:
      return {
        ...state,
        annoucements: action.annoucements.annoucements,
        isFetchingAnnoucements: false,
        currentPage : action.annoucements.current_page,
        total : action.annoucements.total
      };
    case types.GET_ANNOUCEMENTS_FAILURE:
      return {
        ...state,
        isFetchingAnnoucements: false
      };

    // Create New Annoucement
    case types.CREATE_ANNOUCEMENT_REQUEST:
      return {
        ...state,
        isCreatingAnnoucement: true
      };
    case types.CREATE_ANNOUCEMENT_SUCCESS:
      const annoucementsNewArray = [action.annoucement].concat(state.annoucements );
      return {
        ...state,
        annoucements: annoucementsNewArray,
        isCreatingAnnoucement: false
      };
    case types.CREATE_ANNOUCEMENT_FAILURE:
      return {
        ...state,
        isCreatingAnnoucement: false
      };

    // Update Annoucement
    case types.UPDATE_ANNOUCEMENT_REQUEST:
      return {
        ...state,
        isCreatingAnnoucement: true
      };
    case types.UPDATE_ANNOUCEMENT_SUCCESS:

      return {
        ...state,
        annoucements : updateSignleData(action.annoucement),
        isCreatingAnnoucement: false
      };
    case types.UPDATE_ANNOUCEMENT_FAILURE:
      return {
        ...state,
        isCreatingAnnoucement: false
      };

    // delete Annoucements
    case types.DELETE_ANNOUCEMENT_REQUEST:
      return {
        ...state,
        isFetchingAnnoucements: true
      };
    case types.DELETE_ANNOUCEMENT_SUCCESS:

      console.log('agaga' , annoucements , action)
      const { annoucements } = state;
      const index = annoucements.findIndex(i => i.id === action.id);
      annoucements.splice(index, 1);

      return {
        ...state,
        annoucements : annoucements,
        isFetchingAnnoucements: false
      };
    case types.DELETE_ANNOUCEMENT_FAILURE:
      return {
        ...state,
        isFetchingArticles: false
      }



    default:
      return state;
  }
};
