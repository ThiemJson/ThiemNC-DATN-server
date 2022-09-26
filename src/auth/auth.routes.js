import express from "express";
import authController from "../auth/auth.controllers";
export const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
