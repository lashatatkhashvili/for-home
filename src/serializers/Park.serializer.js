export const serializePark = park => {
  return {
    id: park.id,
    name: park.name,
    address: park.address,
    logo: park.logo,
    buildingIds: park.building_ids,
  };
};

export const serializeNewPark = park => {
  return {
    name: park.name,
    address: park.address,
    logo: park.thumbnail,
    building_ids: park.buildingIds,
  };
};

export const serializeUpdatedPark = park => {
  return {
    name: park.name,
    address: park.address,
    logo: park.thumbnail,
    buildingsToAssign: park.buildingsToAssign,
    buildingsToUnassign: park.buildingsToUnassign,
  };
};
