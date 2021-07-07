import AppAPI from '../network/AppAPI';
import {
  serializeCarpoolsByBuilding,
  serializeCurrentCarpool,
  serializeNewCarpoolResponse,
  serializeUpdateCarpoolResponse,
} from '../serializers/Carpool.serializer';

class carpoolService {
  static getCarpoolsByBuildingId = buildingId => {
    return AppAPI.get(`/carpools/${buildingId}`).then(response => {
      return serializeCarpoolsByBuilding(response);
    });
  };

  static getCarpoolById = carpoolId => {
    return AppAPI.get(`/carpool/${carpoolId}`).then(response => {
      return serializeCurrentCarpool(response);
    });
  };

  static createCarpool = carpool => {
    return AppAPI.post(`/carpools/create`, carpool).then(response => {
      return serializeNewCarpoolResponse(response);
    });
  };

  static updateCarpool = (carpool, carpoolId) => {
    return AppAPI.put(`/carpools/${carpoolId}`, carpool).then(response => {
      return serializeUpdateCarpoolResponse(response);
    });
  };

  static deleteCarpool = carpoolId => {
    return AppAPI.delete(`/carpools/${carpoolId}`).then(response => {
      return response;
    });
  };
}

export default carpoolService;
