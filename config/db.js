const mongoose = require("mongoose");

// Replace <connection-string> with your actual MongoDB connection string
const connectionString = "mongodb+srv://user:user@test.w4y3v.mongodb.net/lawAssignment";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
