import {Router} from 'express'

import validationMiddleware from '../middlewares/validation.middleware.js';

class MyRouter {
    constructor(endpoint, Controller, schema) {
        this.endpoint = endpoint;
        this.controller = new Controller();
        this.router = Router();
        this.schema = schema;
        this.loadRoutes();
    }
    loadRoutes () {
        this.router.get(this.endpoint, this.controller.getAll.bind(this.controller));
        this.router.get(`${this.endpoint}/:id`, this.controller.getOne.bind(this.controller));
        this.router.post(this.endpoint, validationMiddleware(this.schema), this.controller.store.bind(this.controller));
        this.router.put(`${this.endpoint}/:id`, validationMiddleware(this.schema), this.controller.update.bind(this.controller));
        this.router.delete(`${this.endpoint}/:id`, this.controller.delete.bind(this.controller));
    }
}

export default MyRouter;