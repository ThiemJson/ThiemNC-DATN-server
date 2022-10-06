const express = require("express");
const notificationRoutes = express.Router();
const notificationController = require("../controllers/notification.controllers");

notificationRoutes.get("/notification/", notificationController.fetchAll);
notificationRoutes.get("/notification/:id", notificationController.fetchById);
notificationRoutes.delete("/notification/", notificationController.remove);
notificationRoutes.post("/notification/", notificationController.create);
notificationRoutes.put("/notification/", notificationController.update);

module.exports = notificationRoutes;
