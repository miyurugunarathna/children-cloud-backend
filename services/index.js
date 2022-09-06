import { save, login } from "./user.service.js";
import {
  saveMedicineService,
  updateMedicineService,
  deleteMedicineService,
  getMedicinesService,
} from "./medicine.service.js";

import {
  saveEmployeeService,
  updateEmployeeService,
  deleteEmployeeService,
  getEmployeesService,
  getAllEmployeeService,
} from "./employeeReg.service.js";

import {
  saveAttendanceService,
  getAllAttendanceService,
  getAttendanceService,
} from "./attendance.service.js";

export {
  save,
  login,
  saveMedicineService,
  updateMedicineService,
  deleteMedicineService,
  getMedicinesService,
  saveEmployeeService,
  updateEmployeeService,
  deleteEmployeeService,
  getEmployeesService,
  getAllEmployeeService,
  saveAttendanceService,
  getAllAttendanceService,
  getAttendanceService,
};
