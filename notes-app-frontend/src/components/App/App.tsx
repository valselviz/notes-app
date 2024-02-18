import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import NoteCard from "../Note/NoteCard";
import {
  createUserNote,
  getUserNotes,
} from "../../notes-api-client/notesApiClient";
import Note from "../../domain/Note";

function App() {
  const [notes, setNotes] = useState([] as Note[]);
  const defaultUser = "Valeria";
  useEffect(() => {
    getUserNotes(defaultUser).then((userNotes) => setNotes(userNotes));
  }, []);

  const [active, setActive] = useState(true);

  const activeButtonStyles = active ? styles.activeButton : "";
  const archivedButtonStyles = !active ? styles.activeButton : "";

  const updateNoteInState = (newNote: Note) => {
    const newNotes = [...notes];
    newNotes[notes.findIndex((oldNote) => oldNote.id === newNote.id)] = newNote;
    setNotes(newNotes);
  };

  const deleteNoteFromState = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.pageHeader}>
        <h1>My notes</h1>
        <span>
          <button
            className={activeButtonStyles}
            onClick={() => setActive(true)}
          >
            Active
          </button>
          <button
            className={archivedButtonStyles}
            onClick={() => setActive(false)}
          >
            Archived
          </button>
        </span>
      </div>
      <div className={styles.notesContainer}>
        {notes
          .filter((note) => note.archived !== active)
          .map((note) => (
            <NoteCard
              updateNoteInState={updateNoteInState}
              deleteNoteFromState={deleteNoteFromState}
              note={note}
              key={note.id}
            />
          ))}
        {active && (
          <button
            className={styles.newCardButton}
            onClick={() => {
              createUserNote(defaultUser).then((newNote) =>
                setNotes([newNote, ...notes])
              );
            }}
          >
            Add New Note
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
