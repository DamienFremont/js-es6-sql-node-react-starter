 'use strict';

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var passport = require('passport');
var path = require('path');
var logger = require('./utils/logger');
var env = require('./utils/env');
var staticsRouter = require('./routes/staticsRouter');
var helloApi = require('./api/helloApi');

/**
 * Main script for server
 */

var START_DURATION = 'Started Application in seconds';
console.time(START_DURATION);

var app = express();
var port = process.env.PORT || 5000;
var base = '../../';

logger.logBanner();
env.initOrOverride();
logger.init();
logger.logEnv();

app.use(helloApi.router());

app.set('port', port)
// app.use(express.static(path.join(__dirname, base, 'build'))) 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(staticsRouter.router());

const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log(`Listening on port ${port}`)
  logger.logHostname(port);
})

console.timeEnd(START_DURATION);
