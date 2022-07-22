import express from "express";
import Data from "./Data";

const DataRouter = express.Router();

DataRouter.route("/data").get(async function (req, res) {
  try {
    const deliveryData = await Data.find();

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

module.exports = DataRouter;
