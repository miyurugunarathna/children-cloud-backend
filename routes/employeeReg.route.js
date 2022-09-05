import express from "express";

import {
  saveEmployeeController,
  updateEmployeeController,
  deleteEmployeeController,
  getEmployeeController,
  getAllEmployeeController,
} from "../controllers/index.js";

const EmployeeRouter = express.Router();

EmployeeRouter.route("/:id").get(getEmployeeController);
EmployeeRouter.route("/add").post(saveEmployeeController);
EmployeeRouter.route("/").get(getAllEmployeeController);
EmployeeRouter.route("/:id").delete(deleteEmployeeController);
EmployeeRouter.route(":/id").put(updateEmployeeController);

export default EmployeeRouter;
