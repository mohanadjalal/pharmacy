const router = require("express").Router();
const multer = require("multer");

const controler = require("../controllers/product.controler");
const mw = require("../middlewares");

const { storage } = require("../config/multer.condig");
const upload = multer({ storage });
router.post(
  "/",
  [mw.verifyToken, mw.isPharmacy, upload.single("img")],
  controler.create
);

module.exports = router;
