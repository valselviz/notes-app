import { Request, Response } from "express";
import * as userNotesService from "../service-layer/user-notes-service";

export async function getUserNotes(req: Request, res: Response) {
  const notes = await userNotesService.getUserNotes(req.params.username);
  res.send(notes);
}

export async function createEmptyUserNote(req: Request, res: Response) {
  const notes = await userNotesService.createEmptyUserNote(req.params.username);
  res.send(notes);
}
