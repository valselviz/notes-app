import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as userNotesController from "./presentation-layer/user-notes-controller";
import * as notesController from "./presentation-layer/notes-controller";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = 3001;

// Enable Express to parse application/json
app.use(bodyParser.json());

// Add headers before the response are sent to prevent CORS errors
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.get("/users/:username/notes", userNotesController.getUserNotes);
app.post("/users/:username/notes", userNotesController.createEmptyUserNote);

app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
