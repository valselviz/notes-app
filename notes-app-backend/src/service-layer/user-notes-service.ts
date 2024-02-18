import * as notesRepository from "../persistence-layer/notes-repository";

export const getUserNotes = async (username: string) => {
  return await notesRepository.getUserNotes(username);
};

export const createEmptyUserNote = async (username: string) => {
  return await notesRepository.createUserNote(username);
};

