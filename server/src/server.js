import express from 'express';
import finale from 'finale-rest';
import http from 'http';
import path from 'path';
import api from './api';
import LoggerHelper from './helpers/LoggerHelper';
import EnvUtils from './utils/EnvUtils';
import fs from 'fs';
import Sequelize from 'sequelize';

/**
 * Main script for server
 * @see https://github.com/tommybananas/finale
 */
class App {

  constructor(height, width) {
    this.models = {};
  }

  start() {
    const root = '../../';
    // env
    EnvUtils.initOrOverride();
    const port = process.env.PORT || 5000;
    // logger
    var logger = new LoggerHelper();
    logger.logStart();
    logger.logBanner('config/banner.txt', process.env.REACT_APP_VERSION);
    logger.logEnv();
    // server
    fs.readFile('config/config.json', 'utf8', (err, configJson) => {
      this.defineModels(JSON.parse(configJson), this.models);
      this.initializeServer();
      this.initializeFinale(this.app, this.sequelize);
      this.createRESTResource(this.app, this.models);
      this.createDatabaseAndListen(this.server, port, this.sequelize, logger);
    });
  }

  initializeServer() {
    const app = this.app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    this.server = http.createServer(app);
  }
  
  initializeFinale(app, sequelize) {
    finale.initialize({
      app,
      sequelize
    });
  }
  
  createRESTResource(app, models) {
    app.use('/api', api());
    var userResource = finale.resource({
      model: models.Products,
      endpoints: ['/api/products', '/api/products/:id']
    });
  }
  
  defineModels(configJson, models) {
    const env = process.env.NODE_ENV || "development";
    const config = configJson[env];
    const url = config.url || process.env.DATABSE_CONNECTION_URI;
    const sequelize = this.sequelize = new Sequelize(url, config);
    (async () => {
      this.models.Products = sequelize.define('Product', {
        id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        name: { type: Sequelize.STRING, allowNull: false },
        price: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
        type: { type: Sequelize.STRING, allowNull: false },
        archived: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
      });
      // mock
      await sequelize.sync({ force: true });
      for (let index = 1; index < 40; index++) {
        models.Products.create({
          id: index.toString(),
          name: `Un${index}`,
          type: `FOOD`,
          price: (42 + index)
        });
      }
    })();
  }
  
  createDatabaseAndListen(server, port, sequelize, logger) {
    sequelize
      .sync({ force: true })
      .then(function() {
        server.listen(port, () => {
          logger.logEnd();
          logger.logHostname(port);
        });
      });
  }
}

var app = new App();
app.start();