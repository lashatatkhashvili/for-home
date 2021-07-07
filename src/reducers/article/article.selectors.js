export const selectArticles = state => {
  return state.article.articles;
};
export const selectIsFetchingArticles = state => {
  return state.article.isFetchingArticles;
};
export const selectIsCreatingArticle = state => {
  return state.article.isCreatingArticle;
};
export const selectCurrentPage = state => {
  return state.article.currentPage;
};
export const selectTotal = state => {
  return state.article.total;
};
