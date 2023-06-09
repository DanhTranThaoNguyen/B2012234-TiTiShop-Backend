const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./api/routes/user");
const authRoute = require("./api/routes/auth");
const productRoute = require("./api/routes/product");
const cartRoute = require("./api/routes/cart");
const orderRoute = require("./api/routes/order");

const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => {
        console.log("Cannot connect to MongoDB", err)
        process.exit()
    })
    
app.listen(process.env.PORT || 8081, () => {
    console.log("Backend server is running!");
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
