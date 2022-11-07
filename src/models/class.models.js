const dbConnection = require("../config/db.config");
const { TABLE_LOPMONHOC } = require("../../variables/db");

const getAll = (req) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * ` + ` FROM ${TABLE_LOPMONHOC} ` + ``;
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
    const query = `SELECT * ` + ` FROM ${TABLE_LOPMONHOC} ` + `WHERE ID=${id}`;
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
    const { class_id, lecture_id, name } = req.body;
    const query =
      `INSERT INTO ${TABLE_LOPMONHOC} (MaLopMonhoc, IDGiangvien, TenLopmonhoc) ` +
      ` VALUES ('${class_id}',${lecture_id},'${name}');`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const update = (req) => {
  const { id, class_id, lecture_id, name } = req.body;
  return new Promise((resolve, reject) => {
    if (!id) reject(null);
    const query =
      `UPDATE ${TABLE_LOPMONHOC} ` +
      ` SET MaLopMonhoc = '${class_id}', ` +
      ` IDGiangvien = ${lecture_id},` +
      ` TenLopmonhoc = '${name}',` +
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
    const query = `DELETE FROM ${TABLE_LOPMONHOC} WHERE ID=${id};`;
    dbConnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const fetAllClassWith = (req) => {
  return new Promise((resolve, reject) => {
    const id = req.body.id;
    if (!id) reject(null);
    const query = `SELECT lmh.MaLopMonhoc as malopmonhoc, lmh.TenLopmonhoc as tenlopmonhoc, mh.TenMonhoc as tenmonhoc, mh_lmh.Namhoc as namhoc, mh_lmh.Hocky as hocky, gv.Hoten as hotengiangvien, ph.TenPH as tenphong, ch.GioBatdau as giobatdau, ch.GioKetthuc as gioketthu
    FROM LOPMONHOC as lmh, MONHOC_LOPMONHOC as mh_lmh, MONHOC as mh, GIANGVIEN as gv, CA_PHONG_LOPMONHOC as cplmh, PHONGHOC as ph, CAHOC as ch
    WHERE mh_lmh.IDMonhoc = mh.ID AND mh_lmh.IDLopmonhoc = lmh.ID AND lmh.IDGiangvien = gv.ID AND cplmh.IDCahoc = ch.ID AND cplmh.IDPhonghoc = ph.ID`;
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
