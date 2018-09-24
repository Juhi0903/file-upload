const express = require('express');
const upload = require('./upload');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.text());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.post('/upload', upload);

server.listen(8000, () => {
    console.log('Server started......!');
});

