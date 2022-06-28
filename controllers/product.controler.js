const models = require("../models");
const { logErr } = require("../helpers/loggers");
const { cart, product } = require("../models");

const Product = models.product;
const Cart = models.cart;

exports.create = async (req, res) => {
  try {
    let product = req.body;
    product.pharmacy_id = req.userId;
    if (req.file) product.img = `/${req.file.filename}`;
    product = await Product.create(product);
    return res.status(201).send(product);
  } catch (err) {
    logErr(res, err);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).send(products);
  } catch (err) {
    logErr(res, err);
  }
};

exports.update = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const id = parseInt(req.params.id);
    if (req.file) req.body.img = `/${req.file.filename}`;
    let product = await Product.update(req.body, { where: { id: `${id}` } });
    if (!product[0])
      return res.status(404).json({ error: "product isnt found " });
    product = await Product.findByPk(id);
    return res.status(200).json(product);
  } catch (err) {
    logErr(res, err);
  }
};

exports.delete = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).json({ error: "product not found" });
    await Product.destroy({ where: { id: `${id}` } });
    return res.status(200).send(product);
  } catch (err) {
    logErr(res, err);
  }
};
