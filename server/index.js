import express from "express";
import { deliveryData } from "./data.js";

import cors from "cors";

const app = express();
app.use(cors());

app.get("/data", function (req, res) {
  res.send(deliveryData);
});

// app.use(express.static('../client/build'));

app.listen(5001, () => {
  console.log("Server is running at http://localhost:5001:");
});
