const express = require("express");
const detail_attendanceRoutes = express.Router();
const detail_attendanceController = require("../controllers/detail_attendance.controller");

detail_attendanceRoutes.get(
  "/detail-attendance/",
  detail_attendanceController.fetchAll
);
detail_attendanceRoutes.get(
  "/detail-attendance/:id",
  detail_attendanceController.fetchById
);
detail_attendanceRoutes.delete(
  "/detail-attendance/",
  detail_attendanceController.remove
);
detail_attendanceRoutes.post(
  "/detail-attendance/",
  detail_attendanceController.create
);
detail_attendanceRoutes.put(
  "/detail-attendance/",
  detail_attendanceController.update
);

module.exports = detail_attendanceRoutes;
