import {
  saveSchedule,
  updateSchedule,
  deleteSchedule,
  getSchedules,
  getStaffByChildID,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveScheduleService = async (data) => {
  const {
    childID,
    childName,
    subject,
    address,
    startingTime,
    endingTime,
    day,
    teacherName,
  } = data;
  try {
    const staffUser = await getStaffByChildID(childID);

    if (!staffUser) {
      const schedule = await saveSchedule({
        childID,
        childName,
        subject,
        address,
        startingTime,
        endingTime,
        day,
        teacherName,
        staffID: "Staff didn't Assigned",
      });
      return Promise.resolve(schedule);
    }
    const schedule2 = await saveSchedule({
      childID,
      childName,
      subject,
      address,
      startingTime,
      endingTime,
      day,
      teacherName,
      staffID: staffUser.staff,
    });
    return Promise.resolve(schedule2);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateScheduleService = async (id, data) => {
  try {
    const schedule = await updateSchedule(id, data);
    return Promise.resolve(schedule);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteScheduleService = async (id) => {
  try {
    const schedule = await deleteSchedule(id);
    return Promise.resolve(schedule);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSchedulesService = async (id) => {
  try {
    const schedules = await getSchedules(id);
    return Promise.resolve(schedules);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
