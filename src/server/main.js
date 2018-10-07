import express from 'express';
import http from 'http';

import { version } from '../../package.json';
import api from './api';
import LoggerHelper from './helpers/LoggerHelper';
import staticsRouter from './routes/staticsRouter';
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
app.use(staticsRouter({ root }));

// start
app.server.listen(port, () => {
  logger.logEnd();
  logger.logHostname(port);
})

export default app;