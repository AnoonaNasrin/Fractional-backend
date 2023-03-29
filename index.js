const express = require("express");
const mongoose = require("mongoose");
const router = require("./Router")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config();

const app = express();
const Port = process.env.PORT_NUM;
const mongo_uri = process.env.MONGO_URL;

mongoose.connect(mongo_uri);

// Listen for the connection success event
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection is open to', mongo_uri);
});

// Listen for the connection error event
mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

// Listen for the connection disconnected event
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected');
});

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended :true ,limit:"50mb" , parameterLimit:1000000}))
app.use(bodyParser.json({limit:"50mb"}))
app.use(router)



app.listen(Port, () => {
  console.log(`Serve listening on port ${Port}`);
});
