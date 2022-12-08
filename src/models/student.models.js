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
    const query = `SELECT * ` + ` FROM ${TABLE_SV} ` + `WHERE ID=${id}`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const getByMaSV = (req) => {
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
    const {
      student_id,
      name,
      date_of_birth,
      gender,
      device_id,
      fcm_id,
      password,
    } = req.body;
    const query =
      `INSERT INTO ${TABLE_SV} (MaSV, Hoten, Ngaysinh, Gioitinh, MaThietbi, MaFCM, Matkhau) ` +
      ` VALUES ('${student_id}','${name}','${date_of_birth}','${gender}','${device_id}', '${fcm_id}', '${password}');`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const update = (req) => {
  const {
    id,
    student_id,
    name,
    date_of_birth,
    gender,
    device_id,
    fcm_id,
    password,
  } = req.body;
  return new Promise((resolve, reject) => {
    if (!id) reject(null);
    const query =
      `UPDATE ${TABLE_SV} ` +
      ` SET MaSV = '${student_id}', ` +
      ` Hoten = '${name}',` +
      ` Ngaysinh = '${date_of_birth}',` +
      ` Gioitinh = '${gender}',` +
      ` MaThietbi = '${device_id}',` +
      ` MaFCM = '${fcm_id}',` +
      ` Matkhau = '${password}'` +
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
    const query = `DELETE FROM ${TABLE_SV} WHERE ID=${id};`;
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
  getByMaSV,
  create,
  update,
  remove,
};
