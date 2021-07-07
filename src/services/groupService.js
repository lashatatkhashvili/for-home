import AppAPI from '../network/AppAPI';
import { serializeGroup, serializeGroups, serializeProfileGroups } from '../serializers/Group.serializer';

class groupService {
  static getGroups = (buildingId, params) => {
    return AppAPI.get(`/groups/building/${buildingId}`, params).then(response => {
      return serializeGroups(response);
    });
  };
  static deleteGroup = id => {
    return AppAPI.delete(`/groups/${id}`).then(response => {
      return response;
    });
  };

  static getCategories = () => {
    return AppAPI.get(`/groups/categories`).then(response => {
      return response;
    });
  };

  static getBuildingUsers = buildingId => {
    return AppAPI.get(`/buildings/${buildingId}/building_users`).then(response => {
      return response;
    });
  };

  static createGroup = formData => {
    return AppAPI.postFile(`/groups/create`, formData).then(response => {
      return serializeGroup(response);
    });
  };

  static updateGroup = (id, formData) => {
    return AppAPI.postFile(`/groups/update/${id}`, formData).then(response => {
      return serializeGroup(response);
    });
  };

  static getGroup = groupId => {
    return AppAPI.get(`/groups/${groupId}`).then(response => {
      return serializeGroup(response);
    });
  };

  static getUserGroups = (buildingId, userId) => {
    return AppAPI.get(`/groups/user-groups/${buildingId}/${userId}`).then(response => {
      return serializeProfileGroups(response);
    });
  };
}

export default groupService;
