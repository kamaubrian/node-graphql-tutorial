const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('./api/config/service-account');
const bodyParser = require('body-parser');
const routes = require('./api/routes/index');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://node-grapqhl-api.firebaseio.com"
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'POST,GET');
        return res.status(200).json({});
    }
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1', routes);


app.use('/favicon.ico', (req, res, next) => {
    console.log('Handling route error0')
    next()
})
app.use((req, res, next) => {
    const error = new Error('Route Not Found');
    error.status = 404;
    next(error);
    return res.status(404).send({
        message: 'Route Not Found'
    })
});
app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
        err: {
            message: err.message
        }
    })
});


module.exports = app;