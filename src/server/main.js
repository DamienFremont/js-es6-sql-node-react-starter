import express from 'express';
import http from 'http';

import { version } from '../../package.json';
import api from './api';
import RouterUtils from './routes/RouterUtils';
import EnvUtils from './utils/EnvUtils';
import LoggerHelper from './helpers/LoggerHelper';

/**
 * Main script for server
 */

const BASE_PATH = '../../';

// env
EnvUtils.initOrOverride();
const PORT = process.env.PORT || 5000;

// logger
var logger = new LoggerHelper();
logger.logStart();
logger.logBanner(version);
logger.logEnv();

// express
const app = express();
app.server = http.createServer(app);

// api router
app.use('/api', api());

// app.use(express.static(path.join(__dirname, base, 'build'))) 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(RouterUtils.createStaticsRouter(BASE_PATH));

// start
app.server.listen(PORT, () => {
  logger.logEnd();
  logger.logHostname(PORT);
})

export default app;