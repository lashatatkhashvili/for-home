import AppAPI from '../network/AppAPI';
import { serializeEvent, serializeEventParticipant, serializePreviousEvents } from '../serializers/Event.serializer';

class eventService {
  static fetchBuildingEvents = buildingId => {
    return AppAPI.get(`/buildings/${buildingId}/events`).then(response => {
      return response.events.map(serializeEvent);
    });
  };

  static fetchBuildingsPreviousEvents = (buildingId, page) => {
    return AppAPI.get(`/buildings/${buildingId}/events/older?page=${page}`).then(serializePreviousEvents);
  };

  static fetchEvent = eventId => {
    return AppAPI.get(`/events/${eventId}`).then(response => {
      return serializeEvent(response);
    });
  };

  static createEvent = formData => {
    return AppAPI.postFile(`/events/create`, formData).then(response => {
      return serializeEvent(response);
    });
  };

  static updateEvent = (eventId, formData) => {
    return AppAPI.postFile(`/events/update/${eventId}`, formData).then(response => {
      return serializeEvent(response);
    });
  };

  static removeEvent = eventId => {
    return AppAPI.delete(`/events/${eventId}`).then(response => {
      return response;
    });
  };

  static isGoingEvent = (eventId, isGoing) => {
    return AppAPI.post(`/events/is_going`, { event_id: eventId, is_going: Number(isGoing) }).then(response => {
      return serializeEventParticipant(response);
    });
  };
}

export default eventService;
