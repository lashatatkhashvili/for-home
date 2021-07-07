import AppAPI from '../network/AppAPI';
import {
  serializeRooms,
  serializeCurrentRoom,
  serializeRoomDates,
  serializeRoom,
} from '../serializers/Rooms.serializer';

class roomsService {
  static getBuildingRooms = id => {
    return AppAPI.get(`/rooms/${id}`).then(response => {
      return serializeRooms(response.rooms);
      // return response.rooms;
    });
  };

  static getBuildingRoom = id => {
    return AppAPI.get(`/room/${id}`).then(response => {
      return serializeCurrentRoom(response);
    });
  };

  static createNewRoom = roomInfo => {
    return AppAPI.postFile(`/rooms/create`, roomInfo).then(response => {
      return serializeRoom(response);
    });
  };

  static updateBuildingRoom = (roomId, roomInfo) => {
    return AppAPI.postFile(`/rooms/update/${roomId}`, roomInfo).then(response => {
      return serializeRoom(response);
    });
  };

  static createNewRoomDates = (roomId, dates) => {
    return AppAPI.post(`/room/closed`, { room_id: roomId, from_to: dates }).then(response => {
      return serializeRoomDates(response);
    });
  };

  static removeRoomDates = dateIds => {
    return AppAPI.post(`/room/closed/delete`, { unavilable_ids: dateIds }).then(response => {
      return response;
    });
  };

  static removeRoom = id => {
    return AppAPI.delete(`/rooms/${id}`).then(response => {
      return response;
    });
  };

  static getBuildingRoomsByDate = (buildingId, date) => {
    return AppAPI.get(`/rooms/${buildingId}/${date}`).then(response => {
      return serializeRooms(response.rooms);
    });
  };
}

export default roomsService;
