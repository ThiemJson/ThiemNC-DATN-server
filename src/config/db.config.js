const mysql = require("mysql");
const {
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_USER_NAME,
} = require("../../variables/db.js");

const connection = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER_NAME,
  password: MYSQL_PASSWORD,
  port: MYSQL_PORT,
});

module.exports = connection;
