import {Router} from 'express'

class MyRouter {
    constructor(endpoint, Controller) {
        this.endpoint = endpoint;
        this.controller = new Controller();
        this.router = Router();
        this.loadRoutes();
    }
    loadRoutes () {
        this.router.get(this.endpoint, this.controller.getAll.bind(this.controller));
        this.router.get(`${this.endpoint}/:id`, this.controller.getOne.bind(this.controller));
        this.router.get(this.endpoint, this.controller.store.bind(this.controller));
        this.router.get(`${this.endpoint}/:id`, this.controller.update.bind(this.controller));
        this.router.get(`${this.endpoint}/:id`, this.controller.delete.bind(this.controller));
    }
}

export default MyRouter;