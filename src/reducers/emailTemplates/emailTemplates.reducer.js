import * as types from './emailTemplates.actionTypes';

const initState = {
  templates: [],
  globalTemplates: [],
  currentTemplate: null,

  isFetchingTemplates: true,
  isFetchingGlobalTemplates: true,
  isFetchingCurrentTemplate: false,
  isRemovingTemplate: false,
  isCreatingTemplate: false,
  isUpdatingTemplate: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_EMAIL_TEMPLATES_REQUEST:
      return {
        ...state,
        isFetchingTemplates: true,
      };

    case types.FETCH_EMAIL_TEMPLATES_SUCCESS:
      return {
        ...state,
        isFetchingTemplates: false,
        templates: action.templates,
      };

    case types.FETCH_EMAIL_TEMPLATES_FAILURE:
      return {
        ...state,
        isFetchingTemplates: false,
      };

    case types.FETCH_GLOBAL_EMAIL_TEMPLATES_REQUEST:
      return {
        ...state,
        isFetchingGlobalTemplates: true,
      };

    case types.FETCH_GLOBAL_EMAIL_TEMPLATES_SUCCESS:
      return {
        ...state,
        isFetchingGlobalTemplates: false,
        globalTemplates: action.templates,
      };

    case types.FETCH_GLOBAL_EMAIL_TEMPLATES_FAILURE:
      return {
        ...state,
        isFetchingGlobalTemplates: false,
      };

    case types.FETCH_CURRENT_EMAIL_TEMPLATE_REQUEST:
      return {
        ...state,
        isFetchingCurrentTemplate: true,
      };

    case types.FETCH_CURRENT_EMAIL_TEMPLATE_SUCCESS:
      return {
        ...state,
        isFetchingCurrentTemplate: false,
        currentTemplate: action.template,
      };

    case types.FETCH_CURRENT_EMAIL_TEMPLATE_FAILURE:
      return {
        ...state,
        isFetchingCurrentTemplate: false,
      };

    case types.REMOVE_EMAIL_TEMPLATE_REQUEST:
      return {
        ...state,
        isRemovingTemplate: true,
      };

    case types.REMOVE_EMAIL_TEMPLATE_SUCCESS:
      return {
        ...state,
        isRemovingTemplate: false,
        globalTemplates: state.globalTemplates.filter(template => template.id !== action.templateId),
      };

    case types.REMOVE_EMAIL_TEMPLATE_FAILURE:
      return {
        ...state,
        isRemovingTemplate: false,
      };

    case types.CREATE_EMAIL_TEMPLATE_REQUEST:
      return {
        ...state,
        isCreatingTemplate: true,
      };

    case types.CREATE_EMAIL_TEMPLATE_SUCCESS:
      return {
        ...state,
        isCreatingTemplate: false,
        globalTemplates: [...state.globalTemplates, action.template],
      };

    case types.CREATE_EMAIL_TEMPLATE_FAILURE:
      return {
        ...state,
        isCreatingTemplate: false,
      };

    case types.UPDATE_EMAIL_TEMPLATE_REQUEST:
      return {
        ...state,
        isUpdatingTemplate: true,
      };

    case types.UPDATE_EMAIL_TEMPLATE_SUCCESS:
      return {
        ...state,
        isUpdatingTemplate: false,
        globalTemplates: state.globalTemplates.map(template =>
          template.id === action.template.id ? { ...action.template } : template
        ),
      };

    case types.UPDATE_EMAIL_TEMPLATE_FAILURE:
      return {
        ...state,
        isUpdatingTemplate: false,
      };

    case types.RESET_CURRENT_TEMPLATE:
      return {
        ...state,
        currentTemplate: null,
      };

    default:
      return state;
  }
};
