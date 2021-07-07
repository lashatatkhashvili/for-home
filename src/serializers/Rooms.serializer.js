export const serializeRoom = room => {
  return {
    id: room.id,
    name: room.name,
    roomNumber: room.room_number,
    image: room.background_image,
    seats: room.seats,
    availability: room.avilability_type_id,
    slots: room.slots ? serializeRoomSlots(room.slots) : [],
  };
};

export const serializeRoomSlots = slots => {
  return slots.map(slot => {
    return {
      startTime: slot.startTime,
      endTime: slot.endTime,
      slotTimeId: slot.slot_time_id,
      status: slot.status,
      userName: slot.users_name,
      companyName: slot.company_name,
    };
  });
};

export const serializeCurrentRoom = room => {
  return {
    id: room.id,
    name: room.name,
    roomNumber: room.room_number,
    seats: room.seats,
    location: room.location,
    thumbnail: room.background_image,
    availability: room.avilability_type_id,
    buildingId: room.building_id,
    closedOnList: serializeRoomDates(room.unavilable),
  };
};

export const serializeRoomDate = date => {
  return {
    id: date.id,
    roomId: date.room_id,
    from: date.fromDate,
    to: date.toDate,
  };
};

export const serializeRoomDates = dates => {
  return dates.map(date => serializeRoomDate(date));
};

export const serializeRooms = response => {
  const rooms = !response ? [] : response.map(room => serializeRoom(room));
  return rooms;
};

export const serializeNewRoomRequest = request => {
  return {
    name: request.name,
    seats: Number(request.seats),
    room_number: Number(request.roomNumber),
    location: request.location,
    avilability_type_id: Number(request.availability),
    background_image: request.thumbnail,
    building_id: request.buildingId,
  };
};
