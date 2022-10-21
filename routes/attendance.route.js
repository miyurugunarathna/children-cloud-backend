import Express from "express";

import {
  saveAttendanceController,
  getAllAttendanceController,
  getAttendanceController,
  updateAttenanceController,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const AttendanceRoute = Express.Router();

AttendanceRoute.post("/save", saveAttendanceController);
AttendanceRoute.get("/:Date", getAttendanceController);
AttendanceRoute.get("/", getAllAttendanceController);
AttendanceRoute.put("/status", authenticate, updateAttenanceController);

export default AttendanceRoute;
