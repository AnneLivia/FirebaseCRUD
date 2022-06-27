import firebase from '../configs/firebase.config.js';
class Controller {
    firestore = firebase.firestore();

    constructor(model, Structure) {
        this.model = model;
        this.structure = new Structure();
    }

    async getAll (req, res) {
        res.json({messsage: `${this.model} endpoint!`});
    }

    async store(req, res) {
        try {
            const user = await this.firestore.collection(this.model).doc().set(req.body);
            res.json({user});
        } catch (err) {
            res.status(400).json({message: "Unexpected error"});
        }
    }
}

export default Controller;