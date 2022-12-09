const express = require("express");
const studentRoutes = express.Router();
const studentsController = require("../controllers/student.controllers");

studentRoutes.get("/students/", studentsController.fetchAll);
studentRoutes.get("/students/:id", studentsController.fetchById);
studentRoutes.get("/students/msv/:id", studentsController.fetchByMaSV);
studentRoutes.get(
  "/students/deviceCode/:id",
  studentsController.fetchByDeviceCode
);
studentRoutes.delete("/students/", studentsController.remove);
studentRoutes.post("/students/", studentsController.create);
studentRoutes.put("/students/", studentsController.update);

module.exports = studentRoutes;
