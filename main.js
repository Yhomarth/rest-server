require('dotenv').config();
const Server = require('./models/app');

const server = new Server();

server.listen();

