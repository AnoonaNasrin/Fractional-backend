const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const Port = process.env.PORT_NUM;
const mongo_uri = process.env.MONGO_URL;

mongoose.connect(mongo_uri);

app.get("/", (req, res) => {
  res.send("heloo  fractional");
});

app.listen(Port, () => {
  console.log(`Serve listening on port ${Port}`);
});
