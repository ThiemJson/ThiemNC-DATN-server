const studentRoutes = require("../routes/student.routes.js");
const subjectsRoutes = require("../routes/subjecs.routes");
const roomsRoutes = require("../routes/room.routes");
const lessionRoutes = require("../routes/lession.routes");
const classRoutes = require("../routes/class.routes");
const facultyRoutes = require("../routes/faculty.routes");
const lectureRoutes = require("../routes/lecture.routes");
const student_classRoutes = require("../routes/student_class.routes");
const subject_classRoutes = require("../routes/subjects_class.routes");
const detail_attendanceRoutes = require("../routes/detail_attendance.routes");
const lecture_attendance_studentRoutes = require("../routes/lecture_attendance_student.routes");
const lession_room_subjectModel = require("../routes/lession_room_subject.routes");

const initAppAPI = (app) => {
  app.use("/api/v1", studentRoutes);
  app.use("/api/v1", subjectsRoutes);
  app.use("/api/v1", roomsRoutes);
  app.use("/api/v1", lessionRoutes);
  app.use("/api/v1", classRoutes);
  app.use("/api/v1", facultyRoutes);
  app.use("/api/v1", lectureRoutes);
  app.use("/api/v1", student_classRoutes);
  app.use("/api/v1", detail_attendanceRoutes);
  app.use("/api/v1", lecture_attendance_studentRoutes);
  app.use("/api/v1", lession_room_subjectModel);
  app.use("/api/v1", subject_classRoutes);
};

module.exports = initAppAPI;
