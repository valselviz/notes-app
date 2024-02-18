import { Request, Response } from "express";
import * as notesService from "../service-layer/notes-service";
import { DELETE_ACTIVE_NOTE_ERROR } from "../service-layer/error-codes";

export async function updateNote(req: Request, res: Response) {
  await notesService.updateNote(parseInt(req.params.id, 10), req.body);
  res.send("Note updated successfully");
}

export async function deleteNote(req: Request, res: Response) {
  try {
    await notesService.deleteNote(parseInt(req.params.id, 10));
    res.send("Note deleted successfully");
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === DELETE_ACTIVE_NOTE_ERROR) {
        res.status(400);
        res.send("Can not delete active note");
        return;
      }
    }
    console.log(error);
    res.status(500);
    res.send("Internal server error");
  }
}
