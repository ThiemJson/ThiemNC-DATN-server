const dbConnection = require("../config/db.config");
const { TABLE_SV } = require("../../variables/db");
const { TABLE_GV } = require("../../variables/db");

const login = (req) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * ` + ` FROM ${TABLE_GV} ` + ``;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};
