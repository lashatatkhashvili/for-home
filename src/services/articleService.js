import AppAPI from '../network/AppAPI';
import { serializeArticle , selializeArticles  } from '../serializers/Article.serializer';
import { TABLE_ROW_PER_PAGE } from '../constants/misc';

class templateService {

  static getArticles = (page = 1) => {
    return AppAPI.get(`/articles?limit=${TABLE_ROW_PER_PAGE}&page=${page}`).then(response => {
      return selializeArticles(response);
    });
  };

  static getTemplateCategories = () => {
    return AppAPI.get('/content-template/categories').then(response => {
      return response;
    });
  };

  static createArticle = data => {
    return AppAPI.postFile('/article' , data).then(response => {
      return serializeArticle(response);
    });
  };

  static updateArticle = (data , id) => {
    return AppAPI.postFile(`/article/${id}` , data).then(response => {
      return serializeArticle(response);
    });
  };

  static deleteArticle = id => {
    return AppAPI.delete(`/article/${id}`).then(response => {
      return response;
    });
  };
}

export default templateService;
