import AppAPI from '../network/AppAPI';
import { serializeNote, serializeNotes } from '../serializers/Note.serializer';

class noteService {
  static creteNote = note => {
    return AppAPI.post(`/notes/create`, note).then(response => {
      return serializeNote(response);
    });
  };

  static fetchNotes = params => {
    return AppAPI.get(`/notes`, { user_id: params.userId, building_id: params.buildingId }).then(response => {
      return serializeNotes(response);
    });
  };

  static fetchNoteById = noteId => {
    return AppAPI.get(`/notes/${noteId}`).then(response => {
      return serializeNote(response);
    });
  };

  static updateNoteById = (noteId, note) => {
    return AppAPI.post(`/notes/update/${noteId}`, note).then(response => {
      return serializeNote(response);
    });
  };

  static removeNoteById = noteId => {
    return AppAPI.delete(`/notes/${noteId}`);
  };
}

export default noteService;
