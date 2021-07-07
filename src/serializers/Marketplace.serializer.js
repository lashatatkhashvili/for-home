// import { scheduleWeekly } from '../utils/serviceEntities';
import { getIn } from 'formik';
import moment from 'moment';
import { isEmpty } from 'lodash';

export const serializeCategory = response => {
  return {
    id: response.id,
    image: response.image,
    title: response.title,
    description: response.description,
    services: response.services && response.services.map(serializeCategoryService),
    servicesCount: response.services_count,
  };
};

export const serializeCategoryService = response => {
  return {
    id: response.id,
    title: response.title,
    type: response.type,
  };
};

export const serializeService = response => {
  return {
    id: response.id,
    category: response.category && serializeCategory(response.category),
    supplierId: response.supplier_id,
    categoryId: response.category_id,
    latitude: response.lat,
    longitude: response.lng,
    radius: response.radius,
    buildingIds: response.buildings && response.buildings.map(item => item.building_id),
    title: response.title,
    description: response.description,
    images: response.images && response.images.map(serializeServiceImage),
    packages: response.packages && response.packages.map(serializePackage),
    extraFeatures: response.extras && response.extras.map(serializeExtraFeature),
    createdAt: response.created_at,
    updatedAt: response.updated_at,
    startingPrice: response.starting_price,
    isActive: Boolean(response.is_active),
    type: response.type,
    externalUrl: response.external_url,
    externalUrlText: response.external_url_text,
  };
};

export const serializePackage = response => {
  return {
    id: response.id,
    title: response.title,
    description: response.description,
    price: parseFloat(response.price),
    duration: response.duration,
    features: response.features && response.features.map(serializePackageFeature),
  };
};

export const serializePackageFeature = response => {
  return {
    id: response.id,
    title: response.text,
  };
};

export const serializeExtraFeature = response => {
  return {
    id: response.id,
    title: response.text,
    price: parseFloat(response.price),
  };
};

export const serializeQuestion = response => {
  return {
    id: response.id,
    question: response.question,
    answer: response.answer,
  };
};

export const serializeServiceImage = response => {
  return {
    id: response.id,
    serviceId: response.marketplace_service_id,
    image: response.image,
    createdAt: response.created_at,
    updatedAt: response.updated_at,
  };
};

export const serializeCreateServiceRequest = formValues => {
  return {
    title: formValues.title,
    description: formValues.description,
    building_ids: formValues.includedBuildingIds.filter(
      buildingId => !formValues.excludedBuildingIds.includes(buildingId)
    ),
    category_id: formValues.categoryId,
    supplier_id: formValues.supplierId,
    lat: formValues.latitude,
    lng: formValues.longitude,
    radius: formValues.radius,
    images: formValues.addImages.map(image => image.file),
  };
};

export const serializeCreateServicePackageRequest = (serviceId, formValues) => {
  return {
    marketplace_services_id: serviceId,
    title: formValues.title,
    description: formValues.description,
    price: formValues.price,
    duration: Number(formValues.duration),
  };
};

export const serializeCreateServicePackageFeatureRequest = (packageId, formValues) => {
  return {
    marketplace_packages_id: packageId,
    text: formValues.title,
  };
};

export const serializeCreateServiceExtraFeatureRequest = (serviceId, formValues) => {
  return {
    marketplace_services_id: serviceId,
    text: formValues.title,
    price: formValues.price,
  };
};

export const serializeUpdateServiceRequest = formValues => {
  return {
    service_id: formValues.id,
    title: formValues.title,
    description: formValues.description,
    category_id: formValues.categoryId,
    supplier_id: formValues.supplierId,
    lat: formValues.latitude,
    lng: formValues.longitude,
    radius: formValues.radius,
    images: formValues.addImages.map(image => image.file),
    delete_images: formValues.deleteImageIds,
    building_ids: !formValues.includedBuildingIds.length
      ? formValues.currentBuildingIds
      : formValues.includedBuildingIds.filter(buildingId => !formValues.excludedBuildingIds.includes(buildingId)),
  };
};

export const serializeUpdateServicePackageRequest = (serviceId, formValues) => {
  return {
    marketplace_services_id: serviceId,
    package_id: formValues.id,
    title: formValues.title,
    description: formValues.description,
    price: formValues.price,
    duration: Number(formValues.duration),
  };
};

export const serializeUpdateServicePackageFeatureRequest = (packageId, formValues) => {
  return {
    marketplace_packages_id: packageId,
    feature_id: formValues.id,
    text: formValues.title,
  };
};

export const serializeUpdateServiceExtraFeatureRequest = (serviceId, formValues) => {
  return {
    marketplace_services_id: serviceId,
    extra_id: formValues.id,
    text: formValues.title,
    price: formValues.price,
  };
};

export const serializeSupplier = response => {
  return {
    id: response.id,
    name: response.name,
    key: response.key,
    image: response.image,
    description: response.description,
    servicesCount: response.services,
  };
};

export const serializeCreateCategoryRequest = formValues => {
  return {
    category_id: formValues.categoryId,
    title: formValues.categoryName,
    image: formValues.thumbnail,
  };
};

export const serializeCreateSupplierRequest = formValues => {
  return {
    supplier_id: formValues.id,
    name: formValues.name,
    key: formValues.key,
    description: formValues.description,
    image: formValues.image.file,
  };
};

export const serializeCreateServiceScheduleRequest = (serviceId, buildingSchedules) => {
  return {
    service_id: serviceId,
    buildings: buildingSchedules.map(serializeCreateBuildingSchedule),
  };
};

export const serializeCreateBuildingSchedule = formValues => {
  return {
    building_id: formValues.buildingId,
    weekly: serializeBuildingScheduleWeek(formValues.weekly),
    dates: formValues.dates ? formValues.dates.map(serializeBuildingScheduleDate) : null,
    toDelete: null,
  };
};

export const serializeBuildingScheduleWeek = formValues => {
  if (!formValues) return null;
  return {
    weekdays: formValues.weekDays,
    timeFrom: formValues.timeFrom,
    timeTo: formValues.timeTo,
    repeat: formValues.repeat,
  };
};

export const serializeBuildingScheduleDate = formValues => {
  return {
    date: formValues.date.format('YYYY-MM-DD'),
    timeFrom: formValues.timeFrom,
    timeTo: formValues.timeTo,
  };
};

export const serializeServiceScheduleResponse = response => {
  const buildingIds = response.buildings;
  return buildingIds.map(buildingId => {
    const weekly = getIn(response, `weekly.${buildingId}`);
    const dates = getIn(response, `dates.${buildingId}`);
    return {
      buildingId: buildingId,
      weekly: (weekly && serializeBuildingScheduleWeekResponse(weekly)) || null,
      dates: (dates && dates.map(serializeBuildingScheduleDateResponse)) || null,
    };
  });
};

export const serializeBuildingScheduleDateResponse = response => {
  return {
    date: moment(response.date),
    timeFrom: response.time_from.substring(0, 5),
    timeTo: response.time_to.substring(0, 5),
  };
};

export const serializeBuildingScheduleWeekResponse = response => {
  return {
    weekDays: response.days,
    timeFrom: response.time_from.substring(0, 5),
    timeTo: response.time_to.substring(0, 5),
    repeat: response.repeat || 0,
  };
};

export const serializeUpdateServiceScheduleRequest = (serviceId, currentSchedule, newSchedule) => {
  const currentScheduleBuildingIds = currentSchedule.map(schedule => schedule.buildingId);
  const newScheduleBuildingIds = newSchedule.map(schedule => schedule.buildingId);
  const deletedBuildingSchedules = currentScheduleBuildingIds.filter(
    buildingId => !newScheduleBuildingIds.includes(buildingId)
  );
  return {
    service_id: serviceId,
    buildings_delete: deletedBuildingSchedules.length ? deletedBuildingSchedules : null,
    buildings: newSchedule.map(scheduleItem => {
      const currentScheduleItem = currentSchedule.find(item => item.buildingId === scheduleItem.buildingId);
      return {
        building_id: scheduleItem.buildingId,
        weekly: (scheduleItem.weekly && serializeBuildingScheduleWeek(scheduleItem.weekly)) || null,
        dates: (scheduleItem.dates && scheduleItem.dates.map(serializeBuildingScheduleDate)) || null,
        toDelete: findScheduleItemDatesToDelete(currentScheduleItem, scheduleItem),
      };
    }),
  };
};

const findScheduleItemDatesToDelete = (currentScheduleItem, newScheduleItem) => {
  if (!currentScheduleItem) return null;

  let toDeleteWeekDays = null;
  let toDeleteDates = null;

  if (!newScheduleItem.weekly && currentScheduleItem.weekly) {
    toDeleteWeekDays = [...currentScheduleItem.weekly.weekDays];
  } else if (newScheduleItem.weekly && currentScheduleItem.weekly) {
    toDeleteWeekDays = currentScheduleItem.weekly.weekDays.filter(
      dayId => !newScheduleItem.weekly.weekDays.includes(dayId)
    );
  }

  if ((!newScheduleItem.dates || !newScheduleItem.dates.length) && currentScheduleItem.dates) {
    toDeleteDates = currentScheduleItem.dates.map(dateObject => dateObject.date.format('YYYY-MM-DD'));
  } else if (newScheduleItem.dates && newScheduleItem.dates.length && currentScheduleItem.dates) {
    const newScheduleItemDateStrings = newScheduleItem.dates.map(dateObject => dateObject.date.format('YYYY-MM-DD'));
    toDeleteDates = currentScheduleItem.dates
      .filter(dateObject => !newScheduleItemDateStrings.includes(dateObject.date.format('YYYY-MM-DD')))
      .map(dateObject => dateObject.date.format('YYYY-MM-DD'));
  }

  if (isEmpty(toDeleteWeekDays) && isEmpty(toDeleteDates)) {
    return null;
  } else {
    return {
      weekly: !isEmpty(toDeleteWeekDays) ? toDeleteWeekDays : null,
      dates: !isEmpty(toDeleteDates) ? toDeleteDates : null,
    };
  }
};

export const serializeAvailableDates = response => {
  let dates = [];
  if (response.dates) {
    dates = [...dates, ...response.dates.map(item => item.date)];
  }
  if (response.weekly) {
    dates = [...dates, ...response.weekly.dates];
  }
  return dates.sort();
};

export const serializePackageAvailableTimeslots = response => {
  return {
    availableSlots: response.avilable_slots
      ? response.avilable_slots.map(slot => {
          return {
            time: slot.time,
            availablePlaces: slot.places_left,
          };
        })
      : [],
    mySlots: response.my_slots ? response.my_slots.map(slot => slot) : [],
  };
};
