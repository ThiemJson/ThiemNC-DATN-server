const dbConnection = require("../config/db.config");
const { TABLE_MONHOC_LOPMONHOC } = require("../../variables/db");

const getAll = (req) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * ` + ` FROM ${TABLE_MONHOC_LOPMONHOC} ` + ``;
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
    const query =
      `SELECT * ` + ` FROM ${TABLE_MONHOC_LOPMONHOC} ` + `WHERE ID=${id}`;
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
    const { subject_id, class_id, year, semesters } = req.body;
    const query =
      `INSERT INTO ${TABLE_MONHOC_LOPMONHOC} (IDMonhoc, IDLopmonhoc, Namhoc, Hocky) ` +
      ` VALUES (${subject_id},${class_id},${year},${semesters});`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const update = (req) => {
  const { id, subject_id, class_id, year, semesters } = req.body;
  return new Promise((resolve, reject) => {
    if (!id) reject(null);
    const query =
      `UPDATE ${TABLE_MONHOC_LOPMONHOC} ` +
      ` SET IDMonhoc = '${subject_id}', ` +
      ` IDLopmonhoc = ${class_id},` +
      ` Namhoc = ${year},` +
      ` Hocky = ${semesters},` +
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
    const query = `DELETE FROM ${TABLE_MONHOC_LOPMONHOC} WHERE ID=${id};`;
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
