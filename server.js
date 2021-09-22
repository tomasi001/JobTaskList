// create variables to store requirements
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./server/database/connection");

// create instance of express
const app = express();

// get information from .env file
dotenv.config({ path: "config.env" });

// outline ports to be used
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan("tiny"));

// mongo db connection
connectDB();

// parse request to body parser
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// load routers
app.use("/", require("./server/routes/router"));

// tell app which port to listen to for requests
app.listen(3000, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
