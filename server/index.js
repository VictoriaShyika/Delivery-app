import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./db.js";
import OrderRouter from "./OrderRouter.js";
import DataRouter from "./DataRouter.js";
import cors from "cors";
import path from "path"

const app = express();
app.use(cors());

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database " + err);
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../client/build'));

app.use("/order", OrderRouter);
app.use("/delivery", DataRouter);

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000:");
});
