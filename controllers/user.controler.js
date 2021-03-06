const bcrypt = require("bcryptjs");

const models = require("../models");
const Pharmacy = models.pharmacy;
const Customer = models.customer;

const { logErr } = require("../helpers/loggers");
const {
  checkFindUser: checkFindUser,
  checkUpdateUser: checkUpdateUser,
} = require("../validators/userValidator");

// Retrieve all
exports.findAllPharmacy = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findAll();

    if (pharmacy.length) return res.status(200).send(pharmacy);
    else
      return res.status(404).send({
        message: `ther is no Pharmacies on db :)`,
      });
  } catch (err) {
    logErr(res, err);
  }
};
exports.findAllCustomer = async (req, res) => {
  try {
    const pharmacy = await Customer.findAll();

    if (pharmacy.length) return res.status(200).send(pharmacy);
    else
      return res.status(404).send({
        message: `ther is no Csutomers on db :)`,
      });
  } catch (err) {
    logErr(res, err);
  }
};
// Find a single by name
exports.findByName = async (req, res) => {
  try {
    const { name } = req.params;
    const pharmacy = await Pharmacy.findAll({ where: { name: name } });
    if (pharmacy.length) return res.status(200).send(pharmacy);
    else
      return res.status(404).send({
        message: `ther is no Pharmacies on db :)`,
      });
  } catch (err) {
    logErr(res, err);
  }
};
// Update
exports.update = async (req, res) => {
  try {
    const err = checkUpdateUser(req.body);
    if (err) return res.status(400).send({ error: err });

    if (req.body.password)
      req.body.password = bcrypt.hashSync(req.body.password, 8);
    const User = req.isPharmacy ? Pharmacy : Customer;
    let user = await User.update(req.body, {
      where: { id: req.params.id },
    });
    if (!user[0])
      return res.status(404).send({
        message: `there is no ${
          req.isPharmacy ? "Pharmacies" : "Customers"
        } with id :  ${req.params.id} `,
      });
    user = await User.findByPk(parseInt(req.params.id));

    return res.status(200).send(user);
  } catch (err) {
    logErr(res, err);
  }
};
// Delete one
exports.delete = async (req, res) => {
  try {
    let user = req.isPharmacy
      ? await Pharmacy.findByPk(parseInt(req.params.id))
      : await Customer.findByPk(parseInt(req.params.id));
    if (!user)
      return res.status(404).send({
        message: `there is no ${
          req.isPharmacy ? "Pharmacies" : "Customers"
        } with id :  ${req.params.id}  `,
      });
    req.isPharmacy
      ? await Pharmacy.destroy({
          where: { id: req.params.id },
        })
      : await Customer.destroy({
          where: { id: req.params.id },
        });

    return res.status(200).send(user);
  } catch (err) {
    logErr(res, err);
  }
};
