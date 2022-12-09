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

  /// ErrorCode
  ERROR_ID_NOTFOUND: "error.auth.IDNotfound",
  ERROR_PASSWORD_INCORRECT: "error.auth.passwordIncorrect",
  ERROR_DEVICE_INUSE: "error.auth.deviceInUse",
  ERROR_ACCOUNT_INUSE: "error.auth.accountInUse",
};
