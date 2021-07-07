import AppAPI from '../network/AppAPI';
import {
  serializeParking,
  serializeParkingCreateQuery,
  serializeParkingUpdateQuery,
} from '../serializers/Parking.serializer';

class parkingService {
  static fetchParking = buildingId => {
    return AppAPI.get(`/cargate/${buildingId}/users`).then(response => {
      return serializeParking(response);
    });
  };

  static createParking = (buildingId, formValues) => {
    const params = serializeParkingCreateQuery(buildingId, formValues);

    return AppAPI.post(`/cargates/create`, params);
  };

  static updateParking = (buildingId, formValues) => {
    const params = serializeParkingUpdateQuery(buildingId, formValues);

    return AppAPI.post(`/cargates/update/${buildingId}`, params);
  };
}

export default parkingService;
