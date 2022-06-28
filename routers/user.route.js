const router = require("express").Router();
const userControler = require("../controllers/user.controler");
const mw = require("../middlewares");

router.get("/pharmacy", mw.verifyToken, userControler.findAllPharmacy);
router.get("/customer", mw.verifyToken, userControler.findAllCustomer);

router.get("/:name", [mw.verifyToken, mw.isCustomer], userControler.findByName);
router.put("/:id", mw.verifyToken, userControler.update);
router.delete("/:id", mw.verifyToken, userControler.delete);

module.exports = router;
