const {
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_USER_NAME,
  MYSQL_DATABASE_NAME,
} = require("./db");

module.exports = {
  SERVER_PORT: process.env.PORT || MYSQL_PORT,
  SERVER_HOST: process.env.HOST || MYSQL_HOST,
};
