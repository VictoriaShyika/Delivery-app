import express from "express";
import { deliveryData } from "./data.js";
import path from "path";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
app.use(cors());

app.get("/data", function (req, res) {
  res.send(deliveryData);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, '../client/build')));

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}:`);
});
