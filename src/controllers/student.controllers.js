const studentModel = require("../models/student.models.js");

// Get all students
const fetchAll = async (req, res) => {
  studentModel
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
  studentModel
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

// Get by id
const fetchByMaSV = async (req, res) => {
  studentModel
    .getByMaSV(req)
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
  studentModel
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
  studentModel
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
  studentModel
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
  fetchByMaSV,
  create,
  update,
  remove,
};
