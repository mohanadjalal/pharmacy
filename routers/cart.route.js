const router = require("express").Router();

const controler = require("../controllers/cart.controler");
const mw = require("../middlewares");

//cart
router.get("/", [mw.verifyToken, mw.isCustomer], controler.getCartProduct);

router.put("/:pId", [mw.verifyToken, mw.isCustomer], controler.addToCart);
router.delete(
  "/:pId",
  [mw.verifyToken, mw.isCustomer],
  controler.removeFromCart
);

module.exports = router;
