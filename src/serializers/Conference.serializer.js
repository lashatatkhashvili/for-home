import moment from 'moment';
// import { number } from 'prop-types';

export const serializeAccomodationRooms = rooms => {
  return rooms.map(room => {
    return {
      ...room,
      price: JSON.parse(room.price).join('/'),
    };
  });
};

export const serializeConference = conference => {
  return {
    id: conference.id,
    name: conference.name,
    active: conference.active,
    image: conference.image ? process.env.REACT_APP_API_URL + '/files/' + conference.image : null,
    // accommodations: conference.hotels,
    accommodations:
      conference.hotels &&
      conference.hotels.map(hotel => ({ ...hotel, rooms: hotel.rooms ? serializeAccomodationRooms(hotel.rooms) : [] })),
    companies: conference.companies,
  };
};

export const serializeConferences = conferences => {
  return {
    conferences: conferences ? conferences.map(conference => serializeConference(conference)) : [],
  };
};

export const serializeParticipant = participant => {
  return {
    id: participant.id,
    createdAt: participant.created_at,
    updatedAt: participant.updated_at,
    userId: participant.user_id,
    firstName: participant.first_name,
    lastName: participant.last_name,
    phone: participant.phone,
    email: participant.email,
    company: participant.company,
    companyId: participant.company_id,
    experience: participant.experience,
    status: participant.status,
    paymentMethod: participant.payment_method,
    paymentMethodId: participant.payment_method_id,
    accommodation: participant.accommodation,
    accommodationTier: participant.accommodation_tier,
  };
};

export const serializeConferenceParticipants = participants => {
  const { current_page, data, total } = participants;
  return {
    page: current_page,
    data: data.map(participant => serializeParticipant(participant)),
    total,
  };
};
export const serializeHotel = hotel => {
  return {
    id: hotel.id,
    name: hotel.name,
    address: hotel.address,
    image: hotel.image ? process.env.REACT_APP_API_URL + '/files/' + hotel.image : null,
    rooms: hotel.rooms.map(room => {
      return {
        id: room.id,
        type: room.type,
        price: JSON.parse(room.price).map(price => Number(price)),
        beds: room.beds,
        amount: room.amount,
        image: room.image ? process.env.REACT_APP_API_URL + '/files/' + room.image : null,
      };
    }),
  };
};

export const serializeConferencesHotels = hotels => {
  return hotels ? hotels.map(hotel => serializeHotel(hotel)) : [];
};
export const serializeConferencesParticipant = user => {
  return {
    name: user.firstName,
    lastname: user.lastName,
    phone: user.phone,
    email: user.email,
    company: user.company,
    expertise: user.expertise,
    role: user.role,
  };
};




const serializeEventType = event => {
  return {
    id : event.id,
    name : event.name,
    icon : event.icon,
    conference_id : event.conference_id
  }
};
export const serializeEventTypes = eventTypes => {
  return {
    eventTypes : eventTypes && eventTypes.length ? eventTypes.map(event => serializeEventType(event)) : []
  }
};




export const serializeEventRooms = eventRooms => {
  return {
    eventRooms : eventRooms && eventRooms.length ? eventRooms.map(room => serializeEventRoom(room)) : []
  }
};
const serializeEventRoom = room => {
  return {
    id : room.id,
    name : room.name,
    conference_id : room.conference_id
  }
};




export const serializeEventTracks = tracks => {
  return {
    eventTracks : tracks && tracks.length ? tracks.map(track => serializeEventTrack(track)) : []
  }
};

const serializeEventTrack = track => {
  return {
    id : track.id,
    name : track.name,
    conference_id : track.conference_id
  }
};



export const serializeConferenceEvents = events => {
  return {
    conferenceEvents : events && events.length ? events.map(event => serializeConferenceEvent(event)) : []
  }
};

const serializeConferenceEvent = event => {
  return {
    id : event.id,
    title : event.title,
    description : event.description,
    start : moment(event.start_at).toDate(),
    end : moment(event.finish_at).toDate(),
    conference_id : event.conference_id,
    type_id : event.type_id,
    track_id : event.track_id,
    room_id : event.room_id,
    speakers : event.speakers
  }
};

export const serializeConferenceSpeakers = speakers => {
  return {
    conferenceSpeakers : speakers && speakers.length ? speakers.map(speaker => serializeConferenceSpeaker(speaker)) : []
  }
};

export const serializeConferenceSpeaker = speaker => {
  return {
    id : speaker.id,
    name : speaker.name,
    surname : speaker.surname,
    email : speaker.email,
    conference_id : speaker.conference_id
  }
};

export const serializeNewEvent = event => {
  return {
    id : event.id,
    title : event.title,
    description : event.description,
    start_at : event.start_at,
    finish_at : event.finish_at,
    conference_id : 8,
    type_id : event.type_id,
    track_id : event.track_id,
    room_id : event.room_id,
    speakers : event.speakers
  }
};

export const serializeEventData = data => {
  return {
    eventTypes : serializeEventTypes(data.types),
    eventTracks : serializeEventTracks(data.tracks),
    eventRooms :  serializeEventRooms(data.rooms),
    eventSpeakers : serializeConferenceSpeakers(data.speakers)
  }
};
export const serializePaymentMethods = data => {
  let tmp = {};
  if (data.card) {
    tmp.card = data.card_reservation_duration;
  }
  if (data.cash) {
    tmp.cash = data.cash_reservation_duration;
  }
  if (data.mtransfer) {
    tmp.mtransfer = data.mtransfer_reservation_duration;
  }
  if (data.cheque) {
    tmp.cheque = data.cheque_reservation_duration;
  }
  return tmp;
};
