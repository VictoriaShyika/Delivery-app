import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./db.js";
import OrderRouter from "./OrderRouter.js";
import DataRouter from "./DataRouter.js";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "/client/build/index.html")));

const port = process.env.PORT || 5001;

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

app.use("/order", OrderRouter);
app.use("/delivery", DataRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
