const express = require("express");
const facultyRoutes = express.Router();
const facultyController = require("../controllers/faculty.controllers");

facultyRoutes.get("/faculty/", facultyController.fetchAll);
facultyRoutes.get("/faculty/:id", facultyController.fetchById);
facultyRoutes.delete("/faculty/", facultyController.remove);
facultyRoutes.post("/faculty/", facultyController.create);
facultyRoutes.put("/faculty/", facultyController.update);

module.exports = facultyRoutes;
