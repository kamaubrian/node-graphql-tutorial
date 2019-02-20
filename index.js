const functions = require('firebase-functions')
const app = require('./app');

exports.notifications = functions.https.onRequest(app);