const Joi = require("joi");

exports.checkCreateProduct = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().required(),
    side_effect: Joi.string().required(),
    quantity: Joi.number().precision(0).required(),
    made_for: Joi.string().required(),
  });

  const { error } = schema.validate(body);
  return error ? error.details[0].message : null;
};
