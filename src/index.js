// importing the dependencies
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("./database");

// defining the Express app
const app = express();

// define http port
const port = process.env.NODE_ENV === "production" ? 80 : 3000;

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using express to parse JSON bodies into JS objects
app.use(express.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// adding morgan to log HTTP requests
app.use(morgan("combined"));

const articleRoute = require("./Routes/article");
app.use("/api/article", articleRoute);

const commentRoute = require("./Routes/comment");
app.use("/api/comment", commentRoute);

app.get("/", (req, res) => {
  res.send("welcome to the world!");
});

// starting the server
app.listen(port, () => {
  console.log("listening on port " + port);
});
