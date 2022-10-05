const express = require("express");
const studentRoutes = express.Router();
const studentsController = require("../controllers/student.controllers");

studentRoutes.get("/", studentsController.getAll);
studentRoutes.get("/:id", studentsController.getByID);

module.exports = studentRoutes;
