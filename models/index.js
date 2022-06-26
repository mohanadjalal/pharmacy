const sequelize = require("./sequelize_index").sequelize;
const Pharmacy = require("./pharmacy.model.js");
const Product = require("./product.model.js");
const Customer = require("./customer.model");
const Cart = require("./cart.model");
const Delivery = require("./delivery.model");

Pharmacy.hasMany(Product, {
  foreignKey: { name: "pharmacy_id", allowNull: false },
  onDelete: "CASCADE",
});
Product.belongsTo(Pharmacy, {
  foreignKey: { name: "pharmacy_id", allowNull: false },
  onDelete: "CASCADE",
});

Customer.hasOne(Cart, {
  foreignKey: { name: "customer_id", allowNull: false },
  onDelete: "CASCADE",
});
Cart.belongsTo(Customer, {
  foreignKey: { name: "customer_id", allowNull: false },
  onDelete: "CASCADE",
});

Cart.belongsToMany(Product, { through: "Cart_Product" });
Product.belongsToMany(Cart, { through: "Cart_Product" });

Delivery.belongsToMany(Product, { through: "Delivery_Product" });
Product.belongsToMany(Delivery, { through: "Delivery_Product" });

Customer.hasOne(Delivery, {
  foreignKey: { name: "customer_id", allowNull: false },
  onDelete: "CASCADE",
});
Delivery.belongsTo(Customer, {
  foreignKey: { name: "customer_id", allowNull: false },
  onDelete: "CASCADE",
});

const models = {};
models.pharmacy = Pharmacy;
models.product = Product;
models.customer = Customer;
models.cart = Cart;
models.delivery = Delivery;

models.sequelize = sequelize;

module.exports = models;
