const notificationModel = require("../models/notification.models");

// Get all students
const fetchAll = async (req, res) => {
  notificationModel
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
  notificationModel
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
  notificationModel
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
  notificationModel
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
  notificationModel
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
