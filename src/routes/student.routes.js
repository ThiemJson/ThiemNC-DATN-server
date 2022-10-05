const express = require("express");
const studentRoutes = express.Router();
const studentsController = require("../controllers/student.controllers");

studentRoutes.get("/", studentsController.fetchAll);
studentRoutes.get("/:id", studentsController.fetchById);
studentRoutes.delete("/:id", studentsController.remove);
studentRoutes.post("/", studentsController.create);
studentRoutes.put("/", studentsController.update);

module.exports = studentRoutes;
