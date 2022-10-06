const express = require("express");
const lecture_attendance_studentRoutes = express.Router();
const lecture_attendance_studentController = require("../controllers/lecture_attendance_student.controllers");

lecture_attendance_studentRoutes.get(
  "/lecture-attendance-student/",
  lecture_attendance_studentController.fetchAll
);
lecture_attendance_studentRoutes.get(
  "/lecture-attendance-student/:id",
  lecture_attendance_studentController.fetchById
);
lecture_attendance_studentRoutes.delete(
  "/lecture-attendance-student/",
  lecture_attendance_studentController.remove
);
lecture_attendance_studentRoutes.post(
  "/lecture-attendance-student/",
  lecture_attendance_studentController.create
);
lecture_attendance_studentRoutes.put(
  "/lecture-attendance-student/",
  lecture_attendance_studentController.update
);

module.exports = lecture_attendance_studentRoutes;
