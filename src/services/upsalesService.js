import AppAPI from '../network/AppAPI';
import { serializeUpsale, serializeUpsales } from '../serializers/Upsales.serializer';

class upsalesService {
  static fetchAllUpsales = () => {
    return AppAPI.get(`/banner`).then(response => {
      return serializeUpsales(response);
    });
  };

  static fetchUpsale = bannerId => {
    return AppAPI.get(`/banner/${bannerId}`).then(response => {
      return response;
    });
  };

  static createUpsale = data => {
    return AppAPI.postFile(`/banner`, data).then(response => {
      return serializeUpsale(response);
    });
  };

  static updateUpsale = (bannerId, data) => {
    return AppAPI.postFile(`/banner/${bannerId}`, data).then(response => {
      return serializeUpsale(response);
    });
  };

  static deleteUpsale = bannerId => {
    return AppAPI.delete(`/banner/${bannerId}`).then(response => {
      return response;
    });
  };
}

export default upsalesService;
