import * as types from './article.actionTypes';

export const getArticlesRequestActionCreator = () => {
  return { type: types.GET_ARTICLES_REQUEST };
};
export const getArticlesSuccessActionCreator = articles => {
  return {
    type: types.GET_ARTICLES_SUCCESS,
    articles
  };
};
export const getArticlesFailureActionCreator = () => {
  return { type: types.GET_ARTICLES_FAILURE };
};


export const createArticlesRequestActionCreator = () => {
  return { type: types.CREATE_ARTICLE_REQUEST };
};
export const createArticlesSuccessActionCreator = article => {
  return {
    type: types.CREATE_ARTICLE_SUCCESS,
    article
  };
};
export const createArticleFailureActionCreator = () => {
  return { type: types.CREATE_ARTICLE_FAILURE };
};


export const updateArticleRequestActionCreator = () => {
  return { type: types.UPDATE_ARTICLE_REQUEST };
};
export const updateArticleSuccessActionCreator = article => {
  return {
    type: types.UPDATE_ARTICLE_SUCCESS,
    article
  };
};
export const updateArticleFailureActionCreator = () => {
  return { type: types.UPDATE_ARTICLE_FAILURE };
};



export const deleteArticleRequestActionCreator = () => {
  return { type: types.DELETE_ARTICLE_REQUEST };
};
export const deleteArticleSuccessActionCreator = id => {
  return {
    type: types.DELETE_ARTICLE_SUCCESS,
    id
  };
};
export const deleteArticleFailureActionCreator = () => {
  return { type: types.DELETE_ARTICLE_FAILURE };
};

