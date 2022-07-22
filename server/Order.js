import mongoose from "mongoose";
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

export default mongoose.model("Order", Order);
