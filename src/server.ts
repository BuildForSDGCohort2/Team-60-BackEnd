import app from "./app";
import http from "http";
import connectToDB from "./db";
connectToDB();

const port: number | string = process.env.PORT || 3000;
const server = http.createServer(app);

/* eslint no-console: ["error", { allow: ["warn", "log"] }] */
server.listen(port, () => console.log(`App started on this port: ${port}`));

export default server;
