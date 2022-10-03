const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { SERVER_PORT } = require("../variables/constant.js");

const app = express();
const dbConnection = require("./config/db.config.js");

/// Config `dotENV`
dotenv.config();

app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Connection to Database
dbConnection.connect((err) => {
  if (err) throw err;
  console.log("Connect to MySQL DB success");
});

// Start server
app.listen(SERVER_PORT, () => {
  console.log("Server started on http://localhost:", SERVER_PORT);
});

module.exports = app;
