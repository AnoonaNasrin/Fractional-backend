const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const propertySchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  bedrooms:{
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  squreFeet:{
    type:Number,
    required:true,
  }
});

module.exports = mongoose.model("Property", propertySchema);
