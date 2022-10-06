const express = require("express");
const roomRoutes = express.Router();
const roomController = require("../controllers/room.controllers");

roomRoutes.get("/room/", roomController.fetchAll);
roomRoutes.get("/room/:id", roomController.fetchById);
roomRoutes.delete("/room/", roomController.remove);
roomRoutes.post("/room/", roomController.create);
roomRoutes.put("/room/", roomController.update);

module.exports = roomRoutes;
