const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

mongoose.connect(
  "mongodb://omnistack:omnistack@cluster0-shard-00-00-7avuz.gcp.mongodb.net:27017,cluster0-shard-00-01-7avuz.gcp.mongodb.net:27017,cluster0-shard-00-02-7avuz.gcp.mongodb.net:27017/radar_dev?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log("DB CONNECTED")
);

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", routes);

app.listen(3333, console.log("Server connected"));
