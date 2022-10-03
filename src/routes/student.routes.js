const express = require("express");
const studentRoutes = express.Router();
const studentsController = require("../controllers/student.controllers");

studentRoutes.get("/", studentsController.getAllStudent);
studentRoutes.get("/:id", studentsController.getStudentByID);

module.exports = studentRoutes;
