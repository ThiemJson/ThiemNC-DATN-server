const dbConnection = require("../config/db.config");
const { TABLE_SV } = require("../../variables/db");

const getAll = (req) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * ` + ` FROM ${TABLE_SV} ` + ``;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const getByID = (req) => {
  return new Promise((resolve, reject) => {
    const id = req.params.id;
    if (!id) reject(null);
    const query = `SELECT * ` + ` FROM ${TABLE_SV} ` + `WHERE MaSV=${id}`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const create = (req) => {
  return new Promise((resolve, reject) => {
    const id = req.params.id;
    if (!id) reject(null);
    const query = `INSERT INTO ${TABLE_SV}` + ` VALUES (); `;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const update = (req) => {
  // return new Promise((resolve, reject) => {
  //   const id = req.params.id;
  //   if (!id) reject(null);
  //   const query = `INSERT INTO ${TABLE_SV}` + ` VALUES (); `;
  //   dbConnection.query(query, (error, results) => {
  //     if (error) {
  //       reject(error);
  //     }
  //     resolve(results);
  //   });
  // });
};

const remove = (req) => {
  // return new Promise((resolve, reject) => {
  //   const id = req.params.id;
  //   if (!id) reject(null);
  //   const query = `INSERT INTO ${TABLE_SV}` + ` VALUES (); `;
  //   dbConnection.query(query, (error, results) => {
  //     if (error) {
  //       reject(error);
  //     }
  //     resolve(results);
  //   });
  // });
};

module.exports = {
  getAll,
  getByID,
  create,
  update,
  remove,
};
