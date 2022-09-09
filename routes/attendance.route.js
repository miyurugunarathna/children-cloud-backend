import Express from "express";

import {
  saveAttendanceController,
  getAllAttendanceController,
  getAttendanceController,
} from "../controllers/index.js";

const AttendanceRoute = Express.Router();

AttendanceRoute.post("/save", saveAttendanceController);
AttendanceRoute.get("/:Date", getAttendanceController);
AttendanceRoute.get("/", getAllAttendanceController);

export default AttendanceRoute;
