// index.js

// Modules:

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
});

// index.js ends here