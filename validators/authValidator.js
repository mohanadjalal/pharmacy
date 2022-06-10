const Joi = require("joi");

const checkSingup = (body) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    isPharamcy: Joi.boolean().required(),
  });

  const { value, error } = schema.validate(body);
  return error ? error.details[0].message : null;
};
const checkSingin = (body) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  const { value, error } = schema.validate(body);
  return error ? error.details[0].message : null;
};

module.exports = { checkSingup, checkSingin };

/*
password: Joi.string().pattern(
  new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
  ),*/
