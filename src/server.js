const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { SERVER_PORT, SERVER_HOST } = require("../variables/constant");

const app = express();
const dbConnection = require("./config/db.config");
const initAppAPI = require("./routes/app.routes");

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

// Init app api
initAppAPI(app);

// Connection to Database
dbConnection.connect((err) => {
  if (err) throw err;
  console.log("Connect to MySQL DB success");
});

// Start server
app.listen(SERVER_PORT, () => {
  console.log("Server started on: ", SERVER_HOST, " : ", SERVER_PORT);
});

module.exports = app;
