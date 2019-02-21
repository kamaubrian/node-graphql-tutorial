const firebaseAdmin = require('firebase-admin');
const database = firebaseAdmin.firestore();
const settings = {timestampsInSnapshots: true};

const databaseCollection = database.collection('posts');


