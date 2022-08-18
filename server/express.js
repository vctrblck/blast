// express.js

// Modules:

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Code:

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.static(path.resolve(__dirname, "../client", "build")));

// Routes
app.get("*", function(request, response) {
  const filePath = path.resolve(__dirname, "../client", "build", "index.html");
  response.sendFile(filePath);
  console.log(filePath);
})

export default app;

// express.js ends here