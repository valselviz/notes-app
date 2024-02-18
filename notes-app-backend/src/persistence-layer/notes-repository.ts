import databasePool from "./database-client";
import Note from "../domain/Note";

export const getUserNotes = (username: string) => {
  return new Promise((resolve, reject) => {
    databasePool.query(
      `SELECT * FROM notes WHERE username = '${username}' ORDER BY id DESC`,
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results.rows);
      }
    );
  });
};

export const createUserNote = (username: string) => {
  return new Promise((resolve, reject) => {
    databasePool.query(
      `INSERT INTO notes (description, archived, username) VALUES ('', false, '${username}')  RETURNING *`,
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results.rows[0]);
      }
    );
  });
};

export const getNote: (id: number) => Promise<Note> = (id) => {
  return new Promise((resolve, reject) => {
    databasePool.query(
      `SELECT * FROM notes WHERE id = '${id}'`,
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results.rows[0]);
      }
    );
  });
};

export const updateNote = (id: number, note: Note) => {
  return new Promise((resolve, reject) => {
    databasePool.query(
      `UPDATE notes SET description = '${note.description}', archived = ${note.archived} where id = ${id}`,
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      }
    );
  });
};

export const deleteNote = (id: number) => {
  return new Promise((resolve, reject) => {
    databasePool.query(
      `DELETE FROM notes WHERE id = ${id}`,
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      }
    );
  });
};
