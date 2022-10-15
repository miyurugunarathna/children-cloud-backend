import {
  saveAttendance,
  getAllAttendance,
  getAttendance,
} from "../repository/index.js";

import AppError from "../utils/appError.js";

export const saveAttendanceService = async (data) => {
  const { EmpID, INtime, OUTtime, TotalHrs } = data;
  try {
    const attendance = await saveAttendance({
      EmpID,
      INtime,
      OUTtime,
      TotalHrs,
    });
    return Promise.resolve(attendance);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAttendanceService = async (id) => {
  try {
    const attendance = await getAttendance(id);
    return Promise.resolve(attendance);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllAttendanceService = async () => {
  try {
    const attendance = await getAllAttendance();
    return Promise.resolve(attendance);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
