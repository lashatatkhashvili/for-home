import AppAPI from '../network/AppAPI';
import {
  serializeUserAttachments,
  serializeUsers,
  serializeUsersPagination,
  serializeUserWithBuildings,
} from '../serializers/Users.serializer';
import store from '../store';
import { selectRoleId } from '../reducers/auth/auth.selectors';
import NetworkManager from '../network/NetworkManager';
import { saveAs } from 'file-saver';

class usersService {
  static getUsers = () => {
    return AppAPI.get(`/users/without_company`);
  };

  static searchUserByEmail = (email, usersCount) => {
    return AppAPI.post(`/users/search`, { email, num_users: usersCount }).then(response => {
      return response.data;
    });
  };

  static searchUserByName = (name, notInCompany = false) => {
    return AppAPI.post(`/users/search`, {
      name,
      not_in_company: notInCompany,
    }).then(response => {
      return response;
    });
  };

  static searchUserByNameAndBuildingIds = (name, buildingIds, userRoleId, pageNumber, quantity, filter) => {
    const myRoleId = selectRoleId(store.getState());
    return AppAPI.post(`/users/search?page=${pageNumber}`, {
      my_role: myRoleId,
      building_ids: buildingIds,
      name: name || undefined,
      role_id: userRoleId,
      num_users: quantity,
      filter,
    }).then(response => {
      // return serializeUsers(response.data);
      return serializeUsersPagination(response);
    });
  };

  // TODO: This call should not be used!
  static getBuildingUsers = roleId => {
    return AppAPI.get(`/building_users/${roleId}`).then(response => {
      return serializeUsers(response);
    });
  };

  static getUsersByRoleId = (withCompany, userRoleId, pageNumber, quantity) => {
    const myRoleId = selectRoleId(store.getState());
    return AppAPI.get(`/users/${withCompany ? 1 : 0}/${myRoleId}/${userRoleId}/${quantity}?page=${pageNumber}`).then(
      response => {
        return serializeUsers(response.data);
      }
    );
  };

  static getUserBuildings = (userId, roleId) => {
    return AppAPI.get(`/building_users/${roleId}/${userId}`).then(response => {
      return serializeUserWithBuildings(response);
    });
  };

  static changeUsersData = user => {
    return AppAPI.post(`/users/change_data`, {
      user_id: user.id,
      name: user.name,
      phone: user.phone,
      interests: user.interestIds,
      birthday: user.birthday,
    }).then(response => {
      return response;
    });
  };

  static uploadUserAttachments = attachments => {
    return AppAPI.postFile(`/users/files/upload`, attachments).then(response => {
      return serializeUserAttachments(response);
    });
  };

  static getUserAttachments = params => {
    return AppAPI.get(`/users/files`, { user_id: params.userId, building_id: params.buildingId }).then(response => {
      return serializeUserAttachments(response);
    });
  };

  static downloadAttachment = (fileId, saveAsName) => {
    return NetworkManager.download(`/files/${fileId}`).then(blob => {
      saveAs(new Blob([blob]), saveAsName);
      return blob;
    });
  };

  static getUserAttachment = fileId => {
    return NetworkManager.download(`/files/${fileId}`).then(blob => {
      let blobObject = new Blob([blob]);
      return URL.createObjectURL(blobObject);
    });
  };

  static deleteUserAttachments = fileIds => {
    return AppAPI.post(`/users/files/delete`, fileIds);
  };
}

export default usersService;
