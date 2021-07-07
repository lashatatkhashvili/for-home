import {
  getArticlesRequestActionCreator,
  getArticlesSuccessActionCreator,
  getArticlesFailureActionCreator,

  createArticlesRequestActionCreator,
  createArticlesSuccessActionCreator,
  createArticleFailureActionCreator,

  updateArticleRequestActionCreator,
  updateArticleSuccessActionCreator,
  updateArticleFailureActionCreator,

  deleteArticleRequestActionCreator,
  deleteArticleSuccessActionCreator,
  deleteArticleFailureActionCreator

} from './article.actionCreators';
import articleService from '../../services/articleService';
import { serializeArticleFilesUpload , serializeArticleUpdate  } from '../../serializers/Article.serializer';
import objectToFormData from "object-to-formdata";


// Get All Articles
export const getArticlesAction = page => {
  return async (dispatch) => {
    try{

      dispatch(getArticlesRequestActionCreator());

      const articles = await articleService.getArticles(page);

      dispatch(getArticlesSuccessActionCreator(articles));

    }catch(err){
      dispatch(getArticlesFailureActionCreator(err))
    }

  };
};

// Create New Article
export const createArticleteAction = data => {
  return async (dispatch) => {
    try{

      dispatch(createArticlesRequestActionCreator());

      const serializedData = objectToFormData(serializeArticleFilesUpload(data));

      const article = await articleService.createArticle(serializedData);

      dispatch(createArticlesSuccessActionCreator(article));

    }catch(err){
      dispatch(createArticleFailureActionCreator(err))
    }

  };
};

// Update Article
export const updateArticleAction = (data , id) => {
  return async (dispatch) => {
    try{

      dispatch(updateArticleRequestActionCreator());

      const serializedData = objectToFormData(serializeArticleUpdate(data));

      const article = await articleService.updateArticle(serializedData , id);

      dispatch(updateArticleSuccessActionCreator(article));

    }catch(err){
      dispatch(updateArticleFailureActionCreator(err))
    }

  };
};

// Delete Artice
export const deleteArticleAction = id => {
  return async (dispatch) => {
    try{

      dispatch(deleteArticleRequestActionCreator());


      await articleService.deleteArticle(id);

      dispatch(deleteArticleSuccessActionCreator(id));

    }catch(err){
      dispatch(deleteArticleFailureActionCreator(err))
    }

  };
};
