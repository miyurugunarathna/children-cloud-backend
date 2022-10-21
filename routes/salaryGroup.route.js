import express from "express";
import {
  saveSalaryGroupController,
  getSalaryGroupController,
  getSalaryGroupByIdController,
  getSalaryGroupByStaffIdController,
  updateSalaryGroupController,
  deleteSalaryGroupController,
} from "../controllers/index.js";

// import { authenticate } from "../middleware/auth.middleware.js";

const salaryGroupRouter = express.Router();

salaryGroupRouter.post("/add", saveSalaryGroupController);
salaryGroupRouter.get("/", getSalaryGroupController);
salaryGroupRouter.get("/:id", getSalaryGroupByIdController);
salaryGroupRouter.get("/staff/:id", getSalaryGroupByStaffIdController);
salaryGroupRouter.put("/:id", updateSalaryGroupController);
salaryGroupRouter.delete("/:id", deleteSalaryGroupController);

export default salaryGroupRouter;
