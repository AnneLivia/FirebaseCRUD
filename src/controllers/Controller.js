import firebase from '../database/firestore.js';
class Controller {

    firestore = firebase.firestore();

    constructor(model, Structure) {
        this.model = model;
        this.structure = new Structure();
    }

    async getAll (req, res) {
        try {
            const user = await this.firestore.collection(this.model).get();
            res.json({user: user.docs.map( (doc) => ({id: doc.id, ...doc.data()}))});
        } catch (err) {
            console.log(err);
            res.status(400).json({message: "Unexpected error"});
        }
    }

    async getOne (req, res) {
        const id = req.params.id;
        try {
            const user = await this.firestore.collection(this.model).doc(id).get();
            if(user.exists)
                return res.json({id: user.id, ...user.data()});
            res.status(404).json({messaage: "User not found"});
        } catch (err) {
            console.log(err);
            res.status(400).json({message: "Unexpected error"});
        }
    }

    async store(req, res) {
        try {
            await this.firestore.collection(this.model).doc().set(req.body);
            res.json({Message: "Record saved successfully"});
        } catch (err) {
            console.log(err);
            res.status(400).json({message: "Unexpected error"});
        }
    }

    async update (req, res) {
        const id = req.params.id;
        const data = req.body;
        try {
            await this.firestore.collection(this.model).doc(id).update(data);
            res.json({message: "Updated successfully"});
        } catch (err) {
            if(err.details.includes("No document to update")) {
                return res.status(404).json({messaage: "User not found"});
            }
            res.status(400).json({message: "Unexpected error"});
        }
    }

    async delete (req, res) {
        const id = req.params.id;
        try {
            const user = await this.firestore.collection(this.model).doc(id);
            if(!(await user.get()).exists) 
                return res.status(404).json({messaage: "User not found"});
                
            await this.firestore.collection(this.model).doc(id).delete();
            res.json({message: "Removed successfully"});
        } catch (err) {
            console.log(err);
            res.status(400).json({message: "Unexpected error"});
        }
    }
}

export default Controller;