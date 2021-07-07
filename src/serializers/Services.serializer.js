import { SERVICES } from '../utils/services';

export const serializeService = (serviceId, availableServices) => {
  const service = SERVICES[serviceId];
  return {
    ...service,
    id: serviceId,
    isChecked: availableServices.some(currService => currService.service_id === serviceId) ? true : false,
  };
};

export const serializeServices = response => {
  const services = Object.keys(SERVICES).map(serviceId => serializeService(Number(serviceId), response));

  return services;
};
