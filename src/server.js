import app from './app.js';
import firebase from ''

const db = firebase.firestore(); 

app.listen(4000, () => {
    console.log("Server is running at PORT 4000");
});