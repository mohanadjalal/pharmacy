const Sequelize = require("sequelize");
const { sequelize } = require("./sequelize_index");

const Delivery = sequelize.define(
  "Delivery",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = Delivery;
