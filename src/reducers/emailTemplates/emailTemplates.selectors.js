export const selectEmailTemplates = state => {
  return state.emailTemplates.templates;
};

export const selectIsFetchingEmailTemplates = state => {
  return state.emailTemplates.isFetchingTemplates;
};

export const selectGlobalEmailTemplates = state => {
  return state.emailTemplates.globalTemplates;
};

export const selectIsFetchingGlobalEmailTemplates = state => {
  return state.emailTemplates.isFetchingGlobalTemplates;
};

export const selectIsRemovingEmailTemplate = state => {
  return state.emailTemplates.isRemovingTemplate;
};

export const selectCurrentEmailTemplate = state => {
  return state.emailTemplates.currentTemplate;
};

export const selectIsFetchingCurrentTemplate = state => {
  return state.emailTemplates.isFetchingCurrentTemplate;
};

export const selectIsCreatingTemplate = state => {
  return state.emailTemplates.isCreatingTemplate;
};

export const selectIsUpdatingTemplate = state => {
  return state.emailTemplates.isUpdatingTemplate;
};
