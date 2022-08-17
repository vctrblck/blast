// index.js

// Libraries:

import express from "express";

import config from "./../config.js";

// Code:

const app = express();

app.get("/", function(request, response) {
  response.send("API active...")
})

app.listen(config.PORT);

// index.js ends here