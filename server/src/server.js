import express from 'express';
import http from 'http';
import path from 'path';
import api from './api';
import LoggerHelper from './helpers/LoggerHelper';
import EnvUtils from './utils/EnvUtils';

/**
 * Main script for server
 */

const root = '../../';

// env
EnvUtils.initOrOverride();
const port = process.env.PORT || 5000;

// logger
var logger = new LoggerHelper();
logger.logStart();
logger.logBanner('server/private/banner.txt', process.env.APP_VERSION);
logger.logEnv();

// express
const app = express();
app.server = http.createServer(app);

// api router
app.use('/api', api());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static client
app.use(express.static(path.join(__dirname, root, 'client/build')));

// serve
app.server.listen(port, () => {
  logger.logEnd();
  logger.logHostname(port);
})

export default app;