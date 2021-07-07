import * as types from './article.actionTypes';

const initState = {
  articles : [],
  isFetchingArticles : false,
  isCreatingArticle : false,
  currentPage : 1,
  total : 0

};


export default (state = initState, action) => {


  const updateSignleData = data => {
    const { articles } = state;
    const index = articles.findIndex(i => i.id === data.id);
    articles[index] = data;
    return articles;
  }

  switch (action.type) {

    // Get ALl Templates
    case types.GET_ARTICLES_REQUEST:
      return {
        ...state,
        isFetchingArticles: true
      };
    case types.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.articles.articles,
        isFetchingArticles: false,
        currentPage : action.articles.current_page,
        total : action.articles.total
      };
    case types.GET_ARTICLES_FAILURE:
      return {
        ...state,
        isFetchingArticles: false
      };

    // Create New Template
    case types.CREATE_ARTICLE_REQUEST:
      return {
        ...state,
        isCreatingArticle: true
      };
    case types.CREATE_ARTICLE_SUCCESS:
      const articlesNewArray = [action.article].concat(state.articles );
      return {
        ...state,
        articles: articlesNewArray,
        isCreatingArticle: false
      };
    case types.CREATE_ARTICLE_FAILURE:
      return {
        ...state,
        isCreatingArticle: false
      };

    // Toggle Template Status
    case types.UPDATE_ARTICLE_REQUEST:
      return {
        ...state,
        isCreatingArticle: true
      };
    case types.UPDATE_ARTICLE_SUCCESS:

      return {
        ...state,
        articles : updateSignleData(action.article),
        isCreatingArticle: false
      };
    case types.UPDATE_ARTICLE_FAILURE:
      return {
        ...state,
        isCreatingArticle: false
      };

    case types.DELETE_ARTICLE_REQUEST:
      return {
        ...state,
        isFetchingArticles: true
      };
    case types.DELETE_ARTICLE_SUCCESS:

      const { articles } = state;
      const index = articles.findIndex(i => i.id === action.id);
      articles.splice(index, 1);

      return {
        ...state,
        articles : articles,
        isFetchingArticles: false
      };
    case types.DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        isFetchingArticles: false
      };



    default:
      return state;
  }
};
