export const serializeParking = parking => {
  return {
    url: parking.url,
    token: parking.token,
    // TODO: Will require changes
    userIds: parking.whitelist
  }
}

export const serializeParkingCreateQuery = (buildingId, formValues) => {
  return {
    building_id: buildingId,
    url: formValues.parkingUrl,
    token: formValues.parkingToken,
    whitelist_ids: formValues.addUserIds
  }
}

export const serializeParkingUpdateQuery = (buildingId, formValues) => {
  return {
    url: formValues.parkingUrl,
    token: formValues.parkingToken,
    whitelist_ids: formValues.addUserIds,
    blacklist_ids: formValues.deleteUserIds,
  }
}