import RouterClass from './RouterClass.js';

import NoteController from "../controllers/NoteController.js";

const router = new RouterClass('/notes', NoteController);

export default router.router;