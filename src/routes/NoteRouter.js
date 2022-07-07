import RouterClass from './RouterClass.js';

import NoteController from "../controllers/NoteController.js";

const noteController = new NoteController();

const router = new RouterClass('/notes', NoteController);
router.router.get('/notes/all/:userId', noteController.getByUser.bind(noteController))

export default router.router;