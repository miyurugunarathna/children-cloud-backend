import {
  saveMedicine,
  updateMedicine,
  deleteMedicine,
  getMedicines,
  getStaffByChildID,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveMedicineService = async (data) => {
  const { childID, childName, medicineName, morning, evening, beforAfterMeal } =
    data;
  try {
    const staffUser = await getStaffByChildID(childID);

    if (!staffUser) {
      const medicine = await saveMedicine({
        childID,
        childName,
        medicineName,
        morning,
        evening,
        beforAfterMeal,
        staffID: "Staff didn't Assigned",
      });
      return Promise.resolve(medicine);
    }

    const medicine2 = await saveMedicine({
      childID,
      childName,
      medicineName,
      morning,
      evening,
      beforAfterMeal,
      staffID: staffUser.staff,
    });
    return Promise.resolve(medicine2);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateMedicineService = async (id, data) => {
  try {
    const medicine = await updateMedicine(id, data);
    return Promise.resolve(medicine);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteMedicineService = async (id) => {
  try {
    const medicine = await deleteMedicine(id);
    return Promise.resolve(medicine);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getMedicinesService = async (id) => {
  try {
    const medicines = await getMedicines(id);
    return Promise.resolve(medicines);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
