const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Data = new Schema(
  {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    img: {
      type: String,
    },
    desc: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    collection: "data",
  }
);

module.exports = mongoose.model("Data", Data);
