import express from "express";
import {
  saveAssignStaffController,
  updateAssignStaffController,
  deleteAssignStaffController,
  getAllAssignedStaffController,
} from "../controllers/index.js";

const AssignStaffRouter = express.Router();

AssignStaffRouter.post("/", saveAssignStaffController);
AssignStaffRouter.delete("/:id", deleteAssignStaffController);
AssignStaffRouter.put("/:id", updateAssignStaffController);
AssignStaffRouter.get("/", getAllAssignedStaffController);

export default AssignStaffRouter;
