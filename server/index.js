// index.js

// Modules:
/*
import config from "./../config.js";
import app from "./express.js";

// Code:

// Initialize server
app.listen(config.PORT, function(error) {
  if (error) {
    console.log("Error in initiating server!")
  } else {
    console.log(`Server active on port ${config.PORT}...`)
  }
});*/
const express = require('express');
const connection =  require("./db");
const app = express();
require("dotenv").config();

connection()

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`))

// index.js ends here