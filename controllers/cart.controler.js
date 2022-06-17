const models = require("../models");
const { logErr } = require("../helpers/loggers");

const Cart = models.cart;

exports.create = async (req, res) => {
  try {
    let cart = await Cart.findOne({ where: { customer_id: req.userId } });
    if (cart) return 0;

    cart = await Cart.create({ customer_id: req.userId });
    return res.status(200).send(cart);
  } catch (err) {
    logErr(res, err);
  }
};

exports.delete = async (req, res) => {
  try {
    let cart = await Cart.findOne({ where: { customer_id: req.userId } });
    if (!cart)
      return res.status(404).send({
        message: `there is no cart   `,
      });

    await Pharmacy.destroy({ where: { customer_id: req.userId } });

    return res.status(200).send(user);
  } catch (err) {
    logErr(res, err);
  }
};
