const { verifyToken } = require("./authJWT");
const { isCustomer } = require("./authRoles");
const { checkDoublecateEmail } = require("./CheckDoublecateEmail");

const mw = {
  verifyToken,
  isCustomer,
  checkDoublecateEmail
};
module.exports = mw;
