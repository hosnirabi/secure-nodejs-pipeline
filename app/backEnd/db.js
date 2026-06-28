const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.dbUrl);
  } 
  catch (error) {
    console.error(`MongoDB Error: ${error.message}`);
    process.exit(1); 
  }
};

module.exports = connectDB;
