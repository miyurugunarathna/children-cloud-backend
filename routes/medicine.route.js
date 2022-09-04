import express from "express";
import {
  saveMedicineController,
  updateMedicineController,
  deleteMedicineController,
  getMedicinesController,
} from "../controllers/index.js";

const medicineRouter = express.Router();

medicineRouter.post("/", saveMedicineController);
medicineRouter.delete("/:id", deleteMedicineController);
medicineRouter.put("/:id", updateMedicineController);
medicineRouter.get("/:id", getMedicinesController);

export default medicineRouter;
