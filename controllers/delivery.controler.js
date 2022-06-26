const { logErr } = require("../helpers/loggers");

const models = require("../models");

const Delivery = models.delivery;
const Cart = models.cart;
const Product = models.product;
const Pharmacy = models.pharmacy;
const Customer = models.customer;

exports.getFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ where: { customer_id: req.userId } });
    const products = await cart.getProducts();
    let delivery = await Delivery.findOne({
      where: { customer_id: req.userId },
    });
    if (!delivery)
      delivery = await Delivery.create({ customer_id: req.userId });

    const r = await delivery.setProducts(products);
    await cart.setProducts([]);

    // const delivery = await Delivery.create();
    return res
      .status(200)
      .send({ message: "products added to delivery successfuly" });
  } catch (err) {
    logErr(res, err);
  }
};

exports.getDeliveryInfo = async (req, res) => {
  try {
    const delivery = await Delivery.findOne({
      where: { customer_id: req.userId },
    });
    const custmoerAddress = await Customer.findOne({
      where: { id: req.userId },
      attributes: ["name", "address", "phoneNumber"],
    });
    const products = await delivery.getProducts();
    const pharmacies = [];

    for (const product of products) {
      const pharmacy = await Pharmacy.findOne({
        where: { id: product.dataValues?.pharmacy_id },
        attributes: ["name", "address", "phoneNumber"],
      });
      pharmacies.push(pharmacy.dataValues);
    }
    const info = {
      customerInfo: custmoerAddress,
      pharmaciesInfo: pharmacies,
    };

    return res.status(200).json(info);
  } catch (error) {
    logErr(res, err);
  }
};
