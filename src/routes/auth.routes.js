const express = require("express");
const authRoutes = express.Router();
const authControllers = require("../controllers/auth.controllers");
authRoutes.post("/auth/", authControllers.login);

module.exports = authRoutes;
