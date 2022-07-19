const express = require("express");
const OrderRouter = express.Router();

const Order = require("./Order");

OrderRouter.route("/create").post(function (req, res) {
  const order = new Order(req.body);
  console.log(order);
  order
    .save()
    .then((order) => {
      res.json("Order added successfully");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = OrderRouter;
