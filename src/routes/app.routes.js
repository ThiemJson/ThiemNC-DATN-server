const studentRoutes = require("../routes/student.routes.js");
const subjectsRoutes = require("../routes/subjecs.routes");
const roomsRoutes = require("../routes/room.routes");
const lessionRoutes = require("../routes/lession.routes");
const classRoutes = require("../routes/class.routes");
const facultyRoutes = require("../routes/faculty.routes");

const initAppAPI = (app) => {
  app.use("/api/v1", studentRoutes);
  app.use("/api/v1", subjectsRoutes);
  app.use("/api/v1", roomsRoutes);
  app.use("/api/v1", lessionRoutes);
  app.use("/api/v1", classRoutes);
  app.use("/api/v1", facultyRoutes);
};

module.exports = initAppAPI;
