import AppAPI from '../network/AppAPI';
import { serializePark } from '../serializers/Park.serializer';

class parkService {
  static getParks = roleId => {
    return AppAPI.get(`/parks/${roleId}`).then(response => {
      return response.map(park => serializePark(park));
    });
  };

  static createNewPark = park => {
    return AppAPI.postFile(`/park/create`, park).then(response => {
      return serializePark(response);
    });
  };

  static updatePark = (parkId, park) => {
    return AppAPI.postFile(`/park/update/${parkId}`, park).then(response => {
      return serializePark(response);
    });
  };

  static removeParkById = parkId => {
    return AppAPI.delete(`/park/${parkId}`).then(response => {
      return response;
    });
  };

  static assignBuildings = (parkId, buildingIds) => {
    return AppAPI.post(`/park/building/assign`, { park_id: parkId, building_ids: buildingIds }).then(response => {
      return response;
    });
  };

  static unassignBuildings = (parkId, buildingIds) => {
    return AppAPI.post(`/park/building/unassign`, { park_id: parkId, building_ids: buildingIds }).then(response => {
      return response;
    });
  };
}

export default parkService;
