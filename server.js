'use strict';

const pg = require('pg');
const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

//Routes for requesting the HTML resources
app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/resources', (request, response) => response.sendFile('index.html', {root: './public'}));

// app.get('/');


app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
