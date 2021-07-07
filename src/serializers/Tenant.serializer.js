import moment from 'moment';

export const serializeCreateInactiveTenantRequest = formValues => {
  return {
    name: formValues.name,
    phone: formValues.phone,
    email: formValues.email,
    company_id: formValues.companyId,
    building_id: formValues.buildingId,
  };
};

export const serializeMultipletenants = tenants => {
  return tenants.map(tenant => {
    return {
      name: tenant.name,
      surname: tenant.surname,
      phone: tenant.phone,
      email: tenant.email,
      birthday: tenant.birthday.format('YYYY-MM-DD'),
    };
  });
};

export const deserializeMultipleTenants = tenants => {
  return tenants.map(tenant => ({
    name: tenant.name,
    surname: tenant.surname,
    phone: tenant.phone,
    email: tenant.email,
    birthday: moment(tenant.birthday),
  }));
};
