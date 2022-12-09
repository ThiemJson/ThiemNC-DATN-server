const dbConnection = require("../config/db.config");
const { TABLE_SV } = require("../../variables/db");
const { TABLE_GV } = require("../../variables/db");
const { json } = require("body-parser");
const {
  ERROR_DEVICE_INUSE,
  ERROR_ID_NOTFOUND,
  ERROR_PASSWORD_INCORRECT,
  ERROR_ACCOUNT_INUSE,
} = require("../../variables/constant");

///
// Tìm SV theo id
// 	SvById
// Tìm SV theo uid
// 	SvByUid

// B1. nếu SvById = null -> return tk ko tồn tại
// B2. nếu SvById.uid = null và SvByUid = null -> insert Uid -> return token
// B3. nếu SvById.uid != null và SvByUid != null và SvById.id = SvByUid.id -> return token
// B4. nếu SvById.uid = null và SvByUid != null -> return máy này đã được đăng nhập bằng TK khác
// B5. nếu SvById.uid != null và SvByUid = null -> return TK này đã đăng nhập ở máy khác
// B6. nếu SvById.uid != null và SvByUid.uid != null và SvById.id != SvByUid.id
// 	-> return TK này đã đăng nhập ở máy khác hoặc Máy này đã được đăng nhập bằng TK khác

const loginSV = (req) => {
  const { username, deviceCode, password } = req.body;
  console.log("login  ", req.body);
  return new Promise((resolve, reject) => {
    // `Tìm SV theoID`
    const queryByID =
      `SELECT * ` + ` FROM ${TABLE_SV} ` + `WHERE MaSV='${username}'`;
    dbConnection.query(queryByID, (error, resultsByID) => {
      console.log("resultsByID => ", resultsByID);
      // `Tìm SV theo deviceCode`
      const queryByUID =
        `SELECT * ` + ` FROM ${TABLE_SV} ` + `WHERE MaThietbi='${deviceCode}'`;
      dbConnection.query(queryByUID, (error, resultsByUID) => {
        console.log("resultsByUID => ", resultsByUID);

        /// `Người dùng không tồn tại`
        if (!resultsByID || resultsByID.length === 0) {
          reject({ errorCode: ERROR_ID_NOTFOUND });
          return;
        }

        /// `Người dùng có tồn tại và máy này chưa đăng nhập bao giờ`
        if (!resultsByUID || resultsByUID.length === 0) {
          /// `Kiểm tra password`
          if (resultsByID[0]["Matkhau"] !== password) {
            reject({ errorCode: ERROR_PASSWORD_INCORRECT });
            return;
          }

          /// `Tài khoản người dùng có tồn tại và chưa đăng nhập bao giờ`
          if (!resultsByID[0]["MaThietbi"]) {
            resolve(resultsByID);
            return;
          }

          /// `Tài khoản người dùng có tồn tại, đã từng đăng nhập nhưng không phải máy này`
          if (resultsByID[0]["MaThietbi"] != deviceCode) {
            reject({ errorCode: ERROR_ACCOUNT_INUSE });
            return;
          }

          resolve(resultsByID);
          return;
        }

        /// TK này đã đăng nhập ở máy khác hoặc Máy này đã được đăng nhập bằng TK khác
        const accountIDbyID = resultsByID[0]["ID"];
        const accountIDbyUID = resultsByUID[0]["ID"];
        if (accountIDbyID !== accountIDbyUID) {
          reject({ errorCode: ERROR_DEVICE_INUSE });
          return;
        }

        /// `Người dùng có tồn tại và máy này đã được đăng nhập`
        const deviceUIDbyID = resultsByID[0]["MaThietbi"];
        const deviceUIDbyUID = resultsByUID[0]["MaThietbi"];

        /// `Đăng nhập trên cùng 1 máy
        if (deviceUIDbyID === deviceUIDbyUID) {
          /// `Kiểm tra password`
          if (resultsByID[0]["Matkhau"] !== password) {
            reject({ errorCode: ERROR_PASSWORD_INCORRECT });
            return;
          }

          resolve(resultsByID);
        } else {
          reject({ errorCode: ERROR_DEVICE_INUSE });
        }
      });
    });
  });
};

const loginGV = (req) => {
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

module.exports = {
  loginSV,
  loginGV,
};
