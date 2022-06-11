const sequelize = require("./sequelize_index").sequelize;
const Pharmacy = require("./pharmacy.model.js");
const Product = require("./product.model.js");
const Customer = require("./customer.model")
const Cart = require("./cart.model")


Pharmacy.hasMany(Product,{ foreignKey: {name:'pharmacy_id' , allowNull:false} ,  onDelete: 'CASCADE'})
Product.belongsTo(Pharmacy,{ foreignKey: {name:'pharmacy_id' , allowNull:false},  onDelete: 'CASCADE'});

Customer.hasOne(Cart,{ foreignKey: {name:'customer_id' , allowNull:false},  onDelete: 'CASCADE'});
Cart.belongsTo(Customer,{ foreignKey: {name:'customer_id' , allowNull:false},  onDelete: 'CASCADE'});

Cart.belongsToMany(Product, { through: 'Cart_Product' });
Product.belongsToMany(Cart, { through: 'Cart_Product' });



  const models = { };
  models.pharmacy=Pharmacy ; 
  models.product =Product ; 
  models.customer =Customer ; 
  models.cart =Cart ; 


  models.sequelize = sequelize 

  module.exports = models;

