const studentRoutes = require("../routes/student.routes.js");

const initAppAPI = (app) => {
  app.use("/api/v1/students", studentRoutes);
};

module.exports = initAppAPI;
