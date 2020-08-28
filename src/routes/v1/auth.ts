import express, { Router } from "express";
import authController from "../../controllers/v1/auth.controller";
import validator from "../../middleware/validator";

const AuthController: Router = express.Router();

AuthController.post("/login", validator.login, authController.login);

AuthController.post("/register", validator.register, authController.register);

export default AuthController;
