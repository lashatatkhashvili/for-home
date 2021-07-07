export const serializeCarpoolsByBuilding = response => {
  return Object.keys(response)
    .map(carpoolItem => {
      return response[carpoolItem].map(carpool => {
        return {
          id: carpool.id,
          comment: carpool.comment,
          date: carpool.date,
          driver: carpool.driver,
          identifier: carpool.identifier,
          isBooked: carpool.is_booked,
          plateNumber: carpool.license_plate,
          numberOfSeats: carpool.number_of_seats,
          occupiedSeats: carpool.occupied_seats,
          phone: carpool.phone,
          stations: carpool.stations,
          from: carpool.from,
          to: carpool.to,
          buildingId: carpool.building_id,
        };
      });
    })
    .flat();
};

export const serializeCurrentCarpool = response => {
  return {
    id: response.id,
    comment: response.comment,
    date: response.date,
    driver: response.driver,
    identifier: response.identifier,
    isBooked: response.is_booked,
    plateNumber: response.license_plate,
    numberOfSeats: response.number_of_seats,
    occupiedSeats: response.occupied_seats,
    phone: response.phone,
    stations: response.stations,
    from: response.from,
    to: response.to,
    buildingId: response.building_id,
  };
};

export const serializeNewCarpoolRequest = request => {
  return {
    building_id: request.currentBuildingId,
    license_plate: request.plateNumber,
    number_of_seats: request.numberOfSeats,
    comment: request.comment,
    stations: request.stations,
    from: request.from,
    to: request.to,
    date: `${request.selectedDate} ${request.selectedTime}`,
    by_company: 1,
  };
};

export const serializeNewCarpoolResponse = response => {
  return {
    id: response.id,
    driver: response.driver,
    plateNumber: response.license_plate,
    numberOfSeats: response.number_of_seats,
    occupiedSeats: 0,
    comment: response.comment,
    stations: response.stations,
    from: response.from,
    to: response.to,
    date: response.date,
  };
};

export const serializeUpdateCarpoolRequest = request => {
  return {
    id: request.id,
    building_id: request.currentBuildingId,
    license_plate: request.plateNumber,
    number_of_seats: request.numberOfSeats,
    comment: request.comment,
    stations: request.stations,
    from: request.from,
    to: request.to,
    date: `${request.selectedDate} ${request.selectedTime}`,
  };
};

export const serializeUpdateCarpoolResponse = response => {
  return {
    id: response.id,
    // driver: response.driver,
    plateNumber: response.license_plate,
    numberOfSeats: response.number_of_seats,
    occupiedSeats: response.occupied_seats,
    comment: response.comment,
    stations: response.stations,
    from: response.from,
    to: response.to,
    date: response.date,
    buildingId: response.building_id,
  };
};
