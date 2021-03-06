const express = require("express");
const cors = require("cors");

const models = require("./models");
const auth = require("./routers/auth.route");
const user = require("./routers/user.route");
const product = require("./routers/product.route");
const cart = require("./routers/cart.route");
const delivery = require("./routers/delivery.route");

const app = express();
//------------------------middleware-------------------
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/product", product);
app.use("/api/cart", cart);
app.use("/api/delivery", delivery);

//-----------------------------------------------------------
models.sequelize.sync({ force: false }).then(function () {
  console.log("Database Configured");
});

app.get("/", (req, res) => {
  return res.json({ message: "welcome to our pharmacy app" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is listening over port ${port}`);
});
