import express from "express";
// import Data from "./Data.js";
import { data2 } from "./data2.js";

const DataRouter = express.Router();

DataRouter.route("/data").get(async function (req, res) {
  try {
    const deliveryData = data2;

    return res.status(200).json({
      success: true,
      count: deliveryData.length,
      deliveryData: deliveryData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

export default DataRouter;
