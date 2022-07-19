import express from "express";
// import { deliveryData } from "./data";

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// app.get("/delivery-data", (req, res) => {
//   res.send(deliveryData);
// });

var cors = require("cors");

app.use(cors());

// app.post("/order", function requestHandler(req, res) {
//   res.end("Order sent");
// });

const config = require("./db");
const OrderRouter = require('./OrderRouter');
const DataRouter = require('./DataRouter');



mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database " + err);
  }
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/order', OrderRouter);
app.use('/delivery', DataRouter);



app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000:");
});
