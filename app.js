require('dotenv').config();

const Server = require('./server/server.js');

const server = new Server();

server.listen();