import Controller from "./Controller.js";
import UserModel from '../models/UserModel.js';
class UserController extends Controller {
    constructor() {
        super('user', UserModel);
    }
}

export default UserController;