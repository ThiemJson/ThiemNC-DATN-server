const studentRoutes = require("../routes/student.routes.js");
const subjectsRoutes = require("../routes/subjecs.routes");
const roomsRoutes = require("../routes/room.routes");
const lessionRoutes = require("../routes/lession.routes");
const classRoutes = require("../routes/class.routes");
const facultyRoutes = require("../routes/faculty.routes");
const lectureRoutes = require("../routes/lecture.routes");
const student_classRoutes = require("../routes/student_class.routes");

const initAppAPI = (app) => {
  app.use("/api/v1", studentRoutes);
  app.use("/api/v1", subjectsRoutes);
  app.use("/api/v1", roomsRoutes);
  app.use("/api/v1", lessionRoutes);
  app.use("/api/v1", classRoutes);
  app.use("/api/v1", facultyRoutes);
  app.use("/api/v1", lectureRoutes);
  app.use("/api/v1", student_classRoutes);
};

module.exports = initAppAPI;
