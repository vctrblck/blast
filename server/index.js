const express = require("express");
const connection =  require("./db");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/songs");

require("dotenv").config();
//this allows us to no longer use try catch help
//it takes care of asyncy errors
require("express-async-errors");

connection()
app.use(cors());
app.use(express.json());

app.use("/api/users",userRoutes);
app.use("/api/login",authRoutes);
app.use("/api/songs",songRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`))

// index.js ends here