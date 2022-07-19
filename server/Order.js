const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    address: {
      type: String,
    },
    order: {
      type: [],
    },
  },
  {
    collection: "orders",
  }
);

module.exports = mongoose.model("Order", Order);
