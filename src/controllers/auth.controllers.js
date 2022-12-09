const studentModel = require("../models/auth.models");

// Get all students
const login = async (req, res) => {
  const { type } = req.body;
  if (type === 1) {
    studentModel
      .loginSV(req)
      .then((results) => {
        res.status(200).json({
          status: 0,
          data: results,
        });
      })
      .catch((error) => {
        res.status(400).json({
          data: error,
          status: -1,
        });
      });
    return;
  }

  studentModel
    .loginSV(req)
    .then((results) => {
      res.status(200).json({
        status: 0,
        data: results,
      });
    })
    .catch((error) => {
      res.status(400).json({
        data: error,
        status: -1,
      });
    });
};

module.exports = {
  login,
};
