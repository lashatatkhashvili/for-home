import AppAPI from '../network/AppAPI';
import {
  serializeService,
  serializeCategory,
  serializePackage,
  serializePackageFeature,
  serializeExtraFeature,
  serializeSupplier,
  serializeServiceScheduleResponse,
  serializeAvailableDates,
  serializePackageAvailableTimeslots,
  serializeQuestion,
} from '../serializers/Marketplace.serializer';

class marketplaceService {
  static fetchCategories = buildingId => {
    const params = {
      b2b: 1,
      active: 1,
    };
    return AppAPI.get(`/marketplace/categories/${buildingId}`, params).then(response => {
      return response.map(serializeCategory);
    });
  };

  // TODO: need pagination and search-sorting
  static fetchServicesByCategoryAndBuilding = (buildingId, categoryId, search, count) => {
    return AppAPI.post(`/marketplace/service/search`, {
      title: search,
      num_services: count,
      building_id: buildingId,
      category_id: categoryId,
    }).then(response => {
      return response.data.filter(item => item.b_to_b === 1 && item.is_active === 1).map(serializeService);
    });
  };

  static fetchServiceById = serviceId => {
    return AppAPI.get(`/marketplace/service/${serviceId}`).then(response => {
      return serializeService(response);
    });
  };

  static createService = formData => {
    return AppAPI.postFile(`/marketplace/service/create`, formData).then(response => {
      return serializeService(response);
    });
  };

  static createServicePackage = formValues => {
    return AppAPI.post(`/marketplace/package/create`, formValues).then(response => {
      return serializePackage(response);
    });
  };

  static createServicePackageFeature = formValues => {
    return AppAPI.post(`/marketplace/feature/create`, formValues).then(response => {
      return serializePackageFeature(response);
    });
  };

  static createServiceExtraFeature = formValues => {
    return AppAPI.post(`/marketplace/extra/create`, formValues).then(response => {
      return serializeExtraFeature(response);
    });
  };

  static updateService = formData => {
    return AppAPI.postFile(`/marketplace/service/update`, formData).then(response => {
      return serializeService(response);
    });
  };

  static updateServicePackage = formValues => {
    return AppAPI.post(`/marketplace/package/update`, formValues).then(response => {
      return serializePackage(response);
    });
  };

  static updateServicePackageFeature = formValues => {
    return AppAPI.post(`/marketplace/feature/update`, formValues).then(response => {
      return serializePackageFeature(response);
    });
  };

  static updateServiceExtraFeature = formValues => {
    return AppAPI.post(`/marketplace/extra/update`, formValues).then(response => {
      return serializeExtraFeature(response);
    });
  };

  static deleteServicePackages = packageIds => {
    return AppAPI.post(`/marketplace/package/delete`, { package_ids: packageIds });
  };

  static deleteServicePackageFeatures = featureIds => {
    return AppAPI.post(`/marketplace/feature/delete`, { feature_ids: featureIds });
  };

  static deleteServiceExtraFeatures = extraFeatureIds => {
    return AppAPI.post(`/marketplace/extra/delete`, { extra_ids: extraFeatureIds });
  };

  static deleteService = serviceId => {
    return AppAPI.delete(`/marketplace/service/${serviceId}`);
  };

  static fetchSuppliers = () => {
    return AppAPI.get(`/marketplace/suppliers/all`).then(response => {
      return response.map(serializeSupplier);
    });
  };

  static createMarketplaceCategory = formData => {
    return AppAPI.postFile(`/marketplace/category/create`, formData).then(response => {
      return response;
    });
  };

  static updateMarketplaceCategory = formData => {
    return AppAPI.postFile(`/marketplace/category/update`, formData).then(response => {
      return response;
    });
  };

  static deleteMarketplaceCategory = categoryIds => {
    return AppAPI.post(`/marketplace/category/delete`, { category_ids: categoryIds }).then(response => {
      return response;
    });
  };

  static fetchSupplierById = supplierId => {
    return AppAPI.get(`/marketplace/supplier/${supplierId}`).then(response => {
      return response.map(serializeSupplier);
    });
  };

  static createMarketplaceSupplier = formData => {
    return AppAPI.postFile(`/marketplace/supplier/create`, formData).then(response => {
      return response;
    });
  };

  static updateMarketplaceSupplier = formData => {
    return AppAPI.postFile(`/marketplace/supplier/update`, formData).then(response => {
      return response;
    });
  };

  static deleteMarketplaceSupplier = supplierId => {
    return AppAPI.post(`/marketplace/supplier/delete`, { supplier_ids: [supplierId] });
  };

  static createServiceBuildingSchedules = formValues => {
    return AppAPI.post(`/marketplace/service/times`, formValues);
  };

  static updateServiceBuildingSchedules = formValues => {
    return AppAPI.post(`/marketplace/service/times`, formValues);
  };

  static fetchServiceBuildingSchedules = serviceId => {
    return AppAPI.get(`/marketplace/service/dates/${serviceId}`).then(response => {
      return serializeServiceScheduleResponse(response);
    });
  };

  static toggleServiceStatus = serviceId => {
    return AppAPI.post(`/marketplace/service/status`, { service_id: serviceId }).then(response => {
      return response;
    });
  };

  static fetchServiceAvailableTimeslots = (buildingId, packageId, date) => {
    return AppAPI.get(`/marketplace/package/times/${buildingId}/${packageId}/${date}`).then(response => {
      return serializePackageAvailableTimeslots(response);
    });
  };

  static fetchServiceAvailableDates = (buildingId, serviceId, month) => {
    return AppAPI.get(`/marketplace/service/dates/${buildingId}/${serviceId}/${month}`).then(response => {
      return serializeAvailableDates(response);
    });
  };

  static fetchServiceQuestions = serviceId => {
    return AppAPI.get(`/marketplace/service/faqs/${serviceId}`).then(response => {
      return response.map(serializeQuestion);
    });
  };
}

export default marketplaceService;
