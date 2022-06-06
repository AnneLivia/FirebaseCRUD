import RouterClass from './RouterClass.js';

import UserController from "../controllers/UserController.js";

const router = new RouterClass('/users', UserController);

export default router.router;