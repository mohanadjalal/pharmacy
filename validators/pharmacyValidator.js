const Joi = require("joi");

exports.checkFindPharmacy = () => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(55).required(),
  });

  const { error } = schema.validate(body);
  return error ? error.details[0].message : null;
};

exports.checkUpdatePharmacy = (body) => {
  const schema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(8),
    name: Joi.string().min(3).max(55),
    address: Joi.string().min(10).max(255),
    phoneNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .message("Phone number must be just numbers between 0_9"),
  });

  const { error } = schema.validate(body);
  return error ? error.details[0].message : null;
};
//
