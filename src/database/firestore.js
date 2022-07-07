import firebase from 'firebase-admin';
import ServiceAccount from '../configs/firebase.config.js';

firebase.initializeApp({
    credential: firebase.credential.cert(ServiceAccount)
});

export default firebase;