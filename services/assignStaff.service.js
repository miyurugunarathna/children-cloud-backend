import {
  saveAssignedStaff,
  deleteAssignedStaff,
  updateAssignStaffData,
  getAll,
  getPendingStaff,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveAssignedStaffService = async (data) => {
  const { childID, name, age, staff, status } = data;
  try {
    const assignedStaff = await saveAssignedStaff({
      childID,
      name,
      age,
      staff,
      status,
    });
    return Promise.resolve(assignedStaff);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateAssignedStaffDataService = async (id, data) => {
  try {
    const { childID, staff, status } = data;
    const assignedStaff = await updateAssignStaffData(id, {
      childID,
      staff,
      status,
    });
    return Promise.resolve(assignedStaff);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteAssignedStaffService = async (id) => {
  try {
    const assignedStaff = await deleteAssignedStaff(id);
    return Promise.resolve(assignedStaff);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllAssignedStaffService = async () => {
  try {
    const assignedStaffs = await getAll();
    return Promise.resolve(assignedStaffs);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPendingAssignedStaffService = async () => {
  try {
    const status = "pending";
    const assignedStaffs = await getPendingStaff(status);
    return Promise.resolve(assignedStaffs);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
