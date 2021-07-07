import AppAPI from '../network/AppAPI';
import { serializeCreateInactiveTenantRequest } from '../serializers/Tenant.serializer';
import {
  serializCustomFields,
  serializeCustomFieldAnswers,
  serializeUserWithBuildings,
} from '../serializers/Users.serializer';

class tenantService {
  static changeTenantStatus = tenantId => {
    return AppAPI.post(`/users/status`, { user_id: tenantId }).then(response => {
      return serializeUserWithBuildings(response);
    });
  };

  static importMultipleTennats = (tenants, buildingId, companyId) => {
    return AppAPI.post('/users/import', { buildingId, tenants, companyId });
  };

  static createInactiveTenant = formValues => {
    const serializedFormValues = serializeCreateInactiveTenantRequest(formValues);
    return AppAPI.post(`/auth/register`, serializedFormValues);
  };

  static sendTenantEmailToCM = (buildingId, tanantEmail) => {
    return AppAPI.post(`/email/send`, { building_id: buildingId, email: tanantEmail });
  };

  static getMembersCustomFields = id => {
    //building ID
    return AppAPI.get(`/custom-field/${id}`).then(response => {
      return serializCustomFields(response);
    });
  };

  static setMembersCustomFields = (id, fields) => {
    //building ID
    return AppAPI.post(`/custom-field/${id}`, fields).then(response => {
      return serializCustomFields(response);
    });
  };

  static getMemberCustomFieldAnswers = (buildingId, userId) => {
    return AppAPI.get(`/custom-field/${buildingId}/${userId}/answers`).then(response => {
      return serializeCustomFieldAnswers(response);
    });
  };
}

export default tenantService;
