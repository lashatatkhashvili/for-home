import AppAPI from '../network/AppAPI';
import { serializeTemplate, selializeTemplates } from '../serializers/Template.serializer';
import { TABLE_ROW_PER_PAGE } from '../constants/misc';

class templateService {
  static getTemplates = (page = 1, category = 0, sortField = 'id', sortDirection = false, type = null) => {
    return AppAPI.get(`/content-template`, {
      limit: TABLE_ROW_PER_PAGE,
      page: page,
      category: category,
      sortField: sortField,
      sortDirection: Number(sortDirection) ? 'ASC' : 'DESC',
      type: type,
    }).then(response => {
      return selializeTemplates(response);
    });
  };

  static getMilestones = () => {
    return AppAPI.get('/milestones/global').then(response => {
      return response;
    });
  };

  static getTemplateCategories = () => {
    return AppAPI.get('/content-template/categories').then(response => {
      return response;
    });
  };

  static createTemplate = data => {
    return AppAPI.postFile('/content-template', data).then(response => {
      return serializeTemplate(response);
    });
  };

  static updateTemplate = (data, id) => {
    return AppAPI.postFile(`/content-template/${id}`, data).then(response => {
      return serializeTemplate(response);
    });
  };

  static deleteTemplate = id => {
    return AppAPI.delete(`/content-template/${id}`).then(response => {
      return response;
    });
  };
  static getPostTags = params => {
    return AppAPI.post(`/hashtags/search`, params).then(response => {
      return response;
    });
  };
  static toggleTemplateStatus = id => {
    return AppAPI.post(`/content-template/${id}/toggle-publishment`).then(response => {
      return response;
    });
  };
}

export default templateService;
