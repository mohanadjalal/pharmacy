const router = require("express").Router();
const pControler = require("../controllers/pharmacy.controler");
const mw = require("../middlewares");

router.get("/", mw.verifyToken, pControler.findAll);
router.get("/:name", mw.verifyToken, pControler.findByName);
router.put("/:id", mw.verifyToken, pControler.update);
router.delete("/:id", mw.verifyToken, pControler.delete);

module.exports = router;
