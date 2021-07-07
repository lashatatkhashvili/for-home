export const serializeCompany = company => {
  return {
    id: company.id,
    name: company.name,
    logo: company.logo,
    contactName: company.contact_name,
    contactPhone: company.contact_phone,
    createdAt: company.created,
    buildingIds: company.buildings,
  };
};

export const serializeCompanies = companies => {
  return companies.map(company => serializeCompany(company));
};

export const serializeCompanyCreateRequest = formValues => {
  return {
    name: formValues.companyName,
    logo: formValues.companyLogo.file,
    contact_name: formValues.contactName,
    contact_phone: formValues.contactPhone,
    building_ids: formValues.addBuildingIds,
    // upload_files: formValues.addContracts.length ? formValues.addContracts : null,
  };
};

export const serializeCompanyUpdateRequest = formValues => {
  return {
    name: formValues.companyName,
    logo: formValues.companyLogo.file,
    contact_name: formValues.contactName,
    contact_phone: formValues.contactPhone,
    // upload_files: formValues.addContracts.length ? formValues.addContracts : null,
    // remove_files: formValues.deleteContractIds.length ? formValues.deleteContractIds : null,
  };
};
