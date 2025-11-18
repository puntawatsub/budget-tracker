const express = require("express");
const app = express();

const loginRouter = require("./routes/loginRouter");
const connectDB = require("./config/db");

require('dotenv').config();

const morgan = require("morgan");

connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(morgan("dev"));
 

// Use the loginRouter for all /logins routes
app.use("/api/logins", loginRouter);

// Example route that throws an error
app.get('/error', (req, res, next) => {
  // Trigger an error
  const error = new Error("Network problem");
  next(error);
});


// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});


const port = process.env.PORT || 3000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});