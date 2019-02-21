const functions = require('firebase-functions')
const app = require('./app');

exports.grapqhlapi = functions.https.onRequest(app);