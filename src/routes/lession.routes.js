const express = require("express");
const lessionRoutes = express.Router();
const lessionController = require("../controllers/lession.controllers");

lessionRoutes.get("/lession/", lessionController.fetchAll);
lessionRoutes.get("/lession/:id", lessionController.fetchById);
lessionRoutes.delete("/lession/", lessionController.remove);
lessionRoutes.post("/lession/", lessionController.create);
lessionRoutes.put("/lession/", lessionController.update);

module.exports = lessionRoutes;
