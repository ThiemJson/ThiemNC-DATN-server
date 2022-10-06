const express = require("express");
const student_classRoutes = express.Router();
const student_classController = require("../controllers/student_class.controllers");

student_classRoutes.get("/student-class/", student_classController.fetchAll);
student_classRoutes.get(
  "/student-class/:id",
  student_classController.fetchById
);
student_classRoutes.delete("/student-class/", student_classController.remove);
student_classRoutes.post("/student-class/", student_classController.create);
student_classRoutes.put("/student-class/", student_classController.update);

module.exports = student_classRoutes;
