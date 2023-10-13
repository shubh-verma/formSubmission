const mongoose = require("mongoose");

const coonectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/formDB");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = coonectDB;
