const express = require("express");
const subjectsRoutes = express.Router();
const subjectsController = require("../controllers/subjecs.controller");

subjectsRoutes.get("/subjects/", subjectsController.fetchAll);
subjectsRoutes.get("/subjects/:id", subjectsController.fetchById);
subjectsRoutes.delete("/subjects/", subjectsController.remove);
subjectsRoutes.post("/subjects/", subjectsController.create);
subjectsRoutes.put("/subjects/", subjectsController.update);

module.exports = subjectsRoutes;
