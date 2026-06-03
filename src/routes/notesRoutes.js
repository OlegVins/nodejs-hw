import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import { getNoteSchema } from '../validations/notesValidation.js';
import { createNotesSchema } from '../validations/notesValidation.js';
import { noteIdSchema } from '../validations/notesValidation.js';
import { updateNoteSchema } from '../validations/notesValidation.js';

const router = Router();

router.get('/notes', celebrate(getNoteSchema), getAllNotes);
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
router.post('/notes', celebrate(createNotesSchema), createNote);
router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default router;
