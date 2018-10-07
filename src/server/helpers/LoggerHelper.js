import fs from 'fs';
import os from 'os';
import winston from 'winston';

class LoggerHelper {

  constructor() {
    this.START_DURATION = 'Started Application in seconds';
    this.init();
  }

  init() {
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
    this.instance = lo;
  }

  logBanner(version) {
    fs.readFile('private/banner.txt', 'utf8', (err, data) => {
      this.instance.log('info', data);
      this.instance.log('info', ` :: NodeJS ::          (v${version})`);
      this.instance.log('info', ' ');
    });
  }

  logEnv() {
    this.instance.log('info', 'Starting Application');
    if (process.pid) {
      this.instance.log('info', `This process is your PID ${process.pid}`);
    }
    if (process.env.NODE_ENV !== 'production') {
      this.instance.log('warn', 'mode = \'developpment\' (process.env.NODE_ENV not set to \'production\')');
    }
    this.instance.log('info', `env var LOGGER_LEVEL = ${this.instance.level}`);
    this.instance.log('info', `env var NODE_ENV = ${process.env.NODE_ENV}`);
    this.instance.log('info', `env var CONTACT_MAIL = ${process.env.CONTACT_MAIL}`);
  }

  logHostname(port) {
    this.instance.log('info', `Express started on port(s):  ${port}`);
    const networkInterfaces = os.networkInterfaces();
    this.instance.log('info', 'You can now view application.');
    this.instance.log('info', ' ');
    this.instance.log('info', `  Local:            http://127.0.0.1:${port}`);
    this.instance.log('info', `                    http://127.0.0.1:${port}/index.html`);
    this.instance.log('info', `                    http://127.0.0.1:${port}/api/`);
    this.instance.log('info', `  On your network:  http://${networkInterfaces.Ethernet[1].address}:${port}`);
    this.instance.log('info', ' ');
  }

  logStart() {
    console.time(this.START_DURATION);
  }

  logEnd() {
    console.timeEnd(this.START_DURATION);
  }

}
export default LoggerHelper;