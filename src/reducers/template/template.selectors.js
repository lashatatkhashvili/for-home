export const selectTemplates = state => {
  return state.template.templates;
};
export const selectCurrentPage = state => {
  return state.template.currentPage;
};
export const selectTotal = state => {
  return state.template.total;
};
export const selectIsFetchingTemplates = state => {
  return state.template.isFetchingTemplates;
};
export const selectIsCreatingTemplate = state => {
  return state.template.isCreatingTemplate;
};
export const selectIsChangingTemplateStatus = state => {
  return state.template.isChangingTemplateStatus;
};
export const selectIsDeletingTemplate = state => {
  return state.template.isDeletingTemplate;
};
export const selectIsFetchingCategories = state => {
  return state.template.isFetchingTemplateCategories;
};
export const selectTemplateCategories = state => {
  return state.template.templateCategories;
};
export const selectMilestones = state => {
  return state.template.milestones;
};
export const selectIsFetchingMilestones = state => {
  return state.template.isFetchingMilestones;
};