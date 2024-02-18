import { Dispatch, SetStateAction, useRef } from "react";
import styles from "./NoteCard.module.css";
import Note from "../../domain/Note";
import { deleteNote, updateNote } from "../../notes-api-client/notesApiClient";

interface NoteCardProps {
  updateNoteInState: (note: Note) => void;
  deleteNoteFromState: (id: number) => void;
  note: Note;
}

export default function NoteCard({
  updateNoteInState,
  deleteNoteFromState,
  note,
}: NoteCardProps) {
  const textAreaRef: any = useRef();

  const updateNoteHeight = (textArea: any) => {
    if (textArea) {
      textArea.style.height = Math.max(50, textArea.scrollHeight - 5) + "px";
    }
  };

  // This updates the height for notes that have lot of text from the start.
  // Note that when the notes are rendered for the first time, the onChange event is
  // not executed, so setting up a delayed height update is needed.
  setTimeout(() => updateNoteHeight(textAreaRef.current), 100);

  return (
    <div className={styles.note}>
      <textarea
        onChange={(e) => {
          updateNoteHeight(e.target);
          const newNote = { ...note };
          newNote.description = e.target.value;
          updateNoteInState(newNote);
          updateNote(newNote);
        }}
        cols={30}
        wrap="HARD"
        ref={textAreaRef}
      >
        {note.description}
      </textarea>
      <div className={styles.foot}>
        {!note.archived && (
          <button
            onClick={() => {
              const newNote = { ...note };
              newNote.archived = true;
              updateNoteInState(newNote);
              updateNote(newNote);
            }}
          >
            Archive
          </button>
        )}
        {note.archived && (
          <>
            <button
              onClick={() => {
                deleteNoteFromState(note.id);
                deleteNote(note.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                const newNote = { ...note };
                newNote.archived = false;
                updateNoteInState(newNote);
                updateNote(newNote);
              }}
            >
              Unarchive
            </button>
          </>
        )}
      </div>
    </div>
  );
}
