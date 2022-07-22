import express from "express";
import Order from "./Order.js";

const OrderRouter = express.Router();

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

export default OrderRouter;
