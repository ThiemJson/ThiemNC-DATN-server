const lecture_attendance_studentModel = require("../models/lecture_attendance_student.models");

// Get all students
const fetchAll = async (req, res) => {
  lecture_attendance_studentModel
    .getAll(req)
    .then((results) => {
      res.status(200).json({
        status: 0,
        data: results,
      });
    })
    .catch((error) => {
      res.status(400).json({
        data: null,
        status: -1,
      });
    });
};

// Get by id
const fetchById = async (req, res) => {
  lecture_attendance_studentModel
    .getByID(req)
    .then((results) => {
      res.status(200).json({
        status: 0,
        data: results,
      });
    })
    .catch((error) => {
      res.status(400).json({
        data: null,
        status: -1,
      });
    });
};

const create = async (req, res) => {
  lecture_attendance_studentModel
    .create(req)
    .then((results) => {
      res.status(200).json({
        status: 0,
        data: results,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: -1,
        data: null,
      });
    });
};

const update = async (req, res) => {
  lecture_attendance_studentModel
    .update(req)
    .then((results) => {
      res.status(200).json({
        status: 0,
        data: results,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: -1,
        data: null,
      });
    });
};

const remove = async (req, res) => {
  lecture_attendance_studentModel
    .remove(req)
    .then((results) => {
      res.status(200).json({
        status: 0,
        data: results,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: -1,
        data: null,
      });
    });
};

module.exports = {
  fetchAll,
  fetchById,
  create,
  update,
  remove,
};
