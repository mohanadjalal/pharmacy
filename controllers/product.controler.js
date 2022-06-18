const models = require("../models");
const { logErr } = require("../helpers/loggers");

const Product = models.product;

exports.create = async (req, res) => {
  try {
    let product = req.body;
    product.img = `/${req.file.filename}`;
    if (req.file) product.pharmacy_id = req.userId;
    product = await Product.create(req.body);
    return res.status(201).send(product);
  } catch (err) {
    logErr(res, err);
  }
};
