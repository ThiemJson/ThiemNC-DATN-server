const express = require("express");
const lectureRoutes = express.Router();
const lectureController = require("../controllers/lecture.controller");

lectureRoutes.get("/lecture/", lectureController.fetchAll);
lectureRoutes.get("/lecture/:id", lectureController.fetchById);
lectureRoutes.delete("/lecture/", lectureController.remove);
lectureRoutes.post("/lecture/", lectureController.create);
lectureRoutes.put("/lecture/", lectureController.update);

module.exports = lectureRoutes;
