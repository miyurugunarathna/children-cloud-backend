import {
  saveAttendance,
  getAllAttendance,
  getAttendance,
} from "../repository/index.js";

import Success from "../utils/success.js";

export const saveAttendanceController = async (req, res) => {
  try {
    const Date = req.user._id;
    const attendance = await saveAttendance(req.body, Date);
    res.json(Success(attendance, " Successfully Employee Saved"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAttendanceController = async (req, res) => {
  try {
    const EmpID = req.user._id;
    const attendance = await getAttendance(EmpID);
    res.json(Success(attendance, "Successfully get Employee Attendance"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllAttendanceController = async (req, res) => {
  try {
    const Date = req.user._id;
    const attendance = await getAllAttendance(Date);
    res.json(Success(attendance, "Successfully get Attendance Details"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
