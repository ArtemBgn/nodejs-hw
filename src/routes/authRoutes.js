import { Router } from 'express';
/*import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';*/
import { celebrate } from 'celebrate';
/*import {
  getAllNotesSchema,
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';*/

const router = Router();

// router.get('/notes', celebrate(), () => {});
// router.get('/notes/:noteId', celebrate(), () => {});

router.post('/auth/register', celebrate(), () => {});

// router.patch('/notes/:noteId', celebrate(), () => {});
// router.delete('/notes/:noteId', celebrate(), () => {});

export default router;
