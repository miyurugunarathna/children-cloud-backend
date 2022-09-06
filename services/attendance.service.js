import {
  saveAttendance,
  getAllAttendance,
  getAttendance,
} from "../repository/index.js";

import AppError from "../utils/appError.js";

export const saveAttendanceService = async (data) => {
  const { Date, EmpID, EmployeeName, INtime, OUTtime, IsPresent } = data;
  try {
    const attendance = await saveAttendance({
      Date,
      EmpID,
      EmployeeName,
      INtime,
      OUTtime,
      IsPresent,
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
