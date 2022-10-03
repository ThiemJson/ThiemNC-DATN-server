import express from "express";
import APIController from "../controllers/APIController";

const router = express.Router();

const initAPIRoute = (app) => {
  router.get("/users", APIController.getAllUses);
  return app.use("/api/v1/", router);
};

export default initAPIRoute;
