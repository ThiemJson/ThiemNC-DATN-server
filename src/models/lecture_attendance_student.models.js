const dbConnection = require("../config/db.config");
const { TABLE_GV_DIEMDANH_SV } = require("../../variables/db");

const getAll = (req) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * ` + ` FROM ${TABLE_GV_DIEMDANH_SV} ` + ``;
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
      `SELECT * ` + ` FROM ${TABLE_GV_DIEMDANH_SV} ` + `WHERE ID=${id}`;
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
    const { lecture_id, class_id, attendance_day, start_time } = req.body;
    const query =
      `INSERT INTO ${TABLE_GV_DIEMDANH_SV} (IDGiangvien, IDLopmonhoc, Ngaydiemdanh, Thoidiembatdau) ` +
      ` VALUES (${lecture_id},${class_id},'${attendance_day}','${start_time}');`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const update = (req) => {
  const { id, lecture_id, class_id, attendance_day, start_time } = req.body;
  return new Promise((resolve, reject) => {
    if (!id) reject(null);
    const query =
      `UPDATE ${TABLE_GV_DIEMDANH_SV} ` +
      ` SET IDGiangvien = ${lecture_id},` +
      ` IDLopmonhoc = ${class_id},` +
      ` Ngaydiemdanh = '${attendance_day}',` +
      ` Thoidiembatdau = '${start_time}',` +
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
    const query = `DELETE FROM ${TABLE_GV_DIEMDANH_SV} WHERE ID=${id};`;
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
