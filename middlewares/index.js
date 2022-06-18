const { verifyToken } = require("./authJWT");
const { isCustomer, isPharmacy } = require("./authRoles");
const { checkDoublecateEmail } = require("./CheckDoublecateEmail");

const mw = {
  verifyToken,
  isCustomer,
  checkDoublecateEmail,
  isPharmacy,
};
module.exports = mw;
