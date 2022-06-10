const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const models = require("../models");
const config = require("../config/auth.config");

const Pharmacy = models.pharmacy;
const Customer = models.customer;

exports.signup = async (req, res) => {
  let user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  };

  try {
    if (req.body.role === "pharmacy") user = await Pharmacy.create(user);
    else user = await Customer.create(user);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: err });
    console.log(err, ":)");
  }
};

exports.signin = async (req, res) => {
  let user;
  try {
    if (req.body.role === "pharmacy")
      user = await Pharmacy.findAll({ where: { email: req.body.email } });
    else user = await Customer.findAll({ where: { email: req.body.email } });

    user = user[0].dataValues;
    console.log(user);
    if (!user) return res.status(404).send({ message: "user not found!!" });

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
    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400,
    });
    user.accessToken = token;
    return res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log(err, ":)");
  }
};
