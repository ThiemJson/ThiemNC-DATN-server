const express = require("express");
const classRoutes = express.Router();
const classController = require("../controllers/class.controllers");

classRoutes.get("/class/", classController.fetchAll);
classRoutes.get("/class/:id", classController.fetchById);
classRoutes.delete("/class/", classController.remove);
classRoutes.post("/class/", classController.create);
classRoutes.put("/class/", classController.update);

module.exports = classRoutes;
