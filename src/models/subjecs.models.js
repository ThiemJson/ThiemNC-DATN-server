const dbConnection = require("../config/db.config");
const { TABLE_MONHOC } = require("../../variables/db");

const getAll = (req) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * ` + ` FROM ${TABLE_MONHOC} ` + ``;
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
    const query = `SELECT * ` + ` FROM ${TABLE_MONHOC} ` + `WHERE ID=${id}`;
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
    const { subject_id, name, lession_count, theory_count, practics_count } =
      req.body;
    const query =
      `INSERT INTO ${TABLE_MONHOC} (MaMH, TenMonhoc, Tongsotiet, Tietlythuyet, Tietthuchanh) ` +
      ` VALUES ('${subject_id}','${name}',${lession_count},${theory_count},${practics_count});`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const update = (req) => {
  const { id, subject_id, name, lession_count, theory_count, practics_count } =
    req.body;
  return new Promise((resolve, reject) => {
    if (!id) reject(null);
    const query =
      `UPDATE ${TABLE_MONHOC} ` +
      ` SET MaMH = '${subject_id}', ` +
      ` TenMonhoc = '${name}',` +
      ` Tongsotiet = ${lession_count},` +
      ` Tietlythuyet = ${theory_count},` +
      ` Tietthuchanh = ${practics_count},` +
      ` WHERE ID = ${id};`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const remove = (req) => {
  return new Promise((resolve, reject) => {
    const id = req.body.id;
    if (!id) reject(null);
    const query = `DELETE FROM ${TABLE_MONHOC} WHERE ID=${id};`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = {
  getAll,
  getByID,
  create,
  update,
  remove,
};
