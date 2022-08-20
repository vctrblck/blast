const express = require("express");
const connection =  require("./db");
const app = express();
const cors = require("cors");
//const { use } = require('express/lib/router');
const userRoutes = require("./routes/users");

require("dotenv").config();
//this allows us to no longer use try catch help
//it takes care of asyncy errors
require("express-async-errors");

connection()
app.use(cors());
app.use(express.json());
app.use("/api/users",userRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`))

// index.js ends here