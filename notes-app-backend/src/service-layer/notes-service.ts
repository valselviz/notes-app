import Note from "../domain/Note";
import * as notesRepository from "../persistence-layer/notes-repository";
import { DELETE_ACTIVE_NOTE_ERROR } from "./error-codes";

export const updateNote = async (id: number, note: Note) => {
  return await notesRepository.updateNote(id, note);
};

export const deleteNote = async (id: number) => {
  const note = await notesRepository.getNote(id);
  if (!note.archived) {
    throw new Error(DELETE_ACTIVE_NOTE_ERROR);
  }
  return await notesRepository.deleteNote(id);
};
