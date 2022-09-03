import express from "express";
import { saveMedicineController, updateMedicineController, deleteMedicineController, getMedicinesController } from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js"; 

const medicineRouter = express.Router();

medicineRouter.post("/add", authenticate , saveMedicineController);
medicineRouter.delete("/:id", deleteMedicineController);
medicineRouter.put("/:id", updateMedicineController);
medicineRouter.get('/', authenticate , getMedicinesController);

export default medicineRouter;