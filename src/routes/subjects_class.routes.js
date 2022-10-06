const express = require("express");
const subject_classRoutes = express.Router();
const subject_classController = require("../controllers/subjects_class.controllers");

subject_classRoutes.get("/subject-class/", subject_classController.fetchAll);
subject_classRoutes.get(
  "/subject-class/:id",
  subject_classController.fetchById
);
subject_classRoutes.delete("/subject-class/", subject_classController.remove);
subject_classRoutes.post("/subject-class/", subject_classController.create);
subject_classRoutes.put("/subject-class/", subject_classController.update);

module.exports = subject_classRoutes;
