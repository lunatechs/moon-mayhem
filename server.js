'use strict';

const pg = require('pg');
const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 3000;
const conString = process.env.DATABASE_URL || 'postgres://localhost:5432'; //replace with 'postgres://localhost:5432' on your Mac
const client = new pg.Client(conString);
client.connect();

app.use(express.static('./public'));

//Routes for requesting the HTML resources
app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/resources', (request, response) => response.sendFile('index.html', {root: './public'}));

app.get('/');

