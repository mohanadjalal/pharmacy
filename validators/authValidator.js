const Joi = require("joi");

const checkSingup = (body) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().min(3).max(55).required(),
    address: Joi.string().min(10).max(255).required(),
    phoneNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/),
    isPharmacy: Joi.boolean().required(),
  });

  const { error } = schema.validate(body);
  return error ? error.details[0].message : null;
};
const checkSingin = (body) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  const { error } = schema.validate(body);
  return error ? error.details[0].message : null;
};

module.exports = { checkSingup, checkSingin };

/*
password: Joi.string().pattern(
  new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
  ),*/
