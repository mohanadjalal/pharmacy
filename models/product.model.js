const Sequelize = require("sequelize");
const sequelize = require("./sequelize_index").sequelize;

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.DECIMAL,
    },
    description: {
      type: Sequelize.STRING,
    },
    side_effect: {
      type: Sequelize.STRING,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    made_for: {
      type: Sequelize.STRING,
    },
    img: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Product;
