import Sequelize from 'sequelize';
import productFactory from "./Products";
const configJson = require('../../../config/config.json');

const env = process.env.NODE_ENV || "development";
const config = configJson[env];
const url = config.url || process.env.DATABSE_CONNECTION_URI;

const sequelize = new Sequelize(url, config);

const db = {
  sequelize,
  Sequelize,
  Products: productFactory(sequelize),
};

Object.keys(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;