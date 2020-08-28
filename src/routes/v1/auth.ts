import express, { Express } from "express";
import authController from "../../controllers/v1/auth.controller";
import validator from "../../middleware/validator";

const authRouter: Express = express();

authRouter.post("/login", validator.login, authController.login);

authRouter.post("/register", validator.register, authController.register);

export default authRouter;
