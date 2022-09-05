import { saveUser, loginUser, getUser } from "./user.repository.js";
import {
  saveMedicine,
  updateMedicine,
  deleteMedicine,
  getMedicines,
} from "./medicine.repository.js";

import {
  saveEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getAllEmployee,
} from "./employeeReg.repository.js";

import {
  saveAttendance,
  getAttendance,
  getAllAttendance,
} from "./attendance.repository.js";

export {
  saveUser,
  loginUser,
  getUser,
  saveMedicine,
  updateMedicine,
  deleteMedicine,
  getMedicines,
  saveEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getAllEmployee,
  saveAttendance,
  getAttendance,
  getAllAttendance,
};
