const dbConnection = require("../config/db.config");
const { TABLE_SINHVIEN_HOC_LOPMONHOC } = require("../../variables/db");

const getAll = (req) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * ` + ` FROM ${TABLE_SINHVIEN_HOC_LOPMONHOC} ` + ``;
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
      `SELECT * ` + ` FROM ${TABLE_SINHVIEN_HOC_LOPMONHOC} ` + `WHERE ID=${id}`;
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
    const { class_id, student_id, is_active } = req.body;
    const query =
      `INSERT INTO ${TABLE_SINHVIEN_HOC_LOPMONHOC} (IDLopmonhoc, IDSinhvien, Kichhoat) ` +
      ` VALUES (${class_id},${student_id},${is_active});`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const update = (req) => {
  const { id, class_id, student_id, is_active } = req.body;
  return new Promise((resolve, reject) => {
    if (!id) reject(null);
    const query =
      `UPDATE ${TABLE_SINHVIEN_HOC_LOPMONHOC} ` +
      ` SET IDLopmonhoc = ${class_id}, ` +
      ` IDSinhvien = ${student_id},` +
      ` Kichhoat = ${is_active},` +
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
    const query = `DELETE FROM ${TABLE_SINHVIEN_HOC_LOPMONHOC} WHERE ID=${id};`;
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
