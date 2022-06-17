const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const models = require("../models");
const config = require("../config/auth.config");

const Pharmacy = models.pharmacy;
const Customer = models.customer;

exports.signup = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  try {
    let user;
    if (req.body.isPharmacy) user = await Pharmacy.create(req.body);
    else user = await Customer.create(req.body);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: err });
    console.log(err, ":)");
  }
};

exports.signin = async (req, res) => {
  let user;
  try {
    if (req.body.isPharmacy)
      user = await Pharmacy.findAll({
        attributes: ["id", "email", "name", "password"],
        where: { email: req.body.email },
      });
    else
      user = await Customer.findAll({
        attributes: ["id", "email", "name", "password"],
        where: { email: req.body.email },
      });

    if (!user.length)
      return res.status(404).send({ message: "user not found!!" });

    user = user[0].dataValues;
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    const token = jwt.sign(
      { id: user.id, isPharmacy: req.body.isPharmacy },
      config.secret,
      {
        expiresIn: 864000,
      }
    );
    user.accessToken = token;
    return res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log(err, ":)");
  }
};
