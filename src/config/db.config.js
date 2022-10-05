const mysql = require("mysql");
const {
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_USER_NAME,
  MYSQL_DATABASE_NAME,
} = require("../../variables/db");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "beexpress",
});

module.exports = connection;
