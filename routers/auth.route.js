const router = require("express").Router();
const { signup, signin } = require("../controllers/auth.controler");
const mw = require("../middlewares");
router.post("/signup", mw.checkDoublecateEmail, signup);
router.post("/signin", signin);

module.exports = router;
