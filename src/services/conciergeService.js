import AppAPI from '../network/AppAPI';
import {
  serializeBuildingRequest,
  serializeBuildingRequests,
  // serializeRequestById,
  serializeRequestComment,
} from '../serializers/Concierge.serializer';
import NetworkManager from '../network/NetworkManager';
import { saveAs } from 'file-saver';
// import { serializeTicket } from '../serializers/Tickets.serializer';

class conciergeService {
  static getBuildingRequests = buildingId => {
    return AppAPI.get(`/requests/${buildingId}`).then(response => {
      return serializeBuildingRequests(response);
    });
  };

  static getHrCompanyRequests = () => {
    return AppAPI.get(`/requests/hr`).then(response => {
      return response.map(serializeBuildingRequest);
    });
  };

  static fetchRequestsCategoriesByBuildingId = buildingId => {
    return AppAPI.get(`/requests/categories/${buildingId}`).then(response => {
      return response;
    });
  };

  static createRequest = newRequest => {
    return AppAPI.post(`/requests/create`, newRequest).then(response => {
      return serializeBuildingRequest(response[0]);
    });
  };

  static fetchRequestById = requestId => {
    return AppAPI.get(`/request/${requestId}`).then(response => {
      // return serializeRequestById(response);
      return serializeBuildingRequest(response);
    });
  };

  static addNewCommentToRequest = (requestId, comment) => {
    return AppAPI.post(`/requests/add_comment/${requestId}`, { comment }).then(response => {
      return serializeRequestComment(response);
    });
  };

  static updateRequest = (requestId, categoryId) => {
    return AppAPI.post(`/requests/update/${requestId}`, { category_id: categoryId });
  };

  static resolveRequest = requestId => {
    return AppAPI.get(`/requests/close/${requestId}`).then(response => {
      return response;
    });
  };

  static createRequestCategories = formValues => {
    return AppAPI.post(`/requests/add_category`, formValues).then(response => {
      return response;
    });
  };

  static removeRequestCategories = categoryIds => {
    return AppAPI.post(`/requests/remove_category`, { category_ids: categoryIds });
  };

  static downloadRequestFile = (fileId, saveAsName) => {
    // return AppAPI.get(`/files/${fileId}`);
    return NetworkManager.download(`/files/${fileId}`).then(blob => {
      saveAs(new Blob([blob]), saveAsName);
      return blob;
    });
  };

  static downloadRequestFileImage = (fileId, saveAsName) => {
    return NetworkManager.download(`/files/${fileId}`).then(blob => {
      let blobObject = new Blob([blob]);
      return URL.createObjectURL(blobObject);
    });
  };
}

export default conciergeService;
