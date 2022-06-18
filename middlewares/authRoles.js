const {
  checkCreateProduct,
  checkUpdateProduct,
} = require("../validators/productValidator");

exports.isCustomer = (req, res, next) => {
  if (req.isPharmacy)
    return res
      .status(403)
      .json({ message: "you does not have access rights to the content" });

  next();
};

exports.isPharmacy = (req, res, next) => {
  const validator = {
    POST: checkCreateProduct,
    PUT: checkUpdateProduct,
    DELETE: () => {
      return null;
    },
  };
  if (!req.isPharmacy)
    return res
      .status(403)
      .json({ message: "you does not have access rights to the content" });

  const error = validator[req.method]();
  if (error) return res.status(400).json({ error: error });
  next();
};
