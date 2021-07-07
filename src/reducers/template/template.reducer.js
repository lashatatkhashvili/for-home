import * as types from './template.actionTypes';

const initState = {
  templates : [],
  templateCategories : [],
  isFetchingTemplates : false,
  isCreatingTemplate : false,
  isChangingTemplateStatus : false,
  isDeletingTemplate : false,
  isFetchingTemplateCategories : false,
  isFetchingMilestones : false,
  currentPage : 1,
  total : 0,
  milestones : []

};


export default (state = initState, action) => {

  const updateSignleData = data => {
    const { templates } = state;
    const index = templates.findIndex(i => i.id === data.id);
    templates[index] = data;
    return templates;
  }

  switch (action.type) {

    // Get ALl Templates
    case types.GET_TEMPLATES_REQUEST:
      return {
        ...state,
        isFetchingTemplates: true
      };
    case types.GET_TEMPLATES_SUCCESS:
      return {
        ...state,
        templates: action.templates.templates,
        isFetchingTemplates: false,
        currentPage : action.templates.current_page,
        total : action.templates.total
      };
    case types.GET_TEMPLATES_FAILURE:
      return {
        ...state,
        isFetchingTemplates: false
      };

    // Create New Template
    case types.CREATE_TEMPLATE_REQUEST:
      return {
        ...state,
        isCreatingTemplate: true
      };
    case types.CREATE_TEMPLATE_SUCCESS:
      const templatesNewArray = [action.template].concat(state.templates );
      return {
        ...state,
        templates: templatesNewArray,
        isCreatingTemplate: false
      };
    case types.CREATE_TEMPLATE_FAILURE:
      return {
        ...state,
        isCreatingTemplate: false
      };

    // Toggle Template Status
    case types.UPDATE_TEMPLATE_REQUEST:
      return {
        ...state,
        isChangingTemplateStatus: true
      };
    case types.UPDATE_TEMPLATE_SUCCESS:

      return {
        ...state,
        templates : updateSignleData(action.template),
        isChangingTemplateStatus: false
      };
    case types.UPDATE_TEMPLATE_FAILURE:
      return {
        ...state,
        isChangingTemplateStatus: false
      };

    // Toggle Template Status
    case types.DELETE_TEMPLATE_REQUEST:
      return {
        ...state,
        isDeletingTemplate: true
      };
    case types.DELETE_TEMPLATE_SUCCESS:

      const { templates } = state;
      const index = templates.findIndex(i => i.id === action.id);
      templates.splice(index, 1);

      return {
        ...state,
        templates : templates,
        isDeletingTemplate: false
      };
    case types.DELETE_TEMPLATE_FAILURE:
      return {
        ...state,
        isDeletingTemplate: false
      };

    // Toggle Template Status
    case types.TOGGLE_TEMPLATE_STATUS_REQUEST:
      return {
        ...state,
        isChangingTemplateStatus: true
      };
    case types.TOGGLE_TEMPLATE_STATUS_SUCCESS:
      return {
        ...state,
        templates : updateSignleData(action.template),
        isChangingTemplateStatus: false
      };
    case types.TOGGLE_TEMPLATE_STATUS_FAILURE:
      return {
        ...state,
        isChangingTemplateStatus: false
      };

    // Get ALl Template Categories
    case types.GET_TEMPLATES_CATEGORIES_REQUEST:
      return {
        ...state,
        isFetchingTemplateCategories: true
      };
    case types.GET_TEMPLATES_CATEGORIES_SUCCESS:
      return {
        ...state,
        templateCategories: action.categories,
        isFetchingTemplateCategories: false
      };
    case types.GET_TEMPLATES_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetchingTemplateCategories: false
      };
    
    // Get Milestones
    case types.GET_MILESTONES_REQUEST:
      return {
        ...state,
        isFetchingMilestones: true
      };
    case types.GET_MILESTONES_SUCCESS:
      return {
        ...state,
        milestones: action.milestones,
        isFetchingMilestones: false,
      };
    case types.GET_MILESTONES_FAILURE:
      return {
        ...state,
        isFetchingMilestones: false
      };

    default:
      return state;
  }
};
