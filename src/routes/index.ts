import express, { Express } from "express";
import authRouter from "./v1/auth";

const v1Router: Express = express();

v1Router.use("/api/v1/auth", authRouter);

export default v1Router;
