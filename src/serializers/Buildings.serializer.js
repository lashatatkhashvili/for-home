import { serializeUser } from './Users.serializer';
import { getPublicFileDownloadUrl } from '../utils/helpers';

export const serializeBuilding = building => {
  return {
    id: building.id,
    name: building.name,
    address: building.address,
    latitude: building.lat,
    longitude: building.lng,
    thumbnail: building.thumbnail_image,
    background: building.background_image,
    logo: building.branding_logo,
    isActiveBranding: Boolean(building.is_branding_active),
    parkId: building.park_id,
  };
};

export const serializeNewBuildingRequest = building => {
  return {
    name: building.name,
    address: building.address,
    lat: building.latitude,
    lng: building.longitude,
    thumbnail_image: building.thumbnail,
    background_image: building.background,
    branding_logo: building.logo,
    is_branding_active: Number(building.isActiveBranding),
  };
};

export const serializeCurrentBuilding = building => {
  const serializedUsersByRoles = {};
  Object.keys(building.user_and_roles).forEach(roleId => {
    const users = building.user_and_roles[roleId];
    serializedUsersByRoles[roleId] = users.map(user => serializeUser(user));
  });
  return {
    ...serializeBuilding(building),
    users: serializedUsersByRoles,
  };
};

export const serializeBuildings = response => {
  const buildings = !response ? [] : response.map(building => serializeBuilding(building));

  return buildings;
};

export const serializeBuildingPublicInfo = response => {
  return {
    id: response.id,
    name: response.name,
    image: response.thumbnail_image,
    companies: response.company,
  };
};

export const serializeBuildingForMap = response => {
  return {
    id: response.id,
    name: response.name,
    address: response.address,
    latitude: response.lat,
    longitude: response.lng,
    image: response.thumbnail_image,
  };
};

export const serializeGalleryImages = response => {
  return {
    tags: response[0].tags.map(tag => {
      return { id: tag.id, name: tag.tag };
    }),
    images: response[0].images.map(image => {
      return {
        id: image.id,
        fileId: image.file_id,
        url: getPublicFileDownloadUrl(image.file_id),
        name: image.name,
        tags: image.tags.map(tag => tag.id),
      };
    }),
  };
};
