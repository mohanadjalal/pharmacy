const sequelize = require("./sequelize_index").sequelize;
const Pharmacy = require("./pharmacy.model.js");
const Product = require("./product.model.js");

Pharmacy.hasMany(Product,{ foreignKey: 'pharmacy_id' ,  onDelete: 'CASCADE'})

Product.belongsTo(Pharmacy,{ foreignKey: 'pharmacy_id',  onDelete: 'CASCADE'});


  const models = { };
  models.pharmacy=Pharmacy ; 
  models.product =Product ; 
  models.sequelize = sequelize 

  module.exports = models;

