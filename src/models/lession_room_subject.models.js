const dbConnection = require("../config/db.config");
const { TABLE_CA_PHONG_LOPMONHOC } = require("../../variables/db");

const getAll = (req) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * ` + ` FROM ${TABLE_CA_PHONG_LOPMONHOC} ` + ``;
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
      `SELECT * ` + ` FROM ${TABLE_CA_PHONG_LOPMONHOC} ` + `WHERE ID=${id}`;
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
    const { lession_id, room_id, class_id, date_of_week } = req.body;
    const query =
      `INSERT INTO ${TABLE_CA_PHONG_LOPMONHOC} (IDCahoc, IDPhonghoc, IDLopmonhoc, Thu) ` +
      ` VALUES (${lession_id},${room_id},${class_id},'${date_of_week}');`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const update = (req) => {
  const { id, lession_id, room_id, class_id, date_of_week } = req.body;
  return new Promise((resolve, reject) => {
    if (!id) reject(null);
    const query =
      `UPDATE ${TABLE_CA_PHONG_LOPMONHOC} ` +
      ` SET IDCahoc = ${lession_id}, ` +
      ` IDPhonghoc = ${room_id},` +
      ` IDLopmonhoc = ${class_id},` +
      ` Thu = '${date_of_week}',` +
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
    const query = `DELETE FROM ${TABLE_CA_PHONG_LOPMONHOC} WHERE ID=${id};`;
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
