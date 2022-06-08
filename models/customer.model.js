const Sequelize = require("sequelize");
const sequelize = require("./sequelize_index").sequelize;

const Customer = sequelize.define(
  "Customer",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Customer;
