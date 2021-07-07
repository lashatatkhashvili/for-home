import AppAPI from '../network/AppAPI';
import { serializeCompanies, serializeCompany } from '../serializers/Company.serializer';
import { serializeBuildings } from '../serializers/Buildings.serializer';
import * as requests from '../constants/requests';
import NetworkManager from '../network/NetworkManager';
import { saveAs } from 'file-saver';

class companyService {
  static getCompaniesByRoleId = roleId => {
    return AppAPI.get(`/${roleId}/companies`).then(respsone => {
      return serializeCompanies(respsone);
    });
  };

  static getCompanyBuildings = companyId => {
    return AppAPI.get(`/company/${companyId}/buildings`).then(resposone => {
      return serializeBuildings(resposone);
    });
  };

  static assignUsersToCompany = (companyId, userIds, roleId) => {
    return AppAPI.post(`/company/assign`, {
      company_id: companyId,
      user_ids: userIds,
      role_id: roleId,
    }).then(response => {
      return response;
    });
  };

  static unassignUsersToCompany = (userIds, roleId) => {
    return AppAPI.post(`/company/unassign`, {
      user_ids: userIds,
      role_id: roleId,
    }).then(response => {
      return response;
    });
  };

  static assignBuildingsToCompany = (companyId, buildingIds) => {
    return AppAPI.post(`/company/building/assign`, {
      company_id: companyId,
      building_ids: buildingIds,
    }).then(response => {
      return response;
    });
  };

  static unassignBuildingsToCompany = (companyId, buildingIds) => {
    return AppAPI.post(`/company/building/unassign`, {
      company_id: companyId,
      building_ids: buildingIds,
    }).then(response => {
      return response;
    });
  };

  static getCompany = id => {
    return AppAPI.get(`/company/${id}`).then(response => {
      const { files, ...restOfCompany } = response.company;
      response.company = serializeCompany(restOfCompany);
      response.files = files;
      return response;
    });
  };

  static createCompany = formData => {
    return AppAPI.postFile(`/company/create`, formData).then(resposone => {
      return serializeCompany(resposone);
    });
  };

  static updateCompany = (companyId, formData) => {
    return AppAPI.postFile(`/company/update/${companyId}`, formData).then(response => {
      return serializeCompanies(response);
    });
  };

  static downloadContract = (fileId, saveAsName) => {
    return NetworkManager.download(requests.DOWNLOAD_COMPANY_FILE.replace(':fileId', fileId)).then(blob => {
      saveAs(new Blob([blob]), saveAsName);
      return blob;
    });
  };
}

export default companyService;
