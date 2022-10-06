const dbConnection = require("../config/db.config");
const { TABLE_CHITIETDD } = require("../../variables/db");

const getAll = (req) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * ` + ` FROM ${TABLE_CHITIETDD} ` + ``;
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
    const query = `SELECT * ` + ` FROM ${TABLE_CHITIETDD} ` + `WHERE ID=${id}`;
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
    const { attendance_id, student_id, attendance_time, cause } = req.body;
    const query =
      `INSERT INTO ${TABLE_CHITIETDD} (IDDiemdanh, IDSinhvien, Thoigiandiemdanh, Lydo) ` +
      ` VALUES (${attendance_id},${student_id},'${attendance_time}','${cause}');`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const update = (req) => {
  const { id, attendance_id, student_id, attendance_time, cause } = req.body;
  return new Promise((resolve, reject) => {
    if (!id) reject(null);
    const query =
      `UPDATE ${TABLE_CHITIETDD} ` +
      ` SET IDDiemdanh = ${attendance_id}, ` +
      ` IDSinhvien = ${student_id},` +
      ` Thoigiandiemdanh = '${attendance_time}',` +
      ` Lydo = '${cause}',` +
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
    const query = `DELETE FROM ${TABLE_CHITIETDD} WHERE ID=${id};`;
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
