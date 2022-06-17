const router = require("express").Router();
const userControler = require("../controllers/user.controler");
const mw = require("../middlewares");

router.get("/", mw.verifyToken, userControler.findAll);
router.get("/:name", mw.verifyToken, userControler.findByName);
router.put("/:id", mw.verifyToken, userControler.update);
router.delete("/:id", mw.verifyToken, userControler.delete);

module.exports = router;
