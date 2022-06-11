const bcrypt = require("bcryptjs");

const models = require("../models");
const Pharmacy = models.pharmacy;

const { logErr } = require("../helpers/loggers");
const {
  checkFindPharmacy,
  checkUpdatePharmacy,
} = require("../validators/pharmacyValidator");

// Retrieve all
exports.findAll = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.findAll();
    if (pharmacies.length) return res.status(200).send(pharmacies);
    else
      return res
        .status(404)
        .send({ message: "ther is no pharmacies on db :)" });
  } catch (err) {
    logErr(res, err);
  }
};
// Find a single by name
exports.findByName = async (req, res) => {
  try {
    const { name } = req.params;
    const pharmacies = await Pharmacy.findAll({ where: { name: name } });
    if (pharmacies.length) return res.status(200).send(pharmacies);
    else
      return res.status(404).send({
        message: `there is no pharmacies with name: ${name} :)`,
      });
  } catch (err) {
    logErr(res, err);
  }
};
// Update
exports.update = async (req, res) => {
  try {
    const err = checkUpdatePharmacy(req.body);
    if (err) return res.status(400).send({ error: err });

    req.body.password = bcrypt.hashSync(req.body.password, 8);

    let pharmacy = await Pharmacy.update(req.body, {
      where: { id: req.params.id },
    });
    if (!pharmacy)
      return res
        .status(404)
        .send({ message: `there is no pharmacy with id :  ${req.params.id} ` });
    pharmacy = await Pharmacy.findByPk(parseInt(req.params.id));
    return res.status(200).send(pharmacy);
  } catch (err) {
    logErr(res, err);
  }
};
// Delete one
exports.delete = async (req, res) => {
  try {
    let pharmacy = await Pharmacy.findByPk(parseInt(req.params.id));
    if (!pharmacy)
      return res
        .status(404)
        .send({ message: `there is no pharmacy with id :  ${req.params.id} ` });
    await Pharmacy.destroy({
      where: { id: req.params.id },
    });

    return res.status(200).send(pharmacy);
  } catch (err) {
    logErr(res, err);
  }
};
