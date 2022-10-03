const dbConnection = require("./config/db.config.js");

// Get all students
const getAllStudent = async (req, res) => {
  const query = "SELECT * FROM STUDENTS";
};

// Get Student by ID
const getStudentByID = async (req, res) => {};

module.exports = {
  getAllStudent,
  getStudentByID,
};
