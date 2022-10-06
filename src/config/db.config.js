const mysql = require("mysql");
const {
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_USER_NAME,
  MYSQL_DATABASE_NAME,
} = require("../../variables/db");

const connection = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER_NAME,
  password: MYSQL_PASSWORD,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE_NAME,
});

module.exports = connection;
