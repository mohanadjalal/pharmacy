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
    from: {
      type: Sequelize.STRING,
    },
    to: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = Delivery;
