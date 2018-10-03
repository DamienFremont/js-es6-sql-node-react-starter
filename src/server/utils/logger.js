'use strict';

var fs = require('fs');
var os = require('os');
var winston = require('winston');
var packageJson = require('../../../package.json');

var instance;
module.exports = { 
  init, 
  logBanner, 
  logEnv, 
  logHostname
 };

function init() {
  const level = process.env.LOGGER_LEVEL || 'info';
  const lo = winston.createLogger({
    level,
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });
  if (process.env.NODE_ENV !== 'production') {
    lo.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
  }
  instance = lo;
}

function logBanner() {
  fs.readFile('private/banner.txt', 'utf8', (err, data) => {
    console.log(data);
    console.log(' :: NodeJS ::          (v' + packageJson.version + ')');
    console.log(' ');
  });
}

function logEnv() {
  instance.log('info', 'Starting Application');
  if (process.pid) {
    instance.log('info', 'This process is your PID ' + process.pid);
  }
  if (process.env.NODE_ENV !== 'production') {
    instance.log('warn', 'mode = \'developpment\' (process.env.NODE_ENV not set to \'production\')');
  }
  instance.log('info', 'env var LOGGER_LEVEL = ' + instance.level);
  instance.log('info', 'env var NODE_ENV = ' + process.env.NODE_ENV);
  instance.log('info', 'env var CONTACT_MAIL = ' + process.env.CONTACT_MAIL);
}

function logHostname(port) {
  instance.log('info', `Express started on port(s):  ${port}`);
  const networkInterfaces = os.networkInterfaces();
  instance.log('info', 'You can now view application.');
  instance.log('info', ' ');
  instance.log('info', `  Local:            http://127.0.0.1:${port}`);
  instance.log('info', `                    http://127.0.0.1:${port}/index.html`);
  instance.log('info', `                    http://127.0.0.1:${port}/api/`);
  instance.log('info', `  On your network:  http://${networkInterfaces.Ethernet[1].address}:${port}`);
  instance.log('info', ' ');
}
