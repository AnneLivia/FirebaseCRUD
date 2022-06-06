class Controller {
    constructor(model) {
        this.model = model;
    }

    async getAll (req, res) {
        res.json({messsage: `${this.model} endpoint!`});
    }
}

export default Controller;