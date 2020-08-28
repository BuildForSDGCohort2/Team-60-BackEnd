// tslint:disable: no-console
import mongoose from "mongoose";
import configuration from "./config/config";

const { connectionString } = configuration(process.env.NODE_ENV);

const connectToDB = () =>
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    /* eslint no-console: ["error", { allow: ["warn", "log"] }] */
    .then(() => console.log("Connected to database successfully."))
    /* eslint no-console: ["error", { allow: ["warn", "log"] }] */
    .catch((e) => console.log("Error: ", e));

export default connectToDB;
