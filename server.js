const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

let createServer = async () => {
    try {
        await server.listen(port);
        console.log('Server Running on Port', port)
    } catch (e) {
        console.log('Error Creating Node Server', e.message);
    }
};

createServer()
    .then()
    .catch(err=>{
        console.error(err.message);
    });

module.exports = server;