import express from "express";
import {
  saveScheduleController,
  updateScheduleController,
  deleteScheduleController,
  getSchedulesController,
} from "../controllers/index.js";

const scheduleRouter = express.Router();

scheduleRouter.post("/", saveScheduleController);
scheduleRouter.delete("/:id", deleteScheduleController);
scheduleRouter.put("/:id", updateScheduleController);
scheduleRouter.get("/:id", getSchedulesController);

export default scheduleRouter;
