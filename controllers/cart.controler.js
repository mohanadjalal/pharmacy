const models = require("../models");
const { logErr } = require("../helpers/loggers");

const Cart = models.cart;
const Product = models.product;
exports.addToCart = async (req, res) => {
  try {
    const { pId } = req.params;
    const product = await Product.findByPk(pId);
    const cart = await Cart.findOne({ where: { customer_id: req.userId } });
    const r = await cart.addProduct(product);
    res.status(204).send({ message: "product added to cart successfuly" });
  } catch (err) {
    logErr(res, err);
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { pId } = req.params;
    const product = await Product.findByPk(pId);
    const cart = await Cart.findOne({ where: { customer_id: req.userId } });
    const r = await cart.removeProduct(product);
    res.status(204).send({ message: "product removed to cart successfuly" });
  } catch (err) {
    logErr(res, err);
  }
};

exports.getCartProduct = async (req, res) => {
  try {
    const cart = await Cart.findOne({ where: { customer_id: req.userId } });
    const products = await cart.getProducts();
    res.status(200).send(products);
  } catch (err) {
    logErr(res, err);
  }
};
