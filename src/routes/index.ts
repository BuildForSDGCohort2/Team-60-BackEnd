import express, { Router } from "express";
import authRouter from "./v1/auth";


const v1Router: Router = express.Router();

v1Router.use("/api/v1/auth", authRouter);


export default v1Router;
