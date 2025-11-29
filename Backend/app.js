const express = require("express");
require("express-async-errors");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");

const router = require("./router/v1.routes");
const errorHandler = require("./middleware/errorHandler.middleware");
const HttpError = require("./utils/customError");

const app = express();

//cors setup
// var whitelist = [
//   "http://localhost:5173",
//   "https://snazz-you.vercel.app",
//   "https://snazzyou.com",
// ];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/v1", router);
app.get("/", (_, res) => {
  res.json({ success: true, message: "snazz backend is online" });
});
app.use((req, res, next) => {
  throw new HttpError(404, "Enpoint not found");
});
app.use(errorHandler);

module.exports = app;
