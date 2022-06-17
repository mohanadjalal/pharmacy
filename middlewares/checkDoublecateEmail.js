const models = require("../models");
const authValidator = require("../validators/authValidator");

const Pharmacy = models.pharmacy;
const Customer = models.customer;

exports.checkDoublecateEmail = async (req, res, next) => {
  const error = authValidator.checkSingup(req.body);
  if (error) return res.status(400).send(error);
  const User = req.body.isPharmacy ? Pharmacy : Customer;

  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) return res.status(400).json({ message: "email is already exist " });

  next();
};
