import express, { Router } from "express";
import authRouter from "./v1/auth";

const RouterV1: Router = express.Router();

RouterV1.use("/api/v1/auth", authRouter);

export default RouterV1;
