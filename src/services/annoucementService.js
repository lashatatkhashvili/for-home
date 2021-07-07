import AppAPI from '../network/AppAPI';
import { serializeAnnoucement , selializeAnnoucements } from '../serializers/Annoucements.serializer';
import { TABLE_ROW_PER_PAGE } from '../constants/misc';

class annoucementService {

  static getAnnoucements = (page = 1) => {
    return AppAPI.get(`/announcements?limit=${TABLE_ROW_PER_PAGE}&page=${page}`).then(response => {
      return selializeAnnoucements(response);
    });
  };


  static createAnnoucement = data => {
    return AppAPI.postFile('/announcement' , data).then(response => {
      return serializeAnnoucement(response);
    });
  };

  static updateAnnoucement = (data , id) => {
    return AppAPI.postFile(`/announcement/${id}` , data).then(response => {
      return serializeAnnoucement(response);
    });
  };

  static deleteAnnoucement = id => {
    return AppAPI.delete(`/announcement/${id}`).then(response => {
      return response;
    });
  };
}

export default annoucementService;
