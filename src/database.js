require("dotenv").config();

const mongoose = require("mongoose");

const mongoString =
  process.env.DATABASE_URL ||
  "mongodb://localhost:27017/rest-api?directConnection=true&authSource=admin&appName=mongosh+1.6.0";
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
