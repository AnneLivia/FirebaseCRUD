import RouterClass from './RouterClass.js';

import UserController from "../controllers/UserController.js";
import { SchemaUser } from '../validators/Schema.js';

const router = new RouterClass('/users', UserController, SchemaUser);

export default router.router;