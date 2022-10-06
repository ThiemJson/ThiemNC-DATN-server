const express = require("express");
const lession_room_subjectRoutes = express.Router();
const lession_room_subjectController = require("../controllers/lession_room_subject.controllers");

lession_room_subjectRoutes.get(
  "/lession-room-subject/",
  lession_room_subjectController.fetchAll
);
lession_room_subjectRoutes.get(
  "/lession-room-subject/:id",
  lession_room_subjectController.fetchById
);
lession_room_subjectRoutes.delete(
  "/lession-room-subject/",
  lession_room_subjectController.remove
);
lession_room_subjectRoutes.post(
  "/lession-room-subject/",
  lession_room_subjectController.create
);
lession_room_subjectRoutes.put(
  "/lession-room-subject/",
  lession_room_subjectController.update
);

module.exports = lession_room_subjectRoutes;
