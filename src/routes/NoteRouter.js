import RouterClass from './RouterClass.js';

import NoteController from "../controllers/NoteController.js";

const noteController = new NoteController();
import { SchemaNote } from '../validators/Schema.js';

const router = new RouterClass('/notes', NoteController, SchemaNote);
router.router.get('/notes/all/:userId', noteController.getByUser.bind(noteController))

export default router.router;