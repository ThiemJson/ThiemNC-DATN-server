const subject_classModel = require("../models/subjects_class.models");

// Get all students
const fetchAll = async (req, res) => {
  subject_classModel
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
  subject_classModel
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
  subject_classModel
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
  subject_classModel
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
  subject_classModel
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
