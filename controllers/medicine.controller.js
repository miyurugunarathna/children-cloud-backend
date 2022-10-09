import {
  saveMedicineService,
  updateMedicineService,
  deleteMedicineService,
  getMedicinesService,
  getMedicinesForStaffService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveMedicineController = async (req, res) => {
  try {
    const medicine = await saveMedicineService(req.body);
    res.json(Success(medicine, " Successfully Medicine Added."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateMedicineController = async (req, res) => {
  try {
    const medicine = await updateMedicineService(req.params.id, req.body);
    res.json(Success(medicine, "Successfully Medicine Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteMedicineController = async (req, res) => {
  try {
    const medicine = await deleteMedicineService(req.params.id);
    res.json(Success(medicine, "Successfully Medicine Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getMedicinesController = async (req, res) => {
  try {
    const childID = req.params.id;
    const medicines = await getMedicinesService(childID);
    res.json(Success(medicines, "Successfully Fetched Medicines Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getMedicinesForStaffController = async (req, res) => {
  try {
    const staffID = req.user._id;
    const medicines = await getMedicinesForStaffService(staffID);
    res.json(Success(medicines, "Successfully Fetched Medicines Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
