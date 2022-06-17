exports.isCustomer = (req, res, next) => {
  if (req.isPharmacy)
    return res
      .status(403)
      .json({ message: "you does not have access rights to the content" });

  next();
};
