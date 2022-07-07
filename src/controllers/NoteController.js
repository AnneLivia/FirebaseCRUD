import Controller from "./Controller.js";
import NoteModel from '../models/NoteModel.js';
import firebase from '../database/firestore.js';
class NoteController extends Controller {
    firestore = firebase.firestore();

    constructor() {
        super('notes', NoteModel);
        
    }

    async getByUser (req, res) {
        const userId = req.params.userId;
        try {
            const notes = await this.firestore.collection('notes').where("userId", "==", userId).get();
            res.json({notes: notes.docs.map( (doc) => ({id: doc.id, ...doc.data()}))});
        } catch (err) {
            console.log(err);
            res.status(400).json({message: "Unexpected error"});
        }
    }
}

export default NoteController;