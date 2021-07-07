export const serializeCreateNoteRequest = note => {
  return {
    user_id: note.userId,
    building_id: note.buildingId,
    type: note.noteType,
    date: note.noteDate,
    note: note.noteText,
  };
};

export const serializeUpdateNoteRequest = note => {
  return {
    building_id: note.buildingId,
    type: note.noteType,
    date: note.noteDate,
    note: note.noteText,
  };
};

export const serializeNote = note => {
  return {
    id: note.id,
    userId: note.user_id,
    buildingId: note.building_id,
    creatorId: note.creator_id,
    noteType: note.type,
    noteDate: note.date,
    noteText: note.note,
    updatedAt: note.updated_at,
    createdAt: note.created_at,
  };
};

export const serializeNotes = notes => {
  return notes ? notes.map(serializeNote) : [];
};
