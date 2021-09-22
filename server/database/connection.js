// import mongoose as a requirement
const mongoose = require("mongoose");

// create asynchronous function to connect to mongo DB Database
const connectDB = async () => {
  try {
    // mongodb connection
    const connection = await mongoose.connect(process.env.MONGO_URI);

    // alert if connected or if there was an error
    console.log(`Mongo DB Connected ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};


// export module
module.exports = connectDB;
