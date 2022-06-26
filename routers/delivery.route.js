const router = require("express").Router();

const controler = require("../controllers/delivery.controler");
const mw = require("../middlewares");

//cart
router.get("/", [mw.verifyToken, mw.isCustomer], controler.getFromCart);
router.get("/info", [mw.verifyToken], controler.getDeliveryInfo);

module.exports = router;
