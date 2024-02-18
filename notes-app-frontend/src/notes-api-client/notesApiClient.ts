import Note from "../domain/Note";

const backendUrl = "http://localhost:3001";

export async function getUserNotes(username: string) {
  const response = await fetch(backendUrl + `/users/${username}/notes`);
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function createUserNote(username: string) {
  const response = await fetch(backendUrl + `/users/${username}/notes`, {
    method: "POST",
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function updateNote(note: Note) {
  const response = await fetch(backendUrl + `/notes/${note.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function deleteNote(id: number) {
  const response = await fetch(backendUrl + `/notes/${id}`, {
    method: "DELETE",
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
