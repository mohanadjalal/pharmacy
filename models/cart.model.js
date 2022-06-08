const Sequelize = require("sequelize");
const sequelize = require("./sequelize_index").sequelize;

const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }
  },
  {
    freezeTableName: true,
  }
);

module.exports = Cart;
