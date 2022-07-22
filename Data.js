import  mongoose from "mongoose";
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

export default mongoose.model("Data", Data);
