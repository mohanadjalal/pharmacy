const { verifyToken } = require("./authJWT");

const mw = {
  verifyToken,
};
module.exports = mw;
