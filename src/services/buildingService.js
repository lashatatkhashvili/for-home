import AppAPI from '../network/AppAPI';
import {
  serializeBuildings,
  serializeCurrentBuilding,
  serializeBuilding,
  serializeBuildingPublicInfo,
  serializeBuildingForMap,
  serializeGalleryImages,
} from '../serializers/Buildings.serializer';
import { serializeServices } from '../serializers/Services.serializer';
import { selectRoleId } from '../reducers/auth/auth.selectors';
import store from '../store';

class buildingService {
  static getBuildings = () => {
    const myRoleId = selectRoleId(store.getState());
    return this.getBuildingsByRole(myRoleId);
  };

  static getBuildingsByRole = role => {
    return AppAPI.get(`/buildings/role/${role}`).then(response => {
      return serializeBuildings(response.buildings);
    });
  };

  static createBuilding = building => {
    return AppAPI.postFile(`/buildings/create`, building).then(response => {
      return serializeBuilding(response);
    });
  };

  static removeOneBuilding = id => {
    return AppAPI.delete(`/buildings/${id}`).then(response => {
      return response;
    });
  };

  static updateBuilding = (id, building) => {
    return AppAPI.postFile(`/buildings/update/${id}`, building).then(response => {
      return serializeBuilding(response);
    });
  };

  static assignBuildingToUser = (userId, roleId, buildingId) => {
    return AppAPI.post(`/buildings/assign`, {
      user_id: userId,
      role_id: roleId,
      building_id: buildingId,
    }).then(response => {
      return response;
    });
  };

  static unassignUserFromBuilding = (user_id, role_id, building_id) => {
    return AppAPI.post(`/buildings/unassign`, {
      user_id,
      role_id,
      building_id,
    }).then(response => {
      return response;
    });
  };

  static getCurrentBuilding = id => {
    return AppAPI.get(`/buildings/${id}/building_data`).then(response => {
      return serializeCurrentBuilding(response);
    });
  };

  static getBuildingService = id => {
    return AppAPI.get(`/buildings/${id}/services`).then(response => {
      return serializeServices(response);
    });
  };

  static addBuildingService = (building_id, service_id) => {
    return AppAPI.post(`/buildings/add_service`, {
      building_id,
      service_id,
    }).then(response => {
      return response;
    });
  };

  static addBuildingServices = (building_id, service_ids) => {
    return AppAPI.post(`/buildings/services`, {
      building_id,
      service_ids,
    }).then(response => {
      return response;
    });
  };

  static fetchBuildingMinimalInfo = buildingId => {
    return AppAPI.get(`/buildings/companies/${buildingId}`).then(serializeBuildingPublicInfo);
  };

  static fetchAllBuildingWithCoordinates = () => {
    return AppAPI.get(`/buildings/all`).then(response => {
      return response.map(serializeBuildingForMap);
    });
  };

  static fetchGalleryImages = buildingId => {
    return AppAPI.get(`/gallery`).then(serializeGalleryImages);
  };

  static fetchBuildingBy = (metaType, metaValue) => {
    return AppAPI.get(`/get-buildings-by`, { [metaType]: metaValue }).then(response => {
      return serializeBuildings(response);
    });
  };
}

export default buildingService;
