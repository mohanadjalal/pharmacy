const models = require("../models");
const Pharmacy = models.pharmacy;
const Customer = models.customer;

exports.signup = async (req, res) => {
  let user = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    if (req.body.role === "pharmacy") user = await Pharmacy.create(user);
    else user = await Customer.create(user);
    res.status(200).send(user);
  } catch (err) {
    return res.json({ message: err.message });
  }
};
exports.signin = (req, res) => {};
