'use strict';

const pg = require('pg');
const express = require('express');
const requestProxy = require('express-request-proxy');
// const Highcharts = require('highcharts');
// require('highcharts/modules/exporting')(Highcharts);
const app = express();
const PORT = process.env.PORT || 3000;
const conString = process.env.DATABASE_URL || 'postgres://localhost:5432'; //replace with 'postgres://localhost:5432' on your Mac, windows postgres://postgres:B86j07L13@localhost:5432/postgres
const client = new pg.Client(conString);
client.connect();

app.use(express.static('./public'));

//Routes for requesting the HTML resources
app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/resources', (request, response) => response.sendFile('index.html', {root: './public'}));

// app.get('/');


app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
