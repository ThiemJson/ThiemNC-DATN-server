const dbConnection = require("../config/db.config");
const { TABLE_GV } = require("../../variables/db");

const getAll = (req) => {
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

const getByID = (req) => {
  return new Promise((resolve, reject) => {
    const id = req.params.id;
    if (!id) reject(null);
    const query = `SELECT * ` + ` FROM ${TABLE_GV} ` + `WHERE ID=${id}`;
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
      lecture_id,
      faculty_id,
      name,
      date_of_birth,
      gender,
      device_id,
      fcm_id,
      password,
    } = req.body;
    const query =
      `INSERT INTO ${TABLE_GV} (MaGV, IDKhoa, Hoten, Ngaysinh, Gioitinh, MaThietbi, MaFCM, Matkhau) ` +
      ` VALUES ('${lecture_id}',${faculty_id},'${name}','${date_of_birth}','${gender}','${device_id}', '${fcm_id}', '${password}');`;
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
    lecture_id,
    faculty_id,
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
      `UPDATE ${TABLE_GV} ` +
      ` SET MaGV = '${lecture_id}', ` +
      ` IDKhoa = ${faculty_id},` +
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
    const query = `DELETE FROM ${TABLE_GV} WHERE ID=${id};`;
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
