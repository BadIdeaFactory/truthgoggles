/**
 * app.js
 */

import path from 'path';
import express from 'express';

import routes from './routes/index';

// Express app setup
const app = express();

//view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

//use routes
app.use('/', routes);

export default app;




/**
* Module dependencies.
 */


import http from 'http';import http from 'http';
import app from '../app';import app from '../app'; // <-- import app // <-- import app
/**/**
 * Simple logger function. * Simple logger function.
 */ */
function log(message) {function log(message) {
  process.stdout.write(`${message}\n`);  process.stdout.write(`${message}\n`);
}}