import Express from "express";

import {
  saveAttendanceController,
  getAllAttendanceController,
  getAttendanceController,
} from "../controllers/index.js";

const AttendanceRoute = Express.Router();

AttendanceRoute.route("/save").post(saveAttendanceController);
AttendanceRoute.route("/:Date").get(getAttendanceController);
AttendanceRoute.route("/").get(getAllAttendanceController);

export default AttendanceRoute;
