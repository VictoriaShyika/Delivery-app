import express from "express";
import {deliveryData} from "./data";

const app = express();

app.get("/delivery-data", (req, res) => {
  res.send(deliveryData);
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});

