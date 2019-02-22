const firebaseAdmin = require('firebase-admin');
const database = firebaseAdmin.firestore();
const settings = {timestampsInSnapshots: true};
database.settings(settings);

const databaseCollection = database.collection('posts');


