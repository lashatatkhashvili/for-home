import AppAPI from '../network/AppAPI';
import {
  serializeConference,
  serializeConferences,
  serializeConferenceParticipants,
  serializeConferencesHotels,
  serializeConferencesParticipant,
  serializeEventTypes,
  serializeEventRooms,
  serializeEventTracks,
  serializeConferenceEvents,
  serializeConferenceSpeakers,
  serializeNewEvent,
  serializeConferenceSpeaker,
  serializeEventData,
  serializePaymentMethods,
} from '../serializers/Conference.serializer';

class conferenceService {
  static getConferences = (params = {}) => {
    return AppAPI.get(`/module/conference/all`, params).then(response => {
      return serializeConferences(response);
    });
  };

  static getConference = id => {
    return AppAPI.get(`/module/conference${id && `/${id}`}`).then(response => {
      return serializeConference(response);
    });
  };
  static createConference = formData => {
    return AppAPI.postFile(`/module/conference/create`, formData).then(response => {
      return serializeConference(response);
    });
  };
  static registerConference = (id, formData) => {
    return AppAPI.post(`/module/conference/${id}/reservation/checkout`, formData).then(response => {
      return response;
    });
  };

  static getConferenceParticipants = (id, filters, page, keyword, method, key) => {
    return AppAPI.get(`/module/conference/${id}/participants`, {
      page,
      ...filters,
      keyword,
      direction: method,
      key,
    }).then(response => {
      return serializeConferenceParticipants(response);
    });
  };
  static checkUserID = identifier => {
    return AppAPI.get(`/module/conference/checkID`, { identifier }).then(response => {
      return response ? serializeConferencesParticipant(response) : false;
    });
  };
  static getHotels = (id, params = {}) => {
    return AppAPI.get(`/module/conference/${id}/hotels`, params).then(response => {
      return serializeConferencesHotels(response);
    });
  };
  static reserveHotelRooms = (id, params = {}) => {
    return AppAPI.post(`/module/conference/${id}/reservation/start`, params).then(response => {
      return response;
    });
  };
  static getConferencePayments = id => {
    return AppAPI.get(`/module/conference/${id}/payments`, { id }).then(response => {
      return serializePaymentMethods(response);
    });
  };
  static contactUs = params => {
    return AppAPI.post(`/module/conference/contact`, params).then(response => {
      return response;
    });
  };
  static getEventTypes = id => {
    return AppAPI.get(`/module/conference/${id}/event/type`, ).then(response => {
      return serializeEventTypes(response);
    });
  };
  static getEventRooms = id => {
    return AppAPI.get(`/module/conference/${id}/event/room`, ).then(response => {
      return serializeEventRooms(response);
    });
  };
  static getEventTracks = id => {
    return AppAPI.get(`/module/conference/${id}/event/track`, ).then(response => {
      return serializeEventTracks(response);
    });
  };
  static getConferenceEvents = data => {
    const { id , track , eventType , room } = data;

    return AppAPI.get(`/module/conference/${id}/event`, {
      track,
      eventType,
      room
    } ).then(response => {
      return serializeConferenceEvents(response);
    });
  };

  static getConferenceSpeakers = id => {
    return AppAPI.get(`/module/conference/${id}/event/speaker`, ).then(response => {
      return serializeConferenceSpeakers(response);
    });
  };

  static createConferenceEvent = (id, data) => {
    return AppAPI.post(`/module/conference/${id}/event`, data ).then(response => {
      return serializeNewEvent(response);
    });
  };

  static createConferenceEventSpeaker = (id, data) => {
    console.log('abaaa' , id , data);
    return AppAPI.post(`/module/conference/${id}/event/speaker`, data ).then(response => {
      return serializeConferenceSpeaker(response);
    });
  };

  static checkConferenceEventSpeaker = (id, data) => {
    return AppAPI.get(`/module/conference/${id}/event/check/speaker/${data.id}?eventDate=${data.eventDate}`).then(response => {
      return response;
    });
  };

  static resolveEventSpeakerConflict = (id, eventId, body) => {
    return AppAPI.post(`/module/conference/${id}/event/${eventId}/detach-speaker`, body ).then(response => {
      return response;
    });
  };

  static createEventRoom = (id, name) => {
    return AppAPI.post(`/module/conference/${id}/event/room`, {name : name} ).then(response => {
      return response;
    });
  };

  static createEventTrack = (id, name) => {
    return AppAPI.post(`/module/conference/${id}/event/track`, {name : name} ).then(response => {
      return response;
    });
  };

  static getEventData = id => {
    return AppAPI.get(`/module/conference/${id}/event/types-tracks-rooms-speakers`).then(response => {
      return serializeEventData(response);
    });
  };

}

export default conferenceService;
