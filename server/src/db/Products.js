import * as Sequelize from "sequelize";
import ProductAttributes from "../../../client/src/model/ProductModel";

export default (sequalize) => {
  return sequalize.define("Products", {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    name: { type: Sequelize.STRING, allowNull: false },
    price: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
    type: { type: Sequelize.STRING, allowNull: false },
    archived: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
  });
};