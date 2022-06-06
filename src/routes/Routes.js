import NoteRouter from "./NoteRouter.js";
import UserRouter from "./UserRouter.js";
import { Router } from "express";

const router = Router();

router.use(UserRouter);
router.use(NoteRouter);

export default router;