
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')

const Server = require('./models/server');
const server = new Server();
const app = express();
app.use(express.json());
server.listen();
require('./routes/routes')(app);
 
