const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const orderCart = require("./routes/cart");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connection successfull"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", orderCart);

app.listen(process.env.PORT || 5000, ()=> {
  console.log("BE server is running");
})