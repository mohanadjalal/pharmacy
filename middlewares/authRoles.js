const { checkCreateProduct } = require("../validators/productValidator");

exports.isCustomer = (req, res, next) => {
  if (req.isPharmacy)
    return res
      .status(403)
      .json({ message: "you does not have access rights to the content" });

  next();
};

exports.isPharmacy = (req, res, next) => {
  if (!req.isPharmacy)
    return res
      .status(403)
      .json({ message: "you does not have access rights to the content" });
  const error = checkCreateProduct(req.body);
  if (error) return res.status(400).json({ error: error });
  next();
};
